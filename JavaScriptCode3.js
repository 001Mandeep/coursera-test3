(function(window)
{
	sayBye = {};
	var greet = "Good Bye";
	sayBye.speak = function (name) 
	{
  	  console.log(greet + " " + name);
	}
	window.sayBye = sayBye;
})(window);