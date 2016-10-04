var weatherAPI = {};

$.get('http://api.wunderground.com/api/f25e47528444be94/conditions/q/OR/Portland.json')
	.done(function(data){
	console.log(data)
	weatherAPI = data;
	$(Weather).text(
		"PDX currently: "+
		weatherAPI.current_observation.weather + " Temp: "+
		weatherAPI.current_observation.temp_c + " Celcius, and Rain is: " +
		weatherAPI.current_observation.precip_today_string + "today."
	)
	});


	console.log('Temp Celcius: ', weatherAPI.current_observation.temp_c) // returns temp in C
	console.log('Daily Conditions: ', weatherAPI.current_observation.weather) // string of conditions
	console.log('Daily Rain: ', weatherAPI.current_observation.precip_today_string) // string of precipitation for the display
