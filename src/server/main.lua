ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('tablet:DoesPlayerHaveTabletItem', function(source, cb, item)
    local xPlayer  = ESX.GetPlayerFromId(source)
    local amount = xPlayer.getInventoryItem(item).count
    if amount > 0 then
        cb(true)
    else
        cb(false)
    end
end)