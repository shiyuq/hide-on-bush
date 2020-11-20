export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1000) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.getElementById(id).remove()
  }, timeout)
}

export function getAllUrlParams (url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1)
  var obj = {}
  if (queryString) {
    queryString = queryString.split('#')[0]
    var arr = queryString.split('&')
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')
      var paramName = a[0]
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1]
      paramName = paramName.toLowerCase()
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase()
      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, '')
        if (!obj[key]) obj[key] = []
        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1]
          obj[key][index] = paramValue
        } else {
          obj[key].push(paramValue)
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]]
          obj[paramName].push(paramValue)
        } else {
          obj[paramName].push(paramValue)
        }
      }
    }
  }
  return obj
}
