const weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function (err, result) {
    if (err) console.log(err);
    const {
        current:
            {
                temperature,
                skytext
            }
    } = result[0];
    console.log(temperature);
    console.log(skytext);
    //console.log(JSON.stringify(result, null, 2));
});

