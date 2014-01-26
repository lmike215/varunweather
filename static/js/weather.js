$(function ()
{
	$.get("http://ipinfo.io", function(response)
	{

		var location = response.city + "," + response.country;

		$.get("http://api.openweathermap.org/data/2.5/weather?q=" + location, function(data)
		{
			var description = data.weather[0].description;
			var icon = "static/img/" + data.weather[0].icon + ".jpg";
			var celcius = Math.round(data.main.temp - 273.15);
			var fahrenheit = Math.round(celcius * 9/5 + 32);

			$("h2").text(description);
			$("body").css("backgroundImage", "url(" + icon + ")");
			$("#f").text(fahrenheit);
			$("#c").text(celcius);
		});

	}, "jsonp");
});