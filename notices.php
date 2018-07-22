<!DOCTYPE html>
<html>
<head>
    <title>Notices</title>
    <style>
    #noticeview{filter:blur(0px);-webkit-animation:notice 1s 1;-moz-animation:notice 1s 1;animation:notice 1s 1;}
    @keyframes notice{
        50%{-webkit-filter:blur(2px);}
    }
    @-webkit-keyframes notice{
        50%{-webkit-filter:blur(2px);}
    }
    @-moz-keyframes notice{
        50%{-webkit-filter:blur(2px);}
    }
    p{color:black;font-size:18px;}
    .para{color:black;font-size:18px;text-indent:50px;}
    </style>
</head>
<?php
session_start();
error_reporting(0);
require_once 'connect.php';
$id=mysql_real_escape_string($_GET['id']);
$ip=$_SERVER['REMOTE_ADDR'];
$sql=mysqli_query($con,"SELECT * FROM complaints where id='$id'");
while($r=mysqli_fetch_array($sql))
			{
				$id=$r['id'];
				$notice=$r['complaint'];
				$time=$r['time'];
			}
	echo "<div style='padding:10px;color:brown;background-color:white;' id='noticeview'>
    <center><i class='fa fa-angle-double-left' id='closek' style='color:red;font-size:1em;cursor:pointer;float:left;' title='Close'>Go Back</i></center>
    <div style='border:2px solid green;border-radius:10px;margin:10px;padding:10px;height:400px;overflow:auto;'><p style='text-align:left;text-indent:50px;color:black;'>".htmlspecialchars_decode($notice)."</p>
    </div>
    <h4 style='color:white;font-size:15px;float:right;margin:20px;text-shadow:1px 2px 3px black'><i class='fa fa-history my'></i>".$time."</b></h4>
    </div>";
?>
<script>
$(document).ready(function(){
    	$("#closek").click(function(){
    		$("nav,div").css({
    		opacity:"1"
    	});
            $("#loading").fadeOut("fast");
    		$("#loading").load('complaints_notifications.php');
            $("#loading").fadeIn("slow");
    	});
    });
</script>