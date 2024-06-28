import React, {useEffect, useRef} from 'react'

import useAppState from '../../store/appState/useAppState'
import { LayoutGroup, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion'
import { CssVarsProvider, useColorScheme, extendTheme, useTheme } from "@mui/material-next/styles"
import {Box} from '@mui/material'
import SpeedDial from '@mui/material/SpeedDial'

import SpeedDialAction from '@mui/material/SpeedDialAction'
import {US, CN,JP, TW } from 'country-flag-icons/react/3x2'
import SvgIcon from '@mui/material/SvgIcon'
import {Locale} from "../../localization/types"
import backgroundImage from '../../assets/images/backgroundWeb.png'

import NoDeamon from './Daemon'


type action = {
    icon: JSX.Element
    name: Locale
}
const actions: action[] = [
    { icon: <SvgIcon component={JP} inheritViewBox/>, name: 'ja-JP' },
    { icon: <SvgIcon component={CN} inheritViewBox/>, name: 'zh-CN' },
    { icon: <SvgIcon component={TW} inheritViewBox/>, name: 'zh-TW' },
    { icon: <SvgIcon component={US} inheritViewBox/>, name: 'en-US' }
]

const App = () => {
    const {
        locale, 
        setLocale,
    } = useAppState()
    const drawerDragControls = useDragControls()


    const showLocationIcon = () => {
        switch(locale) {
            default:
            case 'en-US': {
                return (
                    <SvgIcon component={US} inheritViewBox/>
                )
            }
            case 'ja-JP': {
                return (
                    <SvgIcon component={JP} inheritViewBox/>
                )
            }
            case 'zh-CN': {
                return (
                    <SvgIcon component={CN} inheritViewBox/>
                )
            }
            case 'zh-TW': {
                return (
                    <SvgIcon component={TW} inheritViewBox/>
                )
            }
        }
    }

    const switchShow = () => {
        return (
            <NoDeamon />
        )
    }

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, 
			backgroundPosition: 'center', 
			backgroundSize: 'cover', 
			backgroundRepeat: 'no-repeat',
			width: '100vw'
			}}>

		
			{switchShow()}

        </div>
    )
}

export default App