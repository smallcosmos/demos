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
    canvas13Init();
    canvas14Init();
    canvas15Init();
    canvas16Init();
    canvas17Init();
    canvas18Init();
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

    // text,x,y[,maxWidth]
    ctx.font = "36px serif";
    ctx.fillText("Hi~", 150, 30); 
    ctx.font = "36px serif";
    ctx.strokeText("good morning", 80, 60);
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
    var bgd = $("#canvas6")[0];

    var linearGradient = ctx.createLinearGradient(12.5,12.5,137.5,12.5);
    linearGradient.addColorStop(0,'rgb(0,255,255)');
    linearGradient.addColorStop(1,'rgb(0,255,42)');
    var linearGradient2 = ctx.createLinearGradient(137.5,12.5,12.5,137.5);
    linearGradient2.addColorStop(0,'rgb(0,255,42)');
    linearGradient2.addColorStop(1,'rgb(0,42,255)');
    var linearGradient3 = ctx.createLinearGradient(12.5,137.5,137.5,137.5);
    linearGradient3.addColorStop(0,'rgb(0,42,255)');
    linearGradient3.addColorStop(1,'rgb(0,42,42)');

    // image[,sx,sy,sWidth,sHeight],x,y[,width,height]
    ctx.drawImage(bgd,0,0);
    ctx.beginPath();
    ctx.moveTo(12.5,12.5);
    ctx.strokeStyle = linearGradient;
    ctx.lineTo(137.5,12.5);
    // ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(137.5,12.5);
    ctx.strokeStyle = linearGradient2;
    ctx.lineTo(12.5,137.5);
    // ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12.5,137.5);
    ctx.strokeStyle = linearGradient3;
    ctx.lineTo(137.5,137.5);
    ctx.stroke();
}

function canvas13Init(){
    var canvas = $("#canvas13")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function(){
        for(var i=0; i<4; ++i){
            for(var j=0; j<4; ++j){
                ctx.drawImage(img,526,67,340,260,j*40,i*33,40,33);
            }
        }
    }
    img.src = './image.jpg';
}

function canvas14Init(){
    var canvas = $("#canvas14")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#9cff00';
    ctx.scale(0.6,0.4);
    for(var i=0; i<3; ++i){
        for(var j=0; j<6; ++j){
            ctx.save();
            ctx.translate(60+j*100,60+i*100);
            drawSpirograph(ctx,20*(j+3)/(j+1),-4*(i+2)/(i+1),10);
            ctx.restore();
        }
    }
}

function canvas15Init(){
    var canvas = $("#canvas15")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.translate(75,75);
    for(var i=0; i<6; i++){
        ctx.save();
        ctx.fillStyle = 'rgb(' + (51*i) + ',' + (255-51*i) + ',255)';
        for(var j=0; j<i*6; ++j){
            ctx.rotate(Math.PI*2/(i*6));
            ctx.beginPath();
            ctx.arc(0,12.5*i,5,0,Math.PI*2);
            ctx.fill();
        }
        ctx.restore();
    }
}

function canvas16Init(){
    var canvas = $("#canvas16")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    var type = ['source-over', 'destination-over', 'source-in', 'destination-in',
                'source-out', 'destination-out', 'source-atop', 'destination-atop',
                'lighter', 'darken', 'xor', 'copy'];
    ctx.save();
    ctx.fillStyle = '#00f';
    ctx.fillRect(10,10,50,50);
    ctx.globalCompositeOperation = type[10];
    ctx.fillStyle = "#f00";
    ctx.moveTo(85,60);
    ctx.arc(60,60,25,0,Math.PI*2);
    ctx.fill();
    ctx.restore();

    /*星星*/
    ctx.translate(100,0);
    ctx.save();
    ctx.fillRect(0,0,150,150);
    ctx.translate(75,75);
    ctx.arc(0,0,60,60,0,Math.PI*2);
    ctx.clip();

    var linearGradient = ctx.createLinearGradient(-75,0,75,0);
    linearGradient.addColorStop(0,'#232256');
    linearGradient.addColorStop(1,'#143778');
    ctx.fillStyle = linearGradient;
    ctx.fillRect(-75,-75,150,150);
    for(var i=0; i<50; i++){
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.translate(75-Math.floor(Math.random()*150),75-Math.floor(Math.random()*150));
        drawStar(ctx,Math.floor(Math.random()*4)+2);
        ctx.restore();
    }
    ctx.restore();

    /*color pick*/
    ctx.translate(160,0);
    ctx.save();
    var colorPick = $('.color-pick');
    function pick(event){
        var layerX = event.layerX;
        var layerY = event.layerY;
        var pixel = ctx.getImageData(layerX,layerY,1,1);
        var data = pixel.data;
        var rgb = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3]/255) + ')';
        colorPick.css({
            background: rgb,
            left: layerX+35+'px',
            top: layerY-20+'px'
        });
        colorPick.show();
        colorPick.html(rgb);
    }
    function clear(event){
        colorPick.hide();
    }
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0,300,150);
        drawNext();
    }
    canvas.addEventListener('mousemove', pick);
    canvas.addEventListener('mouseout', clear);
    img.src = './image.jpg';
    ctx.restore();

    /* grayscale*/
    function drawNext(){
        ctx.translate(300,0);
        ctx.save();
        function invert(){
            var myImageData = ctx.getImageData(260,0,300,150);
            var data = myImageData.data;
            for(var i=0; i+2<data.length; i+=4){
                data[i] = 255 - data[i];
                data[i+1] = 255 - data[i+1];
                data[i+2] = 255 - data[i+2];
            }
            // putImageData(imgData,x,y[,dirtyX,dirtyY,dirtyWidth,dirtyHeight]);
            ctx.putImageData(myImageData,580,0);
        }
        function gray(){
            var myImageData = ctx.getImageData(260,0,300,150);
            var data = myImageData.data;
            var avg;
            for(var i=0; i+2<data.length; i+=4){
                avg = (data[i] + data[i+1] + data[i+2])/3;
                data[i] = data[i+1] = data[i+2] = avg;
            }
            ctx.putImageData(myImageData,900,0);
        }
        function retina(){
            var myImageData = ctx.getImageData(260,0,300,150);
            var data = myImageData.data;
            var retinaWeight = [0.299, 0.587, 0.114];
            var avg;
            for(var i=0; i+2<data.length; i+=4){
                avg = retinaWeight[0] * data[i] + retinaWeight[1] * data[i+1] + retinaWeight[2] * data[i+2];
                data[i] = data[i+1] = data[i+2] = avg;
            }
            ctx.putImageData(myImageData,1220,0);
        }
        invert();
        gray();
        retina();
        ctx.restore();
    }
}

