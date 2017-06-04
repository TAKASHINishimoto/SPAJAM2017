// This is a JavaScript file
var accelerationWatch = null;
var y;
var score = 100;
var count = 0;
// genRan
function roundNumber(num) {
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return Math.floor(result * 10);
}
function creatHTML(comment, onsei) {
    $('#tutorial').append('<p class="fbox">' + comment + '</p><br>');
    $("#tutorial").scrollTop($("#tutorial")[0].scrollHeight);
  onsei.play();
  };
  
// update
function updateAcceleration(a) {
    //document.getElementById('x').innerHTML = roundNumber(a.x);
    document.getElementById('y').innerHTML = Math.abs(roundNumber(a.y)-90) + "度";
    y = roundNumber(a.y);
    
    $('#img-osake').rotate({angle:y-90});
    console.log(count)
     if (y < -10) {
         count++;
         console.log(y);
        // 減点
        score -= 5;
        console.log(score)
        // お叱り
        setTimeout(function(){
            $('#tutorial').append('<p class="fbox bg-red">傾けすぎです</p><br>');
            $("#tutorial").scrollTop($("#tutorial")[0].scrollHeight);
            onsei4.play();
            },10);
   
      $('#commentJudge').html('<span class="red">傾きすぎ</span>');
      navigator.vibrate(500);
      
      
   } else {
   $('#commentJudge').html('<span class="green">良いですよ</span>');
   }
   sessionStorage.setItem('score1', score);

    //document.getElementById('z').innerHTML = roundNumber(a.z);
}

var toggleAccel = function() {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : ""
        });
        accelerationWatch = null;
    } else {
        var options = {};
        options.frequency = 500;
        accelerationWatch = navigator.accelerometer.watchAcceleration(
                updateAcceleration, function(ex) {
                    alert("accel fail (" + ex.name + ": " + ex.message + ")");
                }, options);
    }
};

toggleAccel();
   //setTimeout(function(){creatHTML(data[0]['comment'], onsei1)},data[0]['time']);
