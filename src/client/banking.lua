ESX		= nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

--RegisterNUICallback('balance', function()
--	TriggerServerEvent('tablet:getbalance')
--	print('getbalance')
--end)

RegisterNetEvent('tablet:currentbalance')
AddEventHandler('tablet:currentbalance', function(balance)

	SendNUIMessage({
		type = "balance",
		balance = balance,
	})
	print(balance)
end)

RegisterNetEvent('tablet:bankloaded')
AddEventHandler('tablet:bankloaded', function(number)

	SendNUIMessage({
		type = "banknumber",
		number = number,
	})
	print(number)
end)

function LoadBills()
	ESX.TriggerServerCallback('esx_billing:getBills', function(bills)
		SendNUIMessage({
			type = "bills",
			billsdata = bills,
		})
		print(bills)
	end)
end
