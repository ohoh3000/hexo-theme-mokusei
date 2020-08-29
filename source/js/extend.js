function Extend(){}

Extend.prototype = {
    "init": function(){
        // this.showBar();
        this.menuDown();
        this.light();
        this.fall();
        this.scrollAddEvent();
        this.mediaMenu();
        this.searchToggle();
    },
    "showBar": function(){
        var oEle = $("#extend-tools");
        var oFrame = $(".main-con");
        oFrame.scroll(function(){
            if($(this).scrollTop() > 100)
                oEle.fadeIn();
            else
                oEle.fadeOut();
        });
        this.returnTop(oEle, oFrame);
    },
    "returnTop": function(oEle, oFrame){
        var button = oEle.find(".tools-returnTop");
        button.on("click",function(){
            oFrame.animate({scrollTop: 0}, 200);
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
    "menuDown": function() {
        var oEle = $(".sidebar > ul > li");
        oEle.on("click", function () {
            $(this).find("> a").addClass("active");
            $(this).siblings("li").find(">a").removeClass("active");
            if($(this).find(".drop-flag").hasClass("fa-angle-up")){
                $(this).find(".drop-flag").addClass("fa-angle-down").removeClass("fa-angle-up");
            }else{
                $(this).find(".drop-flag").addClass("fa-angle-up").removeClass("fa-angle-down");
            }
            $(this).find("ul").slideToggle();
        });
    },
    "light": function() {
        var eleButton = $("#light-button");
        var eleArea = $(".light-area");
        var ifs = 0;
        if(!sessionStorage.getItem('lightFlag')){
            ifs = 1;
        }else{
            ifs = 0;
            eleArea.show();
            $(".toorbar").css("overflow","hidden");
            $(".article-dirname").css("overflow","hidden");
            $(".sidebar").css("overflow","hidden");
        }
        eleButton.on("click", function () {
            if(ifs){
                eleArea.fadeIn();
                sessionStorage.setItem("lightFlag",1);
                $(".toorbar").css("overflow","hidden");
                $(".article-dirname").css("overflow","hidden");
                $(".sidebar").css("overflow","hidden");
                ifs = 0;
            }else{
                eleArea.fadeOut();
                sessionStorage.removeItem('lightFlag');
                $(".toorbar").css("overflow","auto");
                $(".article-dirname").css("overflow","auto");
                $(".sidebar").css("overflow","auto");
                ifs = 1;
            }
        })
    },
    "scrollAddEvent": function () {
        var box = $(".main-con");
        var items = $(".headerlink");
        var buttons = $(".dirname-list a");
        var topData = [];
        var scrTop;
        items.each(function(index,item){
            topData.push($(this).offset().top);
        });
        box.on("scroll",function () {
            scrTop = box.scrollTop();
            if(box.is(":animated"))
                return;
            for(var i =0; i<topData.length; i++){
                if(scrTop > topData[topData.length-1]) {
                    buttons.removeClass("active");
                    buttons.eq(topData.length-1).addClass("active");
                }else{
                    if (scrTop >= topData[i] && scrTop < topData[i + 1]) {
                        buttons.removeClass("active");
                        buttons.eq(i).addClass("active");
                    }
                }
            }
        });
        buttons.on("click",function () {
            buttons.removeClass("active");
            $(this).addClass("active");
            box.animate({
                "scrollTop": topData[buttons.index($(this))] +50
            })
        });
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
                $("html,body").css({
                    "height": "100%",
                    "overflow": "hidden"
                });
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


