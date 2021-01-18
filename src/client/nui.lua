-- FiveM Tablet / Made by Eichenholz and Obsidianical

openTablet = false

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

function ToggleTablet()
    SendNUIMessage({
        openTablet
    })
    SetDisplay(true)
end

RegisterNUICallback("exit", function(data)
    openTablet = false
    SetDisplay(false)
end)

AddEventHandler('onResourceStop', function(resource)
    if resource == GetCurrentResourceName() then
		SetDisplay(false)
	end
end)
