const request = require ('request')


const forecast = (latitude, longitude, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key=5fdc4bc5442e4ae6316d0e04733df4ae&query=' + latitude + ',' + longitude + ',-122.4233&units=m'

    request({ url: URL, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to the Internet', undefined)
        } else if (response.body.error){
            callback('Unable to provide forecast.', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out. The preciptation ' + response.body.current.precip + ' mm. ')
        }
    })

}
module.exports = forecast

