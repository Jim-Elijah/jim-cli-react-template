const ls = localStorage
const ss = sessionStorage
const storage = {
	ls,
	ss,
  clear() {
    ls.clear()
    ss.clear()
  },
}
Object.keys(storage).forEach(key => {
	const __storage = storage[key]
  if (key === 'clear') {
    return
  }
	const obj = {
		get(key) {
			try {
				return JSON.parse(__storage.getItem(key))
			} catch (err) {
				return __storage.getItem(key)
			}
		},
		set(key, value) {
			__storage.setItem(key, JSON.stringify(value))
		},
		remove(key) {
			__storage.removeItem(key)
		},
		clear() {
			__storage.clear()
		},
	}
	storage[key] = obj
})

export default storage
