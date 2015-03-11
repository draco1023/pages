/* 
* @Author: Draco
* @Date:   2015-03-03 14:45:05
* @Last Modified by:   Administrator
* @Last Modified time: 2015-03-11 16:20:05
*/

var ua = navigator.userAgent,
flag = 0,
defDuration = 1200,
defEase = mina.easeinout,
jqCache = {},
svgCache = {},
timeouts = [],
states = {
	'#path1-1': {
		o: {
			transform: 'translate(1280,200)',
        	'fill-opacity': 0
		},
		n: {
			transform: 'translate(0,200)',
        	'fill-opacity': 1
		}
	},
	'#text2-1': {
		o: {
			transform: 'translate(-300,0)',
        	'fill-opacity': 0
		},
		n: {
			transform: 'translate(0,0)',
        	'fill-opacity': 1
		}
	},
	'#text2-2': {
		o: {
			transform: 'translate(-300,0)',
        	'fill-opacity': 0
		},
		n: {
			transform: 'translate(0,0)',
        	'fill-opacity': 1
		},
        t: 700
	},
	'#g2-1': {
		o: {
			transform: 'translate(-100,0)',
        	'stroke-opacity': 0
		},
		n: {
			transform: 'translate(0,0)',
        	'stroke-opacity': 1
		}
	},
	'#text3-1': {
		o: {
			transform: 'translate(0,300)',
        	'fill-opacity': 0
		},
		n: {
			transform: 'translate(0,0)',
        	'fill-opacity': 1
		}
	},
	'#img3-1': {
		o: {
			transform: 'translate(0,500)',
			opacity: 0
		},
		n: {
			transform: 'translate(0,0)',
			opacity: 1
		},
        t: defDuration
	},
	'.text3-2': {
		o: {
            'fill-opacity': 0
        },
        n: {
            'fill-opacity': 1
        },
        scale: {
            o: 0,
            n: 1
        },
        t: defDuration * 2
	},
    '.text4-1': {
        o: {
            transform: 'translate(0,-200)',
            'fill-opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'fill-opacity': 1
        },
        d: 700,
        t: 700,
        q: 1
    },
    '#img5-1': {
        o: {
            transform: 'translate(0,900)',
            'opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'opacity': 1
        }
    },
    '#img5-2': {
        o: {
            transform: 'translate(0,200)',
            'opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'opacity': 1
        }
    },
    '#img5-3': {
        o: {
            transform: 'translate(0,800)',
            'opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'opacity': 1
        }
    },
    '#img5-4': {
        o: {
            transform: 'translate(0,500)',
            'opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'opacity': 1
        }
    },
    '#img5-5': {
        o: {
            transform: 'translate(0,500)',
            'opacity': 0
        },
        n: {
            transform: 'translate(0,0)',
            'opacity': 1
        }
    },
    '.text5-1': {
        o: {
            'fill-opacity': 0
        },
        n: {
            'fill-opacity': 1
        },
        rotate: {
            o: 0,
            n: 360
        },
        t: defDuration
    },
    '.img6-1': {
    	o: {
    		transform: 'translate(-400,0)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	e: mina.backout
    },
    '.g6-1': {
    	o: {
    		transform: 'translate(-800,0)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	t: 900,
    	q: 1,
    	e: mina.backout
    },
    '#img7-1': {
    	o: {
    		transform: 'translate(1280,0)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
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
    		o: 0,
    		n: 1
    	},
    	t: defDuration,
    	q: 1,
    	e: mina.bounce
    },
    '.g7-1': {
    	o: {
    		opacity: 0
    	},
    	n: {
    		opacity: 1
    	},
    	scale: {
    		o: 0,
    		n: 1
    	},
    	d: defDuration,
    	t: defDuration * 3,
    	e: mina.bounce
    },
    '#text8-1': {
    	o: {
    		transform: 'translate(0,-300)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	}
    },
    '.text8-2': {
    	o: {
    		transform: 'translate(0,-300)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	},
    	t: defDuration,
    	q: 1
    },
    '#text8-3': {
    	o: {
    		transform: 'translate(0,-720)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	},
    	t: defDuration * 3,
    	e: mina.backout
    },
    '#text8-4': {
    	o: {
			transform: 'translate(0,300)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	},
    	t: defDuration * 4,
    	e: mina.backout
    },
    '#img9-1': {
    	o: {
    		opacity: 0
    	},
    	n: {
    		opacity: 1
    	}
    },
    '#img9-2': {
    	o: {
    		transform: 'translate(0,-240)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	t: defDuration
    },
    '.img9-3': {
    	o: {
    		transform: 'translate(-1280,0)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	t: defDuration * 2,
    	q: 1,
    	e: mina.backout
    },
    '#img10-1': {
    	o: {
    		transform: 'translate(0,-500)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	}
    },
    '.g10-1': {
    	o: {
    		opacity: 0
    	},
    	n: {
    		opacity: 1
    	},
    	t: defDuration,
    	q: 1
    },
    '#text10-1': {
    	o: {
    		transform: 'translate(-768,0)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	},
    	t: defDuration * 2,
    	e: mina.backout
    },
    '#img17-1': {
    	o: {
    		transform: 'translate(0,-800)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	e: mina.bounce
    },
    '#img17-2': {
    	o: {
    		transform: 'translate(0,-800)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	t: defDuration,
    	e: mina.bounce
    },
    '#img17-3': {
    	o: {
    		transform: 'translate(0,-800)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	t: defDuration * 2,
    	e: mina.bounce
    },
    '#g17-1': {
    	o: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	n: {
    		transform: 'translate(224.25,179.80)',
    		opacity: 0
    	},
    	t: defDuration * 3.5
    },
    '#g17-2': {
    	o: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	n: {
    		transform: 'translate(-220.21,193.95)',
    		opacity: 0
    	},
    	t: defDuration * 3.5
    },
    '#g17-3': {
    	o: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	n: {
    		transform: 'translate(0,-236.38)',
    		opacity: 0
    	},
    	t: defDuration * 3.5
    },
    '#img17-4': {
    	o: {
    		opacity: 0
    	},
    	n: {
    		opacity: 1
    	},
    	t: defDuration * 4
    },
    '#img13-1': {
    	o: {
    		transform: 'translate(0,-700)',
    		opacity: 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		opacity: 1
    	},
    	e: mina.backout
    },
    '#text13-1': {
    	o: {
    		transform: 'translate(0,-700)',
    		'fill-opacity': 0
    	},
    	n: {
    		transform: 'translate(0,0)',
    		'fill-opacity': 1
    	},
    	e: mina.backout
    },
    '#text13-2': {
    	o: {
    		'fill-opacity': 0
    	},
    	n: {
    		'fill-opacity': 1
    	},
    	t: defDuration
    },
    '#img13-2': {
    	o: {
    		opacity: 0
    	},
    	n: {
    		opacity: 1
    	},
    	t: defDuration * 2
    },
    '#text13-3': {
    	o: {
    		'fill-opacity': 0
    	},
    	n: {
    		'fill-opacity': 1
    	},
    	t: defDuration * 3
    }
},
components = [
	['#path1-1'],
	['#text2-1', '#g2-1', '#text2-2'],
	['#text3-1', '#img3-1', '.text3-2'],
	['.text4-1'],
	['#img5-1', '#img5-2', '#img5-3', '#img5-4', '#img5-5', '.text5-1'],
	['.img6-1', '.g6-1'],
	['#img7-1', '.img7-2', '.g7-1'],
	['#text8-1', '.text8-2', '#text8-3', '#text8-4'],
	['#img9-1', '#img9-2', '.img9-3'],
	['#img10-1', '.g10-1', '#text10-1'],
	[],
	[],
	['#img13-1', '#text13-1', '#text13-2', '#img13-2', '#text13-3'],
	[],
	[],
	[],
	['#img17-1', '#img17-2', '#img17-3', '#g17-1', '#g17-2', '#g17-3', '#img17-4']
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
	if (!(cur >> i & 1))
		var path = '../../../wasion/svg/' + di + '.svg';
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

function trans(el, state, duration, ease, callback) {
    var r = state.rotate,
    s = state.scale,
    xy = state.translate,
    bbox = r || s || xy ? el.getBBox() : null;
    if (bbox) {
        Snap.animate(0, 1, function(v) {
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

function timeout(els, s, t, d, e, callback) {
    timeouts.push(setTimeout(function() {
        if (s.n) {
            if (s.q && !els.stop) {
                var tg = -d;
                els.forEach(function(el){
                    tg += d;
                    timeouts.push(setTimeout(function() {
                        el.animate(s.n, d, e, callback);
                    }, tg));
                });
            } else {
                els.animate(s.n, d, e, callback);
            }
        }
            
        if (s.scale || s.rotate) {
            if (els.stop) {
                trans(els, s, d, e, callback);
            } else {
                if (s.q) {
                    var ti = -d;
                    els.forEach(function(el){
                        ti += d;
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
    e = ease || s.e || defEase,
    t = s.t || 0;
    els = _(selector);

    if (t) {
        timeout(els, s, t, d, e, callback);
    } else {
        if (s.n)
            els.animate(s.n, d, e, callback);
        if (s.scale || s.rotate) {
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
	return '<img class="gen_gif" src="../../../wasion/img/' + src + '" width="' + box.width + '" height="' + box.height + '" style="position:absolute;left:' + offset.left + 'px;top:' + offset.top + 'px;"/>';
}

function maskGif(index, selector) {
	timeouts.push(setTimeout(function() {
		_('.section', 1).eq(index - 1).append(genGif(selector));
	}, defDuration));
}

$(function() {
	var count = _('.section', 1).length,
	preload = 3;

    $('#fullpage').fullpage({
    	verticalCentered: false,

        afterRender: function() {
        	loadSvg(1, function(d) {
    			animate('#path1-1');

                for (var i = 1; i <= preload; i++)
                	loadSvg(1 + i);
        	});
        },

        afterLoad: function(anchorLink, index) {
        	var preIndex = index + preload,
            comp = getComponent(index);
        	if (preIndex <= count)
        		loadSvg(preIndex);

            for (var j = 0, l = comp.length; j < l; j++) {
            	animate(comp[j]);
            };

            if (ua.match(/iPhone|iPad|iPod/i)) {
            	var di = dataIndex(index);
            	if (di === 14) {
            		maskGif(index, '#img14-1');
	            }
            }
        },

        onLeave: function(index, newIndex, direction) {
        	while (timeouts.length) {
        		clearTimeout(timeouts.pop());
        	}
            // if (index == 1 && direction == 'down') {
            // }
            var comp = getComponent(index);
            for (var j = comp.length - 1; j >= 0; j--) {
            	attr(comp[j]);
            };

            _('.section', 1).eq(index - 1).find('.gen_gif').remove();
        }
    });
});