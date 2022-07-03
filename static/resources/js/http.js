// xuejianxinokok@163.com  20210318
const $http = (function (exports) {
  const localStorageKey = '__token__'
  // const APP_API_URL='http://localhost:8080';
  // const APP_API_URL='http://192.168.1.189:8080';
  const APP_API_URL = ''

  function http (endpoint, { body, ...customConfig } = {}) {
    const token = window.localStorage.getItem(localStorageKey)
    const headers = { 'content-type': 'application/json' }
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers
      }
    }
    if (body) {
      config.body = JSON.stringify(body)
    }
    return window
      .fetch(`${APP_API_URL}${endpoint}`, config)
      .then(async response => {
        if (response.status === 401) {
          logout()
          window.location.assign(window.location)
          return
        }
        if (response.ok) {
          return await response.json()
        } else {
        // const errorMessage = await response.text()
        // return Promise.reject(new Error(errorMessage))
          const res = await response.json()
          return Promise.reject(res)
        }
      })
  }

  function post (url, data) {
    return http(url, { body: data, method: 'POST' })
  }

  function get (url) {
    return http(url)
  }

  exports.post = post
  exports.get = get
  return exports
}({}))
