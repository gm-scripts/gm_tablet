-- FiveM Tablet / Made by Eichenholz and Obsidianical

function ToggleTablet()
    SendNUIMessage({
        openTablet = true
    })
    SetNuiFocus(true, true)
end

AddEventHandler('onResourceStop', function(resource)
    if resource == GetCurrentResourceName() then
		SetNuiFocus(false)
	end
end)
