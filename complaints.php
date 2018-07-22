<!DOCTYPE html>
<html>
<head>
	<title>Student Welfare Platform</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/font/css/font-awesome.css">
</head>
<?php
session_start();
error_reporting(0);
require 'connect.php';
if(isset($_SESSION['stuid']))
{
?>
<body>
	<center><h1 style="color:white;font-family:lucida sans;text-shadow:1px 2px 3px black">Complaint Box</h1></center>
	<center>
		<form action="complaints_action.php" method="POST">
			<textarea style="width:50%;height:350px;font-family:lucida sans;color:brown" class="form-control" name="complaint" placeholder="Write your complaint here...." autofocus required></textarea>
			<br><button class="btn btn-success">Send <i class="fa fa-send"></i></button>
		</form>
	</center>
	<?php
}
else{
	echo "<script>alert('Please Login');window.location='login.php';</script>";
}
?>
</body>
</html>