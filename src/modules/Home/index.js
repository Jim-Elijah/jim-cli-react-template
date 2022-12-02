import React, { Component } from 'react'
import { getUserInfo } from '../../utils/api'

export default class Home extends Component {
	state = {
		user: {}
	}
	componentDidMount() {
		getUserInfo()
			.then(data => {
				console.log('getUserInfo res', data)
				this.setState({
					user: data
				})
			})
			.catch(e => {
				console.error(e)
			})
	}
	render() {
		const { user } = this.state
		return user.name ? <p>welcome {user.name} </p> : <h3>home</h3>
	}
}
