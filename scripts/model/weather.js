var weatherAPI = {};

$.get('http://api.wunderground.com/api/f25e47528444be94/conditions/q/OR/Portland.json')
	.done(function(data){
	console.log(data);
	weatherAPI = data;
	$(Weather).text(
		"PDX: "+
		weatherAPI.current_observation.weather + " "+
		weatherAPI.current_observation.temp_c + "C. Rain: " +
		weatherAPI.current_observation.precip_today_string + "today."
	);
		if (parseInt(weatherAPI.current_observation.temp_f) > 65) {
			$(tempPlaceholder).text(" Hot");
		};
		if (parseInt(weatherAPI.current_observation.UV) > 4) {
			$(lightPlaceholder).text("Bright");
		};
		if (parseInt(weatherAPI.current_observation.precip_today_metric) > 0) {
			$(moistPlaceholder).text(" and wet...");
		};
	});



	console.log('Temp Celcius: ', weatherAPI.current_observation.temp_c) // returns temp in C
	console.log('Daily Conditions: ', weatherAPI.current_observation.weather) // string of conditions
	console.log('Daily Rain: ', weatherAPI.current_observation.precip_today_string) // string of precipitation for the display
