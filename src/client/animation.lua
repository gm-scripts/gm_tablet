
local holdingTablet = false
local tabletModel = 'prop_cs_tablet'
local animDict = 'amb@world_human_seat_wall_tablet@female@base'
local animName = 'base'
local tablet_net = nil

RegisterNetEvent('tablet:Animation')
AddEventHandler('tablet:Animation', function()
    if not holdingTablet then
        RequestModel(GetHashKey(tabletModel))
        while not HasModelLoaded(GetHashKey(tabletModel)) do
            Citizen.Wait(100)
        end

        RequestAnimDict(animDict)
        while not HasAnimDictLoaded(animDict) do
            Citizen.Wait(100)
        end

        local plyCoords = GetOffsetFromEntityInWorldCoords(GetPlayerPed(PlayerId()), 0.0, 0.0, -5.0)
        local tabletSpawned = CreateObject(GetHashKey(tabletModel), plyCoords.x, plyCoords.y, plyCoords.z, 1, 1, 1)
        Citizen.Wait(1000)
        local netid = ObjToNet(tabletSpawned)
        SetNetworkIdExistsOnAllMachines(netid, true)
        NetworkSetNetworkIdDynamic(netid, true)
        SetNetworkIdCanMigrate(netid, false)
        AttachEntityToEntity(tabletSpawned, GetPlayerPed(PlayerId()), GetPedBoneIndex(GetPlayerPed(PlayerId()), 28422), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1, 1, 0, 1, 0, 1)
        TaskPlayAnim(GetPlayerPed(PlayerId()), 1.0, -1, -1, 50, 0, 0, 0, 0) -- 50 = 32 + 16 + 2
        TaskPlayAnim(GetPlayerPed(PlayerId()), animDict, animName, 1.0, -1, -1, 50, 0, 0, 0, 0)
        tablet_net = netid
        holdingTablet = true
    else
        ClearPedSecondaryTask(GetPlayerPed(PlayerId()))
        DetachEntity(NetToObj(tablet_net), 1, 1)
        DeleteEntity(NetToObj(tablet_net))
        tablet_net = nil
        holdingTablet = false
    end
end)