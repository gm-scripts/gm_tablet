-- FiveM Tablet / Made by Eichenholz and Obsidianical

local tabletOpen = false

function ToggleTablet()
    if not tabletOpen then
        SendNUIMessage({
            openTablet = true
        })
        SetNuiFocus(true, true)
    elseif tabletOpen then
        SendNUIMessage({
            openTablet = false
        })
        SetNuiFocus(false)
    end
end

AddEventHandler('onResourceStop', function(resource)
    if resource == GetCurrentResourceName() then
		SetNuiFocus(false)
	end
end)

  