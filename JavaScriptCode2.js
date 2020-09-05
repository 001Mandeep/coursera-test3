(function(window)
{
	var sayHello = {};
	var greet = "Hello";

	sayHello.speak= function (name) 
	{
  	   console.log(greet + " " + name);
	}
	window.sayHello = sayHello;
})(window);