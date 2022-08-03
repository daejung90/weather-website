const request = require ('request')

//weather request 



// const URL = 'http://api.weatherstack.com/current?access_key=5fdc4bc5442e4ae6316d0e04733df4ae&query=37.8267,-122.4233&units=m'

//  request({ url: URL, json:true }, (error, response) => {
//      if (error) {
//          console.log('Unable to connect to internet.')
//      } else if (response.body.error) {
//          console.log('Unable to find location!')
//      } else {
//          const currently = response.body.current.temperature
//          const feelslike = response.body.current.feelslike
    
//      console.log(response.body.current.weather_descriptions[0] + '.')
//      console.log('It is currently ' + currently + ' degrees out. It feels like ' + feelslike + ' degrees out.')
    
//      }
//  })



const forecast = (latitude, longitude, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key=5fdc4bc5442e4ae6316d0e04733df4ae&query=' + latitude + ',' + longitude + ',-122.4233&units=m'

    request({ url: URL, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to the Internet', undefined)
        } else if (response.body.error){
            callback('Unable to provide forecast.', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out. The preciptation is ' + response.body.current.precip + ' mm. ')
        }
    })

}
module.exports = forecast

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })