
function load_page(pageloc,pageid){	
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    $("body").css({"background-color":"whitesmoke"});
       $('#loading').html("<br><br><br><br><br><br><br><br><br><center><img src='images/loader_new.gif'></center><br><b></b></center>").load(pageloc);    
}
//Script by Venkatesh Mogili,N130010