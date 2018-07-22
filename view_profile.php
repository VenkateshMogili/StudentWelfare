<?php
session_start();
error_reporting(0);
require_once 'connect.php';
if(isset($_SESSION['stuid'])){
	$id=$_SESSION['stuid'];
	$sql=mysqli_query($con,"SELECT * FROM students where stuid='$id' ");
	while ($row=mysqli_fetch_array($sql))
	{
	$stuid=$row['stuid'];
	$name=$row['s_name'];
	$gender=$row['s_gender'];
	$branch=$row['s_branch'];
	$class=$row['s_class'];
	$year=$row['s_year'];
	$dorm=$row['s_dorm'];
	$mobile=$row['s_phone'];
	$dateof_reg=$row['dateof_reg'];
	$profile=$row['profile'];
	}
?>
	<div class="col-md-4" style="background-color:gray;padding:10px;border-radius:20px;height:400px;font-family:lucida sans;">
	<?php
echo "<center>";
if ($profile==""){
	echo "<a href='#' onclick='load_page(\"profile.php?stuid=".$stuid."\")' title='click here to change your profile picture'><img src='images/profile.png' style='border-radius:100%;width:250px;height:250px;'></a><br><br>";
}else{
	echo "<a href='#' onclick='load_page(\"profile.php?stuid=".$stuid."\")' title='click here to change your profile picture'><img src=".$profile." style='border-radius:100%;width:250px;height:250px;'></a><br><br>";
	}
	echo "<b style='font-size:30px;color:white;text-shadow:1px 2px 3px #3399cc'>".$stuid."<br>".$year." , ".$class."</b></center>
	<center>";
	?>
</div>
<div class="col-md-1">
	</div>
	<div class="col-md-7" style="background-color:teal;color:white;font-family:lucida sans;padding:10px;border-radius:20px;height:400px">
		<?php
	echo "<b style='float:left'>Name: </b><b style='float:right'>".$name."</b><br><br>";
	echo "<b style='float:left'>Gender: </b><b style='float:right'>".$gender."</b><br><br>";
	echo "<b style='float:left'>Branch: </b><b style='float:right'>".$branch."</b><br><br>";
	echo "<b style='float:left'>Class: </b><b style='float:right'>".$class."</b><br><br>";
	echo "<b style='float:left'>Year: </b><b style='float:right'>".$year."</b><br><br>";
	echo "<b style='float:left'>Dorm: </b><b style='float:right'>".$dorm."</b><br><br>";
	echo "<b style='float:left'>Mobile: </b><b style='float:right'>".$mobile."</b><br><br>";
	echo "<b style='float:left'>Date of registration: </b><b style='float:right'>".$dateof_reg."</b><br><br>";
	?>
	</div>
	<?php
}
else{
	echo "<script>alert('Please login to see your profile');window.location='login.php';</script>";
}
?>
<style>
table{width:50%;box-shadow:1px 2px 3px black;background-color:#3399ff;opacity:0.8;}
table:hover{opacity:1;transition:0.4s;}
#t1{background-color:#FF6000;opacity:0.9;width:50%;box-shadow:1px 2px 3px black;}
#t1:hover{opacity:1;transition:0.4s;}
th{background-color:#FF6000;padding:10px;color:white;}
td{padding:10px;width:30%;font-family:arial;text-shadow:0px 0px 3px black;color:white;}
</style>
