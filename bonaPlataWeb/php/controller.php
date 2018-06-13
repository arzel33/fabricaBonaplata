<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST["repre_on"])) {
	$serverStatus = checkServerStatus();
	if ($serverStatus != 1) {
		shell_exec("sudo forever stopall");
		shell_exec("sudo forever start /home/pi/Arduino/bonaplata.js");
		$output = "Començant...";
		makeServerBusy();
	}
	else {
		$output = "La maqueta ja està sent controlada.";
	}	
	echo json_encode($output);
}
else if (isset($_POST["motors_on"])) {
	clearServer();
	echo json_encode("Llest");
}

function checkServerStatus() {
	$connection = mysqli_connect("localhost", /*USERNAME"*/, /*"PASSWORD"*/, "fabricaBonaplata");
	$result = mysqli_query($connection, "SELECT status FROM procedures");
	$status = mysqli_fetch_assoc($result);
	return implode(" ", $status);
}
function makeServerBusy() {
	$connection = mysqli_connect("localhost", /*USERNAME"*/, /*"PASSWORD"*/, "fabricaBonaplata");
	mysqli_query($connection, "UPDATE procedures SET status=1;");
}
function clearServer() {
	$connection = mysqli_connect("localhost", /*USERNAME"*/, /*"PASSWORD"*/, "fabricaBonaplata");
	mysqli_query($connection, "UPDATE procedures SET status=0;");
}

?>
