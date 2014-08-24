$(document).ready(function() {
    var isPc = /(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent);
    var win = $(window);
        h = !isPc?win.height():480,
        w = win.width(),
        p = $(".page"),
        pos = {},
        d = 75,
        mousedown = null,
        direct = null,
        current = 0,
        items = $(".item"),
        total = items.size(),
		map = null,
		tip = $('#tip'),
		tipStopped = false;

    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1-x2) >=Math.abs(y1-y2) ? (x1-x2>d ? "left" : (x1-x2<-d ? "right" : "middle")) : (y1-y2 > d ? "up" : (y1-y2<-d ? "down" : "middle"));
    }

    function touchstart(e) {
        if (e.target.tagName == 'IMG') {
			if (e.type == "touchstart") {
				pos.x1 = window.event.touches[0].pageX;
				pos.y1 = window.event.touches[0].pageY;
			} else {
				pos.x1 = e.pageX;
				pos.y1 = e.pageY;
			}
			mousedown = true;
		}
    }

    function touchmove(e) {
        if (!mousedown) {
            return false;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.type == "touchmove") {
            pos.x2 = window.event.touches[0].pageX;
            pos.y2 = window.event.touches[0].pageY;
        } else {
            pos.x2 = e.pageX;
            pos.y2 = e.pageY;
        }
        direct = swipeDirection(pos.x1, pos.x2, pos.y1, pos.y2);
        var step = 0;
        switch (direct) {
        case "left":
            if (current == total - 1)
                current = -1;
            step = 1;
            
            break;
        case "right":
            if (current == 0)
                current=total;
            step = -1;
            break;
        }
        if (step != 0 && $(".page.show").find(".first").length) {            
            items.eq(current + step).addClass("active").css("left", w * step).css("left", w * step + (pos.x2 - pos.x1));
        }
    }

    function touchend(e) {
        if (!mousedown) {
            return false;
        }
        if (e.type == "touchend") {
            pos.x2 = window.event.changedTouches[0].pageX;
            pos.y2 = window.event.changedTouches[0].pageY;
        } else {
            pos.x2 = e.pageX;
            pos.y2 = e.pageY;
        }
        direct = swipeDirection(pos.x1, pos.x2, pos.y1, pos.y2);
        mousedown = null;
        var step = 0;
        switch (direct) {
        case "left":
            step = 1;
            break;
        case "right":
            if (current == 0)
                break;
            step = -1;
            break; 
        }
        if (step != 0 && $(".page.show").find(".first").length) {
            items.eq(current + step).animate({
                left: 0
            }, 150, function () {
                items.eq(current).removeClass("show active").addClass("hide");
                items.eq(current + step).removeClass("active hide").addClass("show");
                current = current + step;
				if (current == total - 1 && !map) {
					map = new BMap.Map("map");
					map.centerAndZoom(new BMap.Point(112.370064,28.570986), 17);
					var marker1 = new BMap.Marker(new BMap.Point(112.370064,28.570186));
					map.addOverlay(marker1);
					var infoWindow1 = new BMap.InfoWindow("世纪豪廷大酒店五楼紫光阁<br/>电话:17096701027 15616168974");
					marker1.openInfoWindow(infoWindow1);
					marker1.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});
					// map.addEventListener("tilesloaded",function(){$('.BMap_cpyCtrl').hide();});
				}
				if (!tipStopped) {
					tipStopped = true;
					tip.hide();
				}
            });
        }
    }

    $('.invitation').height(h);
    p.bind("mousedown touchstart", touchstart);
    p.bind("mousemove touchmove", touchmove);
    p.bind("mouseup touchend mouseout", touchend);
	
	function loopTip() {
		if (tipStopped) return;
		tip.css({
			'margin-left': '-32px',
			'opacity': 1
		});
		tip.animate({
			'margin-left': '-=100px',
			'opacity': 0
		}, 1000, 'swing', function() {
			setTimeout(loopTip, 800);
		});
	}

    // if(/i(Phone|P(o|a)d)/.test(navigator.userAgent)) {
    //     $(document).one('touchstart', function (e) { 
    //        document.getElementById("audio_play").play(); 
    //     });
    // }
    var _img = new Image();
    _img.src = ctx + "1.jpg";
    _img.onload = function () {
		$(".loading").hide();
		setTimeout(loopTip, 800);
	}
});