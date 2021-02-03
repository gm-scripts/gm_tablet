-- FiveM Tablet / Made by Eichenholz and Obsidianical

ESX = nil

print('TabletStarted')

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
  end
end)

--[[=====================================================================================
                                    Functions
=====================================================================================--]]

function OpenTablet()
    print('ToggleTablet')
    ToggleTablet()
    TriggerEvent('tablet:Animation')
    TriggerServerEvent('tablet:getbalance')
    LoadBills()
end

--[[=====================================================================================
                                 Toggle Tablet
=====================================================================================--]]

local hasTabletItem = false

Citizen.CreateThread(function()
    while true do
        if IsControlJustPressed(1, Config.OpenKey) then
            print('F2 Pressed')
            if Config.EnableItem then
                ESX.TriggerServerCallback('tablet:DoesPlayerHaveTabletItem', function(item)
                    if item then
                        OpenTablet()
                    else
                        ESX.ShowNotification(_U('no_tablet'))
                    end
                end, 'tablet')
            elseif not Config.EnableItem then
                OpenTablet()
            end
        end
        Citizen.Wait(0)
    end
end)
