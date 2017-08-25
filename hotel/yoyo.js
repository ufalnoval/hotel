$( document ).ready(function() {
	Notify("Can't Touch This");
	Notify("Stop! Hammer time", null, null, 'danger');

	Notify("I told you homeboy (You can't touch this)",
	function () { 
		alert("clicked notification")
	},
	function () { 
		alert("clicked x")
	},
	'success'
);

});