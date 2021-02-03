ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

function LoadPlayer(source)
	local xPlayer = ESX.GetPlayerFromId(source)

	MySQL.Async.fetchAll('SELECT bank_number FROM users WHERE identifier = @identifier', {
		['@identifier'] = xPlayer.identifier
	}, function(result)
		local bankNumber = result[1].bank_number

		if bankNumber == nil then
			bankNumber = GenerateUniqueBankNumber()

			MySQL.Async.execute('UPDATE users SET bank_number = @bank_number WHERE identifier = @identifier', {
				['@identifier']   = xPlayer.identifier,
				['@bank_number'] = bankNumber
			})
		end
		TriggerClientEvent('tablet:bankloaded', source, bankNumber)
	end)
end

function GenerateUniqueBankNumber()
	local foundNumber, bankNumber = false, nil

	while not foundNumber do
		Citizen.Wait(100)

		math.randomseed(GetGameTimer())
		bankNumber = math.random(100000, 999999)

		local result = MySQL.Sync.fetchAll('SELECT COUNT(*) as count FROM users WHERE bank_number = @bankNumber', {
			['@bankNumber'] = bankNumber
		})

		if tonumber(result[1].count) == 0 then
			foundNumber = true
		end
	end

	return bankNumber
end

RegisterServerEvent('tablet:getbalance')
AddEventHandler('tablet:getbalance', function()
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	balance = xPlayer.getAccount('bank').money
	TriggerClientEvent('tablet:currentbalance', _source, balance)
end)

ESX.RegisterServerCallback('esx_billing:getBills', function(source, cb)
	local xPlayer = ESX.GetPlayerFromId(source)

	MySQL.Async.fetchAll('SELECT * FROM billing WHERE identifier = @identifier', {
		['@identifier'] = xPlayer.identifier
	}, function(result)
		local bills = {}
		for i=1, #result, 1 do
			table.insert(bills, {
				label      = result[i].label,
				amount     = result[i].amount
			})
		end
		cb(bills)
	end)
end)

AddEventHandler('esx:playerLoaded', function(playerId)
	LoadPlayer(playerId)
end)
