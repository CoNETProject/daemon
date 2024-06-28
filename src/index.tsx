import React from 'react'

import { createRoot } from "react-dom/client"
import 'modern-normalize'
import App from './components/App/App'
import RootProvider from './components/Providers/RootProvider'
import './index.css'
import '../src/font/font.css'

const rootElement = document.getElementById('root')

if (rootElement && 'serviceWorker' in navigator) {
	
	const root = createRoot(rootElement)

	root.render(
		
		<RootProvider>
			<App/>
		</RootProvider>
		
	)
	// navigator.serviceWorker.register("/sw.js")

} else {
	console.log (`CoNET Platform Loader Error: can't find rootElement`)
}
