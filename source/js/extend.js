function Extend(){}

Extend.prototype = {
    "init": function(){
        this.showBar();
        this.fall();
        this.mediaMenu();
        this.searchToggle();
    },
    "showBar": function(){
        var oEle = $("#extend-tools");
        $(document).scroll(function(){
            if($(this).scrollTop() > 100)
                oEle.fadeIn();
            else
                oEle.fadeOut();
        });
        this.returnTop(oEle);
    },
    "returnTop": function(oEle){
        var button = oEle.find(".tools-returnTop");
        button.on("click",function(){
            $("html, body").animate({scrollTop: 0}, 200);
        })
    },
    "fall": function() {
        var fallEle = document.getElementById("fallEle");
        if(!fallEle) return;
        var canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = 1;
        canvas.width = fallEle.clientWidth;
        canvas.height = fallEle.clientHeight;
        fallEle.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var points = [];
        function getPoint(radius){
            var x = Math.ceil(Math.random() * canvas.width),y = Math.ceil(Math.random() * canvas.height),
            r = +(Math.random() * radius).toFixed(4),
            rateX = +(Math.random() * 2 - 1).toFixed(4),
            rateY = +(Math.random() * 2 - 1).toFixed(4);
            return {x, y, r, rateX, rateY};
        }
        function genPoint(){
            for(let i =0; i < 50; i++){
                points.push(getPoint(2));
            }
        }
        function drawPoints(){
            points.forEach(function(item,index){
                ctx.beginPath();
                ctx.arc(item.x, item.y, item.r, Math.PI*2, false);
                ctx.fillStyle = "#fff";
                ctx.fill();
                if(item.x > 0 && item.x < canvas.width && item.y > 0 && item.y < canvas.height){
                    item.x += item.rateX;
                    item.y += item.rateY;
                } else{
                    points.splice(index, 1);
                    points.push(getPoint(2));
                }
            });
        }
        genPoint();
        function draw(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPoints();
            window.requestAnimationFrame(draw);
        }
        draw();
    },
    "mediaMenu": function () {
        var eleButton = $("#media-toggle");
        var eleMain = $(".main-con");
        var ifs;
        eleButton.on("click", function(){
            if(!ifs){
                eleMain.animate({
                    'left': '200px'
                });
                eleButton.css("transform","rotate(90deg)");
                ifs = true;
            }else{
                eleMain.animate({
                    'left': '0px'
                });
                eleButton.css("transform","rotate(0deg)");
                ifs = false;
            }

        })
    },
    "searchToggle": function () {
        var searchBtn = $(".nav-search-btn");
        var navSearchInput = $(".nav-search-input");
        var barSearchInput = $(".bar-search-input");
        navSearchInput.attr("autocomplete", "off");
        barSearchInput.attr("autocomplete", "off");
        var searchBar = $(".nav-search");
        searchBtn.on("click", function(){
            searchBar.slideToggle(400);  
        });
    }
}

var oExtend = new Extend();
oExtend.init();


