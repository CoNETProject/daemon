import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    createClientProfile as createClientProfileActionCreator,
    deleteClientDevice as deleteClientDeviceActionCreator,
    setActiveProfile as setActiveProfileActionCreator,
    setClientDevices as setClientDevicesActionCreator,
    setClientProfiles as setClientProfilesActionCreator,
    setHasContainer as setHasContainerActionCreator,
    setHasNotification as setHasNoticationActionCreator,
    setHasUpdateAvailable as setHasUpdateAvailableActionCreator,
    setIsDrawerOpen as setIsDrawerOpenActionCreator,
    setIsModalOpen as setIsModalOpenActionCreator,
    setIsPlatformLoading as setIsPlatformLoadingActionCreator,
    setIsTouchDevice as setIsTouchDeviceActionCreator,
    setIsUnlocked as setIsUnlockedActionCreator,
    setLocale as setLocaleActionCreator,
    setNetworkState as setNetworkStateActionCreator,
    setNetworkStrength as setNetworkStrengthActionCreator,
    setShowOverlay as setShowOverlayActionCreator,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator,
    setWorkerServiceIsInitialized,
    updateClientDevice as updateClientDeviceActionCreator,
    updateClientProfile as updateClientProfileActionCreator,
	setShowGuide as _setShowGuide,
    setShowJoinUS as _setShowJoinUS,
	setShowAppStore as _setShowAppStore,
    setShowBlockScan as _setShowBlockScan,
    setLocalDaemon as _setLocalDaemon,
    setShowMiner as _setShowMiner,
    setShowDePINing as _setShowDePINing,
    setPendingRewards as _setPendingRewards

} from './appStateActions'


import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'

import {
    ClientProfiles,
    DeviceData,
    ModalNames,
    NetworkStates,
    NetworkStrength,
    PlatformLoadingTypes,
    ProfileData
} from "./appStateReducer"

export type WindowInnerSize = {
    width: number,
    height: number
}

const useAppState = () => {
    const dispatch = useDispatch()

    const theme = useTypedSelector(state => state.appState.theme)

    const setTheme = (theme: Theme) => {
        dispatch(setThemeActionCreator(theme))
    }


    const locale = useTypedSelector(state => state.appState.locale)
    const setLocale = (locale: Locale) => {
        dispatch(setLocaleActionCreator(locale))
    }


    return {

        theme,
        setTheme,
        locale,
        setLocale,
        
    }
}

export default useAppState
