window.onload = function() {
	scrollTo(0, 0);
	setTimeout(function(){
		$("#header").animate({
			opacity: "1"
		}, 1200);
		setTimeout(function(){
			$("#header").animate({
				top: "15%"
			}, 690);
			setTimeout(function(){
				$("#description").animate({
					opacity: "1"
				}, 500);
				setTimeout(function(){
					$("#motors").animate({
						opacity: "1"
					}, 500);
					$("#repre").animate({
						opacity: "1"
					}, 500);
				}, 800);
			}, 600);
		}, 1500);	
	}, 500);
}
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