function canvas17Init(){
    var canvas = $("#canvas17")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var dots = [];
    var defaultsOpts = {
        dotsCount: 30,
        defaultDotRadius: 2,
        allowExtDotRadius: 2,
        defaultSpeed: 1,
        allowExtSpeed: 1,
        connectRadius: 200
    };
    var opts = {};
    function Dot(){
        this.radius = opts.defaultDotRadius + Math.random() * opts.allowExtDotRadius;
        this.directionAngle = Math.floor(Math.random()*360);
        this.speed = Math.random() * opts.allowExtSpeed + opts.defaultSpeed;
        this.vendor = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed
        };
        this.x = Math.floor(Math.random() * w);
        this.y = Math.floor(Math.random() * h);
    }
    Dot.prototype = {
        constructor: Dot,
        border: function(){
            if(this.x <= 0 || this.x >= w){
                this.vendor.x *= -1;
            }
            if(this.y <= 0 || this.y >= h){
                this.vendor.y *= -1;
            }
            if(this.x < 0){
                this.x = 0;
            }
            if(this.x > w){
                this.x = w;
            }
            if(this.y < 0){
                this.y = 0;
            }
            if(this.y > h){
                this.y = h;
            }
        },
        update: function(){
            this.border();
            this.x += this.vendor.x;
            this.y += this.vendor.y;
        },
        draw: function(){
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
    }
    function setup(options){
        _extend(opts, defaultsOpts, options);
        for(var i=0; i<opts.dotsCount; ++i){
            dots.push(new Dot());
        }
        window.requestAnimationFrame(loop);
    }
    function loop(){
        window.requestAnimationFrame(loop);
        ctx.clearRect(0,0,w,h);
        for(var i=0; i<dots.length; ++i){
            dots[i].update();
            dots[i].draw();
            connectDots(i);
        }
    }
    function connectDots(index){
        ctx.save();
        ctx.lineWidth = 0.5;
        for(var i=0; i<dots.length; ++i){
            if(index == i) continue;
            var distance = getDistance(dots[index].x,dots[index].y,dots[i].x,dots[i].y);
            var opacity = 1 - distance/opts.connectRadius;
            ctx.strokeStyle = 'rgba(255,255,255,' + opacity + ')';
            ctx.beginPath();
            ctx.moveTo(dots[index].x, dots[index].y);
            ctx.lineTo(dots[i].x, dots[i].y);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
    }
    function getDistance(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    }
    setup({
        dotsCount: 30,
        defaultDotRadius: 2,
        allowExtDotRadius: 2,
        defaultSpeed: 1,
        allowExtSpeed: 1,
        connectRadius: 200
    });
}

function canvas18Init(){
    var canvas = $("#canvas18")[0];
    if(!canvas.getContext){
        return;
    }
    var ctx = canvas.getContext('2d');

    var cw = canvas.width;
    var ch = canvas.height;
    rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);},
    dToR = function(degrees){
        return degrees * (Math.PI / 180);
    },
    circle = {
      x: (cw / 2) + 5,
      y: (ch / 2) + 22,
      radius: 90,
      speed: 2,
      rotation: 0,
      angleStart: 0,
      angleEnd: 180,
      hue: 220,
      thickness: 18,
      blur: 25
    },
    particles = [],
    particleMax = 100,
    updateCircle = function(){
      if(circle.rotation < 360){
        circle.rotation += circle.speed;
      } else {
        circle.rotation = 0; 
      }
    },
    renderCircle = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = circle.thickness;    
      ctx.strokeStyle = gradient1;
      ctx.stroke();
      ctx.restore();
    },
    renderCircleBorder = function(){
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius + (circle.thickness/2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = 2;  
      ctx.strokeStyle = gradient2;
      ctx.stroke();
      ctx.restore();
    },
    renderCircleFlare = function(){
      var x = circle.radius * Math.cos(dToR(360-circle.angleStart));
      var y = circle.radius * Math.sin(dToR(180-circle.angleStart));
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.scale(1,1);
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI *2, false);
      ctx.closePath();
      var gradient3 = ctx.createRadialGradient(x, y, 0, x, y, 30);      
      gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
      gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
      ctx.fillStyle = gradient3;
      ctx.fill();     
      ctx.restore();
    },
    renderCircleFlare2 = function(){
      var x = circle.radius * Math.cos(dToR(360-circle.angleStart));
      var y = circle.radius * Math.sin(dToR(180-circle.angleStart));
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation-15));
      ctx.scale(1.5,1);
      ctx.beginPath();
      ctx.arc(x/1.5, y, 25, 0, Math.PI *2, false);
      ctx.closePath();
      var gradient4 = ctx.createRadialGradient(x/1.5, y, 0, x/1.5, y, 25);
      gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
      gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
      ctx.fillStyle = gradient4;
      ctx.fill();     
      ctx.restore();
    },
    createParticles = function(){
      if(particles.length < particleMax){
        var x = circle.radius * Math.cos(dToR(360-circle.angleStart-circle.rotation));
        var y = circle.radius * Math.sin(dToR(180-circle.angleStart-circle.rotation));
        particles.push({
          x: circle.x + x + rand(0, circle.thickness*2) - circle.thickness,
          y: circle.y + y + rand(0, circle.thickness*2) - circle.thickness,
          vx: (rand(0, 100)-50)/1000,
          vy: (rand(0, 100)-50)/1000,
          radius: rand(1, 6)/2,
          alpha: rand(10, 20)/100
        });
      }
    },
    updateParticles = function(){
      var i = particles.length;
      while(i--){
        var p = particles[i];
        p.vx += (rand(0, 100)-50)/750;
        p.vy += (rand(0, 100)-50)/750;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= .01;
        
        if(p.alpha < .02){
          particles.splice(i, 1)
        }
      }
    },
    renderParticles = function(){
      var i = particles.length;
      while(i--){
        var p = particles[i];
        ctx.beginPath();
        ctx.fillRect(p.x, p.y, p.radius, p.radius);
        ctx.closePath();
        ctx.fillStyle = 'hsla(0, 0%, 100%, '+p.alpha+')';
      }
    },
    clear = function(){
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';    
    }
    loop = function(){
      clear()
      updateCircle();
      renderCircle();
      renderCircleBorder();
      renderCircleFlare();
      renderCircleFlare2();
      createParticles();
      updateParticles();
      renderParticles();
    }

