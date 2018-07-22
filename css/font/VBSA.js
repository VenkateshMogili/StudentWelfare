//Script and Created by Venkatesh Mogili,N130010 @ SF-2 //

         window.navigator = window.navigator || {};
         navigator.battery = navigator.battery ||
                             null;
         if (navigator.battery === null) {
            document.getElementById('bs-unsupported').classList.remove('hidden');
         } else {
            var log = document.getElementById('log');
 
            document.getElementById('bt-results').classList.remove('hidden');
            function updateInfo(event) {
               if (event !== undefined) {
                  log.innerHTML = 'Event "' + event.type + '" fired<br />' + log.innerHTML;
               }
               document.getElementById('in-charge').innerHTML = (navigator.battery.charging ? "<div class='bbt'><div  id='ing'><center><i class='fa fa-flash my'></i></center></div>" : "<i class=' fa fa-battery-empty my'></i>No");
               document.getElementById('charging-time').innerHTML =navigator.battery.chargingTime;
               document.getElementById('discharging-time').innerHTML =  navigator.battery.dischargingTime;
               if(navigator.battery.level==0.01){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per1"><center>1%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.02){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per2"><center>2%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.03){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per3"><center>3%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.04){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per4"><center>4%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.05){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per5"><center>5%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.06){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per6"><center>6%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.07){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per7"><center>7%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.08){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per8"><center>8%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.09){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per9"><center>9%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.10){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per10"><center>10%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.11){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per11"><center>11%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.12){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per12"><center>12%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.13){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per13"><center>13%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.14){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per14"><center>14%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.15){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per15"><center>15%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.16){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per16"><center>16%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.17){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per17"><center>17%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.18){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per18"><center>18%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.19){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per19"><center>19%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.20){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per20"><center>20%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.21){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per21"><center>21%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.22){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per22"><center>22%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.23){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per23"><center>23%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.24){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per24"><center>24%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.25){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per25"><center>25%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.26){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per26"><center>26%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.27){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per27"><center>27%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.28){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per28"><center>28%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.29){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per29"><center>29%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.30){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per30"><center>30%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.31){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per31"><center>31%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.32){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per32"><center>32%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.33){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per33"><center>33%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.34){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per34"><center>34%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.35){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per35"><center>35%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.36){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per36"><center>36%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.37){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per37"><center>37%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.38){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per38"><center>38%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.39){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per39"><center>39%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.40){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per40"><center>40%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.41){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per41"><center>41%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.42){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per42"><center>42%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.43){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per43"><center>43%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.44){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per44"><center>44%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.45){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per45"><center>45%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.46){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per46"><center>46%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.47){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per47"><center>47%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.48){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per48"><center>48%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.49){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per49"><center>49%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.50){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per50"><center>50%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.51){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per51"><center>51%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.52){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per52"><center>52%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.53){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per53"><center>53%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.54){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per54"><center>54%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.55){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per55"><center>55%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.56){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per56"><center>56%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.57){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per57"><center>57%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.58){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per58"><center>58%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.59){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per59"><center>59%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.60){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per60"><center>60%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.61){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per61"><center>61%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.62){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per62"><center>62%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.63){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per63"><center>63%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.64){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per64"><center>64%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.65){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per65"><center>65%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.66){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per66"><center>66%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.67){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per67"><center>67%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.68){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per68"><center>68%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.69){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per69"><center>69%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.70){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per70"><center>70%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.71){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per71"><center>71%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.72){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per72"><center>72%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.73){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per73"><center>73%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.74){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per74"><center>74%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.75){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per75"><center>75%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.76){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per76"><center>76%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.77){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per77"><center>77%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.78){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per78"><center>78%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.79){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per79"><center>79%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.80){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per80"><center>80%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.81){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per81"><center>81%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.82){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per82"><center>82%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.83){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per83"><center>83%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.84){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per84"><center>84%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.85){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per85"><center>85%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.86){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per86"><center>86%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.87){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per87"><center>87%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.88){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per88"><center>88%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.89){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per89"><center>89%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.90){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per90"><center>90%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.91){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per91"><center>91%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.92){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per92"><center>92%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.93){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per93"><center>93%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.94){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per94"><center>94%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.95){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per95"><center>95%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.96){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per96"><center>96%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.97){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per97"><center>97%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.98){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per98"><center>98%</center></div></div>'+navigator.battery.level;
}
			   else if(navigator.battery.level==0.99){
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per99"><center>99%</center></div></div>'+navigator.battery.level;
}
			   else{
               document.getElementById('battery-level').innerHTML = '<div class="bbt"><div  id="per100"><center>100% battery full</center></div></div>'+navigator.battery.level;
}
            }
 
            var events = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
            for (var i = 0; i < events.length; i++) {
               navigator.battery.addEventListener(events[i], updateInfo);
            }
            updateInfo();
 
            document.getElementById('clear-log').addEventListener('click', function() {
               log.innerHTML = '';
            });
         }
