-- FiveM Tablet / Made by Eichenholz and Obsidianical

ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
  end
end)

function hasTablet (cb)
  if (ESX == nil) then return cb(0) end
  ESX.TriggerServerCallback('tablet:getItemAmount', function(qtty)
    cb(qtty > 0)
  end, 'tablet')
end

function ShowNoPhoneWarning () 
  if (ESX == nil) then return end
  ESX.ShowNotification(_U('no_phone'))
end 
