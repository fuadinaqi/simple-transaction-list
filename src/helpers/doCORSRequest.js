export default (options) => {
  return new Promise((resolve, reject) => {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/'
    const x = new XMLHttpRequest()
      x.open(options.method, cors_api_url + options.url)
      x.onload = function() {
        resolve(JSON.parse(x.response))
      }
      x.onerror = function(e) {
        console.log(e)
        alert('fetch API error!')
        reject(e)
      }
      if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      }
      x.send(options.data)
  })
}
