<!DOCTYPE html>
<html>
<head>
	<title>Student Welfare Platform</title>
</head>
<?php
session_start();
error_reporting(0);
require_once 'connect.php';
if(isset($_SESSION['stuid']))
{
	$stuid=$_SESSION['stuid'];
	$complaint=mysql_real_escape_string(htmlspecialchars_decode(htmlentities(htmlspecialchars($_POST['complaint']))));
	$ip=$_SERVER['REMOTE_ADDR'];
	$dates=date('d-m-Y');

	$sql=mysqli_query($con,"SELECT * FROM complaints where stuid='$stuid' and complaint='$complaint' and dates='$dates'");
	if(mysqli_fetch_array($sql)==true)
	{
		echo "<script>alert('You have already sent');window.location='index.php';</scirpt>";
	}
	else{
		$a=mysqli_query($con,"INSERT INTO complaints(stuid,complaint,dates,ip) VALUES('$stuid','$complaint','$dates','$ip')");
		if($a==true)
		{
			echo "<script>alert('Your complaint has been sent successfully....');window.location='index.php';</script>";
		}
		else{
			echo "<script>alert('Error occured');window.location='index.php';</script>";
		}
	}
}
else{
	echo "<script>alert('Please Login');window.location='login.php';</script>";
}
?>
<body>
	
	</body>
</html>