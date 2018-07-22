<?php
session_start();
error_reporting(0);
?>
<head>
	<title>Notifications</title>
	<style>
table{width:100%;border-collapse:collapse;}
th{background-color:navy;color:white;padding:10px;text-align:center;}
td{padding:5px;text-align:center;color:black;}
.loadbutton{text-align:center;list-style: none;}
.notices_list{list-style:none;background-color:teal;}
.loadmorenotices{color:#FFF;border-radius:100px;transition:0.8s;width:20%;border:0px;height:40px;font-size:18px;background:#171790;border:2px solid white;outline:0;}
.loadmorenotices:hover{background-color:white;border:2px solid green;transition:1s;color:#3399cc;}
</style>
	</head>
<center><h1 style="font-family:lucida sans;color:white;text-shadow:1px 2px 3px black">Complaints</h1></center>
<table class="notices_list" style="background-color:white;box-shadow:1px 2px 3px black">
	<tr>
		<th width="80%">Complaint</th>
		<th width="10%">Date & Time</th>
	</tr>
	<?php
	require_once 'connect.php';
	$resultsPerPage=100;
	$sql=mysqli_query($con,"SELECT * FROM complaints ORDER BY id ASC LIMIT 0, $resultsPerPage");
	while($r=mysqli_fetch_array($sql))
	{
		$notice=$r['complaint'];
		$sd=$r['sd'];
		$time=$r['time'];
		$id=$r['id'];
		$today=date('Y-m-d');
		echo '<tr style="color:white">
		<td style="text-align:left;cursor:pointer" onclick="load_page(\'notices.php?id='.$id.'\')">>>'.substr($notice, 0,100).'....';
		if($dates==$today)
			{
				echo '<img src="images/new.gif">';
			}
			echo '</td>
		<td>'.$time.'</td>
	</tr>';
}
	?>
</table><br>
<li class="loadbutton"><center><button class="loadmorenotices" data-pages="2">Load More</button></center></li>
<br><br><br><br><br>
<script>
$(document).on('click','.loadmorenotices',function(){
    $(this).fadeOut("slow");
    $(this).text("Loading....");
    var ele=$(this).parent('tr');
    $.ajax({
      url:'loadmorenotices.php',
      type:'POST',
      data: {
        pages:$(this).data('pages'),
      },
      success: function(response){
        if(response){
          ele.hide();
          $(".notices_list").append(response);
        }
      }
    });
  });
</script>