$(document).ready(function(){
    $("#robotics").click(function(){
        $("#display").html( "<img src='robotics.gif' class='img-fluid' style='height:630px;width:100%;'> " );

    });
    $("#junkyard").click(function(){
        $("#display").html( "<img src='junkyard.gif' class='img-fluid' style='height:630px;width:100%;'>" );

    });
    $("#hackathon").click(function(){
        $("#display").html( "<img src='code.gif'>" );

    });
    $("#workshop2").click(function(){
        $("#display").html( "<img src='workshop.png' class='img-fluid' style='height:630px;width:100%;'>" );

    });
    $("#tech").mouseover(function(){
        $("#tech1").css("display","inline");
    });
    $("#tech").mouseout(function(){
        $("#tech1").css("display","none");
    });
    $("#cult").mouseover(function(){
        $("#cultural1").css("display","inline");
    });
    $("#cult").mouseout(function(){
        $("#cultural1").css("display","none");
    });
    $("#workshop").mouseover(function(){
        $("#workshop1").css("display","inline");
    });
    $("#workshop").mouseout(function(){
        $("#workshop1").css("display","none");
    });
   /* $('#start').mousemove(function(e){
       var moveX=(e.pageX * -1/15);
       var moveY=(e.pageY * -1/15);
       $(this).css('background-position', moveX +'px ' + moveY +'px');
       
    });*/
    $(".abt").mouseover(function(){
        $(".abt").html("Register");
    });
    $(".abt").mouseout(function(){
        $(".abt").html("Join Us");
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $('#start').css({width:(100 + scroll/5)+ '%'});

    });    
        /*$(".preload").animate({
            left: '250px',
            
            height: '600px',
            width: '200px'
        });
        $(".preload").animate({
            left: '250px',
            
            height: '700px',
            width: '100%'
        });*/

});


var festDate = new Date("Apr 28, 2018 00:00:00").getTime();
var x = setInterval(function() {

  var present = new Date().getTime();
  var distance = festDate - present;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("minutes").innerHTML = minutes ;
  document.getElementById("seconds").innerHTML =  seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We are In!!!";
  }
}, 1000);


