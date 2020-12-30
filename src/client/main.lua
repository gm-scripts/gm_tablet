-- FiveM Tablet / Made by Eichenholz and Obsidianical

ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
  end
end)

--[[=====================================================================================
                                    Functions
=====================================================================================--]]


--[[=====================================================================================
                                 Toggle Tablet
=====================================================================================--]]

local hasTabletItem = false

Citizen.CreateThread(function()
    while true do
        if IsControlJustPressed(1, Config.OpenKey) then
            if Config.EnableItem then
                ESX.TriggerServerCallback('tablet:DoesPlayerHaveTabletItem', function(item)
                    if item then
                        --ToggleTablet()
                        TriggerEvent('tablet:Animation')
                        print('ToggleTablet')
                    else
                        ESX.ShowNotification(_U('no_tablet'))
                    end
                end, 'tablet')
            elseif not Config.EnableItem then
                --ToggleTablet()
                TriggerEvent('tablet:Animation')
                print('ToggleTablet2')
            end
        end
        Citizen.Wait(2000)
    end
end)
