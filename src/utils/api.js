import request from './request'

export const getUserInfo = (params) => {
	return request('get', '/user', params)
}
