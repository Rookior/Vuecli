import request from '../untils/request'

export function login() {
    return request({
      url: '/repos/iview/iview-admin/releases/latest',
      method: 'get',
    })
}