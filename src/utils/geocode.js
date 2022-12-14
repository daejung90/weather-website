

const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoianVuZ2tpbTkwIiwiYSI6ImNsNXYzenYxbDA1ZW8za3A3OXpucnc0aDYifQ._AuqoiZWL-oUpBB7g1a14w&limit=1'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the internet.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try again.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode