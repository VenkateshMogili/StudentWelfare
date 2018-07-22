<!DOCTYPE html>
<html>
<head>
	<title>Student Welfare Platform</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<style>
	#loader{font-size:4em;color:blue;}
	a:hover{border-bottom:2px solid orange;transition:0.5s;font-weight: bold;}
	#box{background-color:white;box-shadow:1px 1px 5px 10px teal;transition:0.5s;border-radius:5px;}
	#box:hover{background-color:lightgray;box-shadow:1px 1px 5px 10px orange;transition:0.8s;border-radius:100px;}
	a{color:brown;}
	</style>
	<link rel="stylesheet" href="css/font/css/font-awesome.css">
</head>
<?php
session_start();
error_reporting(0);
require 'connect.php';
?>
<body style="background-image:url('images/background.jpg');background-size:100% 120%;background-attachment:fixed">
	<nav class="navbar navbar-inverse" style="border-radius:0px;border:0px;background:#660033;box-shadow:1px 2px 30px 10px gray;">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="" style="color:white;font-family:lucida sans"><i class="fa fa-user my"></i> Student Welfare</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#" onclick="load_page('complaints.php')">Complaint Box</a></li>
        <li><a href="#" onclick="load_page('events.php')">Events</a></li> 
        <li><a href="#" onclick="load_page('gallery.php')">Gallery</a></li> 
        <li><a href="#" onclick="load_page('gallery.php')">Dean Student Welfare</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="link">
<?php
if(isset($_SESSION['stuid']))
    {
      $student=$_SESSION['stuid'];
    ?>
    <?php echo $student;?><span class="caret"></span></a>
    <ul class="dropdown-menu" style="background-color:#3399ff;">
      <li class="dr"><a href="#" onclick="load_page('view_profile.php')"><i class="fa fa-eye menu"></i> View Profile</a></li>
      <li class="dr"><a href="#" onclick="load_page('editprofile.php')"><i class="fa fa-edit menu"></i> Edit Profile</a></li>
      <li class="dr"><a href="#" onclick="load_page('changepassword.php')"><i class="fa fa-key menu"></i> Change Password</a></li>
      <li class="dr"><a href="#" onclick="load_page('complaints_notifications.php')"><i class="fa fa-envelope-o menu"></i> Complaints</a></li>
    <?php
echo "<li class='dr'><a href='logout.php'><i class='fa fa-unlock menu'></i> Logout</a></li>
      </ul></li>";
  }
  else{
    echo '<li class="dr"><a href="login.php" id="link"><i class="fa fa-unlock menu"></i> Login</a></li>';
  }
?>
</ul>
</ul>
    </div>
  </div>
</nav>
<center>
	
	<div class="col-md-12" style="height:100%;position:" id="loading">
	<br><br><br><br><br><br><br><br><br>
	<center><h1 style="color:white;font-size:70px;text-shadow:1px 2px 3px black">Welcome to Student Welfare</h1></center>

	<!--<br>
	<div class="col-md-12">

	<div class="col-md-1">
	</div>
	<a href="#" onclick="load_page('complaints.php')"><div style="padding:10px;" class="col-md-3" id="box">
		<h1 style="color:green">Complaints</h1>
		<p>You can post your complaints here...</p>
	</div>
</a>
	<div class="col-md-1">
	</div>
	<a href="#"><div style=";padding:10px;" class="col-md-2" id="box">
		<h1 style="color:magenta">Events</h1>
		<p>Click here for events updates...</p>
	</div>
</a>
	<div class="col-md-1">
	</div>
	<a href="#"><div style="padding:10px;" class="col-md-3" id="box">
		<h1 style="color:green">Gallery</h1>
		<p>Click here for gallery....</p>
	</div>
</a>
<br><br><br>
</div>-->
</div>
	
	<div style="position:fixed;bottom:0%;left:0%;width:100%;background-color:#660033;padding:1px;">
		<center><i style="color:white;">&copy; Developed By Venkatesh Mogili
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&reg; RGUKT-IIIT-NUZVID</i></center>
	</div>
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/scripts.js"></script>

</body>
</html>