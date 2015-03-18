/* 
* @Author: Draco
* @Date:   2015-03-03 14:45:05
* @Last Modified by:   Administrator
* @Last Modified time: 2015-03-18 08:21:03
*/

function easeRepeat(easing, times) {
    var p = 1 / times;
    return function (n) {
        if (n == 1)
            return 1;
        while (n - p > 0)
            n -= p;
        return easing(n * times);
    };
};

var ua = navigator.userAgent,
flag = 0,
defDuration = 1200,
defEase = mina.easeinout,
jqCache = {},
svgCache = {},
timeouts = [],
minas = [],
states = {
    '#img1-1': {
        o: {
            transform: 'translate(-320,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        }
    },
    '#g1-1': {
        o: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        n: {
            transform: 'translate(-320,0)',
            opacity: 0
        },
        t: defDuration * 2
    },
    '#img1-2': {
        o: {
            transform: 'translate(320,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        }
    },
    '#g1-2': {
        o: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        n: {
            transform: 'translate(320,0)',
            opacity: 0
        },
        t: defDuration * 2
    },
    '#img1-3': {
        o: {
            transform: 'translate(0,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,75)',
            opacity: 1
        },
        d: 300,
        t: defDuration,
        e: mina.linear
    },
    '#g1-3': {
        o: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        n: {
            transform: 'translate(0,225)',
            opacity: 0
        },
        d: 900,
        t: defDuration + 300,
        e: mina.linear
    },
    '#img1-4': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration * 2,
        d: defDuration * 2
    },
    '#img1-5': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration * 2,
        d: defDuration * 4,
        e: easeRepeat(defEase, 6)
    },
    '#g1-4': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        t: defDuration * 3,
        d: defDuration * 2
    },
    '#img2-1': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        }
    },
    '#img2-2': {
        o: {
            transform: 'translate(0,-300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration
    },
    '#img2-3': {
        o: {
            transform: 'translate(-300,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.3
    },
    '#img2-4': {
        o: {
            transform: 'translate(0,300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.6
    },
    '#img2-5': {
        o: {
            transform: 'translate(300,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.9
    },
    '#g2-1': {
        o: {
            transform: 'translate(0,-300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 3
    },
    '#text2-1': {
        o: {
            transform: 'translate(0,-300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 3.5
    },
    '#g3-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#img3-1': {
        o: {
            transform: 'translate(0,600)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.3
    },
    '#g4-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#img4-1': {
        o: {
            transform: 'translate(0,600)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.3
    },
    '#img4-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration * 2.3
    },
    '#g5-1': {
        o: {
            transform: 'translate(0,-360)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,-60)',
            'fill-opacity': 1
        }
    },
    '#img5-1': {
        o: {
            transform: 'translate(0,600)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 1.3
    },
    '#g5-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration * 1.5,
        d: defDuration * .5
    },
    '#img5-2': {
        rotate: {
            o: 0,
            n: 720
        },
        e: mina.easein,
        t: defDuration * 2,
        d: defDuration * 3
    },
    '.g6-1': {
        o: {
            transform: 'translate(-400,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(20,0)',
            opacity: 1
        },
        t: 100,
        d: defDuration * .6,
        q: 1,
        qd: defDuration * .3,
        e: mina.backout
    },
    '#g6-2': {
        scale: {
            o: 1,
            n: .7
        },
        t: defDuration * 2.1
    },
    '#g6-3': {
        o: {
            transform: 'translate(0,-150)'
        },
        n: {
            transform: 'translate(0,200)'
        },
        t: defDuration * 2.1
    },
    '#text6-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        t: defDuration * 2.5
    },
    '#img7-1': {
        o: {
            transform: 'translate(0,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(-200,0)',
            opacity: 1
        }
    },
    '.img7-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        scale: {
            o: .7,
            n: 1
        },
        t: defDuration,
        qd: defDuration * .2,
        q: 1,
        d: defDuration * 2.5,
        e: mina.elastic
    },
    '#g7-2': {
        o: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        n: {
            transform: 'translate(-200,0)',
            opacity: 0
        },
        t: defDuration * 3
    },
    '#g8-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#img8-1': {
        o: {
            transform: 'translate(0,300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: 700,
        e: mina.backout
    },
    '#rect8-1': {
        o: {
            height: 580
        },
        n: {
            height: 0
        },
        t: defDuration * 2,
        d: defDuration * 2,
        e: mina.linear
    },
    '#img8-2': {
        o: {
            transform: 'translate(0,-200)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: 4 * defDuration,
        e: mina.backout
    },
    '#g9-1': {
        o: {
            transform: 'translate(80,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(80,-80)',
            'fill-opacity': 1
        }
    },
    '.img9-1': {
        o: {
            transform: 'translate(-300,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration,
        q: 1,
        e: mina.backout
    },
    '.g9-2': {
        scale: {
            o: 0,
            n: 1
        },
        t: defDuration * 3,
        q: 1,
        e: mina.elastic
    },
    '.text10-1': {
        o: {
            transform: 'translate(0,-200)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        q: 1,
        qd: 500,
        t: 25
    },
    '#img10-1': {
        scale: {
            o: 0,
            n: 1
        },
        t: defDuration * 1.8,
        e: mina.backout
    },
    '#img10-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration * 2.7
    },
    '#g11-1': {
        o: {
            transform: 'translate(0,-200)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#img11-1': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration
    },
    '.text11-1': {
        o: {
            transform: 'translate(-500,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 2,
        q: 1,
        d: 700,
        qd: 500
    },
    '#g12-1': {
        o: {
            transform: 'translate(0,-200)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#g12-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration
    },
    '.text12-1': {
        o: {
            transform: 'translate(-500,0)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 2,
        q: 1,
        d: 700,
        qd: 500
    },
    '#g13-1': {
        o: {
            transform: 'translate(0,-200)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '.img13-2': {
        scale: {
            o: 0,
            n: 1
        },
        t: defDuration * 1.25,
        q: 1,
        d: 650,
        e: mina.elastic
    },
    '#img13-2': {
        o: {
            transform: 'translate(0,-300)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration * 5,
        e: mina.backout
    },
    '#g14-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        e: mina.backout
    },
    '#img14-1': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration
    },
    '#img14-2': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration + 700
    },
    '.text15-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        e: mina.bounce
    },
    '#img15-1': {
        o: {
            opacity: 0
        },
        n: {
            opacity: 1
        },
        t: defDuration
    },
    '#g16-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#rect16-1': {
        o: {
            height: 872
        },
        n: {
            height: 0
        },
        d: defDuration * 4,
        t: defDuration / 2,
        e: mina.linear
    },
    '.g16-2': {
        scale: {
            o: 0,
            n: 1
        },
        t: defDuration,
        q: 1,
        qd: defDuration * 2 / 3,
        e: mina.elastic
    },
    '#g17-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#rect17-1': {
        o: {
            x: 0
        },
        n: {
            x: 800
        },
        t: defDuration,
        d: defDuration * 2
    },
    '#g18-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        }
    },
    '#rect18-1': {
        o: {
            height: 768
        },
        n: {
            height: 0
        },
        t: defDuration,
        d: defDuration * 2
    },
    '.img19-1': {
        scale: {
            o: 0,
            n: 1
        },
        t: 100,
        q: 1,
        qd: 500,
        e: mina.elastic
    },
    '.text19-1': {
        o: {
            transform: 'translate(0,300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        t: 2500,
        q: 1,
        qd: 700,
        e: mina.backout
    },
    '.img20-1': {
        scale: {
            o: 0,
            n: 1
        },
        t: 100,
        q: 1,
        qd: 500,
        e: mina.elastic
    },
    '.text20-1': {
        o: {
            transform: 'translate(0,300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        t: 2500,
        q: 1,
        qd: 700,
        e: mina.backout
    },
    '#g21-1': {
        o: {
            transform: 'translate(0,-300)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        e: mina.bounce
    },
    '#rect21-1': {
        o: {
            transform: 'translate(0,900)',
            opacity: 0
        },
        n: {
            transform: 'translate(0,0)',
            opacity: 1
        },
        t: defDuration,
        d: defDuration * 2
    }
},
components = [
	['#img1-1', '#img1-2', '#img1-3', '#g1-3', '#img1-4', '#img1-5', '#g1-1', '#g1-2', '#g1-4'],
	['#img2-1', '#img2-2', '#img2-3', '#img2-4', '#img2-5', '#g2-1', '#text2-1'],
	['#g3-1', '#img3-1'],
	['#g4-1', '#img4-1', '#img4-2'],
    ['#g5-1', '#img5-1', '#g5-2', '#img5-2'],
    ['.g6-1', '#g6-2', '#g6-3', '#text6-1'],
    ['#img7-1', '.img7-2', '#g7-2'],
    ['#g8-1', '#img8-1', '#rect8-1', '#img8-2'],
    ['#g9-1', '.img9-1', '.g9-2'],
    ['.text10-1', '#img10-1', '#img10-2'],
    ['#g11-1', '#img11-1', '.text11-1'],
    ['#g12-1', '#g12-2', '.text12-1'],
    ['#g13-1', '.img13-2', '#img13-2'],
    ['#g14-1', '#img14-1', '#img14-2'],
    ['.text15-1', '#img15-1'],
    ['#g16-1', '#rect16-1', '.g16-2'],
    ['#g17-1', '#rect17-1'],
    ['#g18-1', '#rect18-1'],
    ['.img19-1', '.text19-1'],
    ['.img20-1', '.text20-1'],
    ['#g21-1', '#rect21-1']
];

function _(selector, isJquery) {
	var obj;
	if (isJquery) {
		obj = jqCache[selector];
		if (!obj) {
			obj = $(selector);
			jqCache[selector] = obj;
		}
	} else {
		obj = svgCache[selector];
		if (!obj) {
			obj = selector.indexOf(',') > -1 || selector.indexOf('.') === 0 ? Snap.selectAll(selector) : Snap.select(selector);
			svgCache[selector] = obj;
		}
	}
	return obj;
}

function loadSvg(index, loaded) {
	var i = index - 1,
	di = dataIndex(index),
	compIndex = di - 1,
	cur = flag;
	if (!(cur >> i & 1)) {
		var path = 'svg/' + di + '.svg';
		path += '?d=' + (+new Date);
		Snap.load(path, function(d) {
			var fc = this.firstChild,
			n = d.node;
			if (fc)
				this.insertBefore(n, fc);
			else
				this.appendChild(n);
			flag |= 1 << i;
			var comp = components[compIndex];
			for (var j = comp.length - 1; j >= 0; j--)
				attr(comp[j]);
			loaded && loaded(d);
		}, _('.section', 1)[i]);
    }
}

function trans(el, state, duration, ease, callback) {
    var r = state.rotate,
    s = state.scale,
    xy = state.translate,
    bbox = r || s || xy ? el.getBBox() : null;
    if (bbox) {
        var a = Snap.animate(0, 1, function(v) {
            var matrix = new Snap.Matrix();
            if (r) {
                var angle = r.o + (r.n - r.o) * v;
                matrix.rotate(angle, bbox.cx, bbox.cy);
            }
            if (s) {
                var rate = s.o + (s.n - s.o) * v;
                matrix.scale(rate, rate, bbox.cx, bbox.cy);
            }
            if (xy) {
            	var x = (xy.xn - xy.xo) * v,
            	y = (xy.yn - xy.yo) * v;
            	matrix.translate(x, y);
            }
            el.transform(matrix);
        }, duration || 0, ease, callback);
        minas.push(a);
    }
}

function reverse(el, state) {
	var r = state.rotate,
    s = state.scale,
    xy = state.translate,
    bbox = r || s || xy ? el.getBBox() : null;
    if (bbox) {
    	var matrix = new Snap.Matrix();
    	if (r) {
            matrix.rotate(r.o, bbox.cx, bbox.cy);
        }
        if (s) {
            matrix.scale(s.o, s.o, bbox.cx, bbox.cy);
        }
        if (xy) {
        	var x = xy.xo - xy.xn,
        	y = xy.yo - xy.yn;
        	matrix.translate(x, y);
        }
        el.transform(matrix);
    }
}

function attr(selector) {
	var els = _(selector),
    s = states[selector];
    if (!els)
        return;
	if (els.stop) {
		els.stop().attr(s.o || {});
        reverse(els, s);
	} else {
		els.forEach(function(el){
			el.stop();
            reverse(el, s);
		}).attr(s.o || {});
	}
}

function timeout(els, s, t, d, qd, e, callback) {
    timeouts.push(setTimeout(function() {
        if (s.n) {
            if (s.q && !els.stop) {
                var tg = -qd;
                els.forEach(function(el){
                    tg += qd;
                    timeouts.push(setTimeout(function() {
                        el.animate(s.n, d, e, callback);
                    }, tg));
                });
            } else {
                els.animate(s.n, d, e, callback);
            }
        }
            
        if (s.scale || s.rotate || s.translate) {
            if (els.stop) {
                trans(els, s, d, e, callback);
            } else {
                if (s.q) {
                    var ti = -qd;
                    els.forEach(function(el){
                        ti += qd;
                        timeouts.push(setTimeout(function() {
                            trans(el, s, d, e, callback);
                        }, ti));
                    });
                } else {
                    els.forEach(function(el){
                        trans(el, s, d, e, callback);
                    });
                }
            }
        }
    }, t));
}

function animate(selector, duration, ease, callback) {
    var s = states[selector],
    d = duration || s.d || defDuration,
    qd = s.qd || d,
    e = ease || s.e || defEase,
    t = s.t || 0;
    els = _(selector);
    if (!els)
        return;
    if (t) {
        timeout(els, s, t, d, qd, e, callback);
    } else {
        if (s.n)
            els.animate(s.n, d, e, callback);
        if (s.scale || s.rotate || s.translate) {
            if (els.stop) {
                trans(els, s, d, e, callback);
            } else {
                els.forEach(function(el){
                    trans(el, s, d, e, callback);
                });
            }
        }
    }
}

function dataIndex(index) {
	var i = index - 1;
	return _('.section', 1).eq(i).data('index');
}

function getComponent(index) {
	return components[dataIndex(index) - 1];
}

function genGif(selector) {
	var gif = _(selector, 1),
	box = gif[0].getBoundingClientRect(),
	offset = gif.offset(),
	href = gif.attr('xlink:href'),
	src = href.substring(href.lastIndexOf('/') + 1);
	return '<img class="gen_gif" src="img/' + src + '" width="' + box.width + '" height="' + box.height + '" style="visibility:hidden;position:absolute;left:' + offset.left + 'px;top:' + offset.top + 'px;"/>';
}

function maskGif(index, selector) {
	timeouts.push(setTimeout(function() {
		_('.section', 1).eq(index - 1).append(genGif(selector));
	}, 800));
}

$(function() {
	var count = _('.section', 1).length,
	preload = 3;

    $('#fullpage').fullpage({
    	verticalCentered: false,

        afterRender: function() {
        	loadSvg(1, function(d) {
    			var comp = getComponent(1);
                for (var j = 0, l = comp.length; j < l; j++) {
                    animate(comp[j]);
                };

                for (var i = 1; i <= preload; i++)
                	loadSvg(1 + i);
        	});
        },

        afterLoad: function(anchorLink, index) {
            _('body', 1).css('background-color', _('.section', 1).eq(index - 1).css('background-color'));
        	var preIndex = index + preload,
            comp = getComponent(index),
            nav = _('#nav-arrow', 1);
            nav.hide();
        	if (preIndex <= count)
        		loadSvg(preIndex);

            for (var j = 0, l = comp.length; j < l; j++) {
            	animate(comp[j]);
            };
            if (index === 13) {
                var pen = _('#img13-1'),
                path = _('#path13-1'),
                len = path.getTotalLength();

                timeouts.push(setTimeout(function() {
                    minas.push(Snap.animate(0, 1, function(v) {
                        var pos = path.getPointAtLength(len * v);
                        pen.attr({
                            x: pos.x,
                            y: pos.y
                        });
                    }, 4000, mina.linear, function() {
                        pen.animate({
                            opacity: 0
                        }, 500);
                    }));
                }, defDuration));
            }
            if (index !== 21)
                nav.show();

            // if (ua.match(/iPhone|iPad|iPod/i)) {
            // 	var di = dataIndex(index);
            // 	if (di === 4) {
            // 		maskGif(index, '#img4-2');
	           //  }
            // }
        },

        onLeave: function(index, newIndex, direction) {
        	while (timeouts.length) {
        		clearTimeout(timeouts.pop());
        	}
            while (minas.length) {
                minas.pop().stop();
            }

            // if (index == 1 && direction == 'down') {
            // }
            if (index === 13) {
                _('#img13-1').stop().attr({
                    x: 120.4,
                    y: 289.6,
                    opacity: 1
                });
            }
            var comp = getComponent(index);
            for (var j = comp.length - 1; j >= 0; j--) {
            	attr(comp[j]);
            };

            _('.section', 1).eq(index - 1).find('.gen_gif').remove();
        }
    });
});