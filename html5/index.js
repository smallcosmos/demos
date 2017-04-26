$(document).ready(function(){
    /* module video */
    videoInit();

    /* see https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API */
    /* module canvas */
    canvas1Init();
    canvas2Init();
    canvas3Init();
    canvas4Init();
    canvas5Init();
    canvas6Init();
    canvas7Init();
    canvas8Init();
    canvas9Init();
    canvas10Init();
    canvas11Init();
    canvas12Init();
});

/* module video*/
function videoInit(){
    var video = $("video")[0];
    $("#play-pause").on("click", function(){
        video.paused ? video.play() : video.pause();
    });
    $("#big-video").on("click", function(){
        if(video.width > 500) return;
        video.width += 120;
        video.height += 60;
    });
    $("#small-video").on("click", function(){
        if(video.width <= 120) return;
        video.width -= 120;
        video.height -= 60;
    });
}

function canvas1Init(){
    var canvas = $("#canvas1")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#f00";
    //x,y,width,height
    ctx.fillRect(10,10,50,50);
    ctx.fillStyle = "rgba(0,255,0,0.5)";
    ctx.fillRect(30,30,50,50);

    ctx.fillRect(110,10,80,80);
    ctx.clearRect(130,30,40,40);
    ctx.strokeRect(140,40,20,20);

    ctx.beginPath();
    ctx.moveTo(220,50);
    ctx.lineTo(250,100);
    ctx.lineTo(250,0);
    ctx.fill();
}

function canvas2Init(){
    var canvas = $("#canvas2")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    //x, y, radius, startAngle, endAngle, anticlockwise
    ctx.arc(50,50,45,0,Math.PI*2,true);
    ctx.moveTo(80,50);
    ctx.arc(50,50,30,0,Math.PI,false);
    ctx.moveTo(40,40);
    ctx.arc(35,40,5,0,Math.PI*2,true);
    ctx.moveTo(70,40)
    ctx.arc(65,40,5,0,Math.PI*2,true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(175,0);
    ctx.quadraticCurveTo(125,0,125,37.5);
    ctx.quadraticCurveTo(125,75,150,75);
    ctx.quadraticCurveTo(150,95,130,100);
    ctx.quadraticCurveTo(160,95,165,75);
    ctx.quadraticCurveTo(225,75,225,37.5);
    ctx.quadraticCurveTo(225,0,175,0);
    ctx.closePath();
    ctx.stroke();   
}

function canvas3Init(){
    var canvas = $("#canvas3")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,.5)";
    ctx.moveTo(75,15);
    ctx.bezierCurveTo(75,12,70,0,50,0);
    ctx.bezierCurveTo(20,0,20,37.5,20,37.5);
    ctx.bezierCurveTo(20,55,40,77,75,95);
    ctx.bezierCurveTo(110,77,130,55,130,37.5);
    ctx.bezierCurveTo(130,37.5,130,0,100,0);
    ctx.bezierCurveTo(85,0,75,12,75,15);
    ctx.fill();

    ctx.strokeStyle = "#fff";
    roundedRect(ctx, 90, 20, 20, 20, 5);
}

function canvas4Init(){
    //
}

function canvas5Init(){
    var canvas = $("#canvas5")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
            ctx.fillRect(j*25,i*25,25,25);
        }
    }
}

function canvas6Init(){
    var canvas = $("#canvas6")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ')';
            ctx.beginPath();
            ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
            ctx.stroke();
        }
    }
}

function canvas7Init(){
    var canvas = $("#canvas7")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    // 画背景
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0,0,75,75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75,0,75,75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0,75,75,75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75,75,75,75);
    ctx.fillStyle = '#FFF';
    // 设置透明度值
    ctx.globalAlpha = 0.2;
    // 画半透明圆
    for (var i = 0; i < 7; i++){
        ctx.beginPath();
        ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
        ctx.fill();
    }
}

function canvas8Init(){
    var canvas = $("#canvas8")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    // 画背景
    ctx.fillStyle = 'rgb(255,221,0)';
    ctx.fillRect(0,0,150,37.5);
    ctx.fillStyle = 'rgb(102,204,0)';
    ctx.fillRect(0,37.5,150,37.5);
    ctx.fillStyle = 'rgb(0,153,255)';
    ctx.fillRect(0,75,150,37.5);
    ctx.fillStyle = 'rgb(255,51,0)';
    ctx.fillRect(0,112.5,150,37.5);
    // 画半透明矩形
    for(var i = 0; i < 10; i++){
        ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
        for (var j = 0; j < 4; j++){
            ctx.fillRect(5+i*14,5+j*37.5,14,27.5);
        }
    }
}

function canvas9Init(){
    var canvas = $("#canvas9")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    for(var i = 0; i < 10; ++i){
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.lineCap = i%2 ? "round" : "square"; // butt|round|square
        ctx.moveTo(14 * i, 5);
        ctx.lineTo(14 * i, 145);
        ctx.stroke();
    }
}

function canvas10Init(){
    var canvas = $("#canvas10")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    var linearGradient = ctx.createLinearGradient(0,0,150,150);
    linearGradient.addColorStop(0, '#00ABEB');
    linearGradient.addColorStop(0.5, '#fff');
    linearGradient.addColorStop(1, '#26C000');

    var linearGradient2 = ctx.createLinearGradient(50,50,100,100);
    linearGradient2.addColorStop(0, '#000');
    linearGradient2.addColorStop(1, '#f00');
    ctx.lineWidth = 4;

    ctx.fillStyle = linearGradient;
    ctx.strokeStyle = linearGradient2;
    ctx.fillRect(0,0,150,150);
    ctx.strokeRect(50,50,50,50);
}

function canvas11Init(){
    var canvas = $("#canvas11")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    // 创建渐变
    var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1,159,98,0)');

    var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

    var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

    var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0.8, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

    // 画图形
    ctx.fillStyle = radgrad4;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad3;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad2;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad;
    ctx.fillRect(0,0,150,150);
}

function canvas12Init(){
    var canvas = $("#canvas12")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
}

/* canvas 圆角矩形函数 */
function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.stroke();
}

/* module draggable */
function drag(ev){
    var id = ev.target.id;
    ev.dataTransfer.setData("id", id);
}
function allowdrop(ev){
    ev.preventDefault();
}
function drop(ev){
    ev.preventDefault();
    var id = ev.dataTransfer.getData("id");
    $(ev.target).append($("#" + id));
}