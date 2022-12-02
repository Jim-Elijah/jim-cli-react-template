import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './layout'
import { globalBus } from './utils/global'

let history

export default function App() {
	history = useHistory()
	useEffect(() => {
		globalBus.emit('setHistory', history)
	})
	return <Layout></Layout>
}
