<?php
session_start();
error_reporting(0);
?>
<html>
<title>Login</title>
<link rel="icon" href="images/profile.png">
<link rel="stylesheet" href="css/bootstrap.css">
<style>
input{padding:10px;border-radius:5px;color:#3399cc;margin:10px;border:2px solid #3399cc;font-family:lucida sans;}
input:hover{border:2px solid white;transition:1s;}
input:focus{transition:1s;border:2px solid white;}
button{padding:10px;width:100px;margin:10px;border:0px;border-radius:100px;transition:1s;color:white;border:2px solid white;background-color:#3399cc;font-family:georgia;}
button:hover{background-color:white;color:#3399cc;transition:1s;cursor:pointer;}
</style>
</head>
<?php
require_once 'connect.php';
?>
<body style="background-image:url('images/2.jpg');background-size:100% 200%;background-attachment:fixed;">
	<center><img src="images/profile.png" style="width:100px;height:100px;margin:10px;border-radius:100px;border:2px solid white;padding:2px;"><br><h3 style="color:white;font-family:lucida sans;">Login</h3></center>
	<form action="check_login.php" method="post">
	<center>
	<input type="text" placeholder="UserId: Ex:N130010" name="stuid" minlength="7" autofocus required><br>
	<input type="password" placeholder="Password: ******" name="password" minlength="3" required><br>
	<button type="submit" name="login">Login</button>
</form>
</center>
<div style="position:fixed;bottom:0%;left:0%;width:100%;background-color:#660033;padding:10px;">
	<center><b style="color:white;font-family:lucida sans;">&copy;Venkatesh Mogili,N130010
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &reg; RGUKT-IIIT-NUZVID</b></center>
	</div>
</body>

