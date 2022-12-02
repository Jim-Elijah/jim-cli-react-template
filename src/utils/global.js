import mitt from 'mitt'

export const globalBus = new mitt()
export let globalHistory = null

globalBus.on('setHistory', history => {
	console.log('get', history)
	globalHistory = history
})

