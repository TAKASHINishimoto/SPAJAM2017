function show_pic() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 90, destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess (imageURI) {
    var canvas = document.createElement('canvas');

    //var  canvas = document.getElementById("can1");
    var ctx = canvas.getContext("2d");
    
    var image = new Image();
    image.src = imageURI;
    const THRESHOLD = 130;
    
    //canvas.width = image.width;
    //canvas.height = image.height;
    

    image.onload = function() {
        var width = 0;
        var height = 0;
        width = this.width;
        height = this.height;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, this.width, this.height, 0, 0, canvas.width, canvas.height);
        var src = ctx.getImageData(0, 0, canvas.width, canvas.height); 
        var dst = ctx.createImageData(canvas.width, canvas.height);
        
        //for (var i = 0; i < src.data.length; i=i+4) {
        //var sum = 0;
        //var cnt = 0;
        //for (var i = 0; i < src.data.length; i=i+4) {
            //var y = ~~(0.299 * src.data[i] + 0.587 * src.data[i + 1] + 0.114 * src.data[i + 2]);
            //sum += y;
            //cnt++;
        //}
        //var ave = sum / cnt;
        //console.log(ave);
        var a = 0;
        var b = 0;
        for (var i = 0; i < src.data.length; i=i+8) {
            //var y = ~~(0.299 * src.data[i] + 0.587 * src.data[i + 1] + 0.114 * src.data[i + 2]);
            //var ret = (y > 220) ? 255 : 0;
            
            if (src.data[i]>200 && src.data[i+1]>200 && src.data[i+2]>200) {
                dst.data[i] = dst.data[i+1] = dst.data[i+2] = dst.data[i+3] = 255;
                a++;
            } else {
                dst.data[i] = dst.data[i+1] = dst.data[i+2] = 0;
                dst.data[i+3] = 255;
                b++;
            }
            
            //dst.data[i] = dst.data[i+1] = dst.data[i+2] = ret;
            //dst.data[i+3] = 255; 
        }
        
        var per = b / (a+b) * 100;
        
        var score=0;
        // 社長
        if (per >= 65 && per <= 73) {score = 100;}
        else if (per >= 60 && per <= 76) {score = 90;}
        else if (per >= 65 && per <= 82) {score = 75;}
        else if (per >= 60 && per <= 88) {score = 60;}
        else if (per >= 55 && per <= 93) {score = 45;}
        else if (per >= 50 && per <= 95) {score = 30;}
        else if (per >= 45 && per <= 97) {score = 15;} 
        else {score = 5;}
        
        
        
        sessionStorage.setItem('score2', score);
        //ctx.putImageData(dst, 0, 0);
        window.location.href = "score.html";
    };
}



function onFail (message) {}