/* Append Canvas */
//document.body.appendChild(c);

/* Set Constant Properties */
ctx.shadowBlur = circle.blur;
ctx.shadowColor = 'hsla('+circle.hue+', 80%, 60%, 1)';
ctx.lineCap = 'round'
  
var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient1.addColorStop(0, 'hsla('+circle.hue+', 60%, 50%, .25)');
gradient1.addColorStop(1, 'hsla('+circle.hue+', 60%, 50%, 0)');
  
var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
gradient2.addColorStop(0, 'hsla('+circle.hue+', 100%, 50%, 0)');
gradient2.addColorStop(.1, 'hsla('+circle.hue+', 100%, 100%, .7)');
gradient2.addColorStop(1, 'hsla('+circle.hue+', 100%, 50%, 0)');

/* Loop It, Loop It Good */
setInterval(loop, 16);


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

/*假设有一个点
 *以 R + r 为半径，ω为角速度旋转
 *同时以 r + O 为半径，(1 + R / r) ω为角速度反向旋转
 */
function drawSpirograph(ctx,R,r,O){
    var x1 = R-O;
    var y1 = 0;
    var i  = 1;
    
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    
    do {
       if (i>20000) break;
       var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
       var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
       ctx.lineTo(x2,y2);
       
       x1 = x2;
       y1 = y2;
       i++;
    }
    while (x2 != R-O && y2 != 0 );
    ctx.stroke();
 }

function drawStar(ctx,r){
    ctx.save();
    ctx.beginPath()
    ctx.moveTo(r,0);
    for(var i=0; i<9; i++){
        ctx.rotate(Math.PI/5);
        if(i%2 == 0){
            ctx.lineTo((r/0.525731)*0.200811,0);
        }else{
            ctx.lineTo(r,0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}