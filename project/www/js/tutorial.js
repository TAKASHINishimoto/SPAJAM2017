// This is a JavaScript file

// This is a JavaScript file
$(function(){
  function first() {
      $('#tutorial').append('<div class="space"></div>');  
  };
  
  function creatHTML(comment, onsei) {
    $('#tutorial').append('<p class="fbox">' + comment + '</p><br>');
    $("#tutorial").scrollTop($("#tutorial")[0].scrollHeight);
  onsei.play();
  };
  
  
  // function degree(kakudo) {
  //     console.log(kakudo + "度");
  //     $('#degreeNum').html('<span>' + kakudo +'度</span>');
  //   if(kakudo > -20){
  //     $('#commentJudge').html('<span>傾きすぎ</span>');
  //   } 
  // }
  
var data = [
  { comment : "瓶ビールを手に持ってください", time: 3000},
  { comment : "ラベルを上に向け、グラスに注ぎ始めてください。", time: 9000},
  { comment : "始めは勢いよく、少し泡ができたら角度を緩めてゆっくり注ぐのがポイントです。", time: 13000},
  { comment : "グラスが傾きすぎです！！", time: 30000},
 
  ];
  //setInterval(function(){degree(Math.floor(Math.random()*(130-70)+70))}, 1000)
  first(); 
   setTimeout(function(){creatHTML(data[0]['comment'], onsei1)},data[0]['time']);
   //toggleAccel();
   setTimeout(function(){creatHTML(data[1]['comment'], onsei2)},data[1]['time']);
   setTimeout(function(){creatHTML(data[2]['comment'], onsei3)},data[2]['time']);
   //setTimeout(function(){creatHTML(data[3]['comment'], onsei4)},data[3]['time']);
});
