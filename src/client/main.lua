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
      Citizen.Wait(0)
        if IsControlJustPressed(1, Config.OpenKey) then
            if Config.EnableItem then
                if not hasTabletItem then
                    ESX.TriggerServerCallback('tablet:DoesPlayerHaveTabletItem', function(item)
                        if item then
                            hasTabletItem = true
                        end
                    end, 'tablet')
                    if hasTabletItem then
                        ToggleTablet()
                        print('ToggleTablet')
                    else
                elseif hasTabletItem then
                  ToggleTablet()
                  print('ToggleTablet')
                else
                  ESX.ShowNotification(_U('no_tablet'))
                end
            elseif not Config.EnableItem then
                ToggleTablet()
                print('ToggleTablet2')
            end
        end
    end
end)
