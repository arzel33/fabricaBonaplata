function repreOn() {
	$.ajax({
		method: "POST",
		url: "./php/controller.php",
		data: {
			repre_on: ""
		}
	})
	.done(function(msg) {		
		var json = JSON.parse(msg);
		alert(json);
	});

}
function motorsOn() {
	$.ajax({
		method: "POST",
		url: "./php/controller.php",
		data: {
			motors_on: ""
		}
	})
	.done(function(msg) {		
		var json = JSON.parse(msg);
		alert(json);
	});

}
