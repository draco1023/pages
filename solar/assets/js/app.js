! function(e) {
    if (e) {
        e(function() {
            FastClick.attach(document.body)
        });
        var a = e.AMUI.iScroll;
        if (a) {
            var o = function() {
                // var o = e("body"),
                //     i = e(".widget-hd"),
                //     n = e("#demo-scroller"),
                //     l = e("#widget-list");
                // this.compile = Handlebars.compile(e("#tpl-demo-list").html()), this.cache = {}, this.demoScroll = null, this.render = function(e, a) {
                //     return this.cache[e] || (this.cache[e] = this.compile(a)), this.cache[e]
                // }, this.createList = function(e) {
                //     e = e || this.getHash();
                //     var a = this;
                //     return e && i.find("h1").text(l.find("[data-rel=" + e + "]").text() + "Demos"), !e || t.indexOf(e) < 0 ? this.resetActive() : void a.setActive(e, getListData(e, _widgets[e].themes))
                // }, this.setActive = function(t, i) {
                //     n.empty().html(this.render(t, i)), o.addClass("demo-list-active"), this.demoScroll || (this.demoScroll = new a("#demo-list", {
                //         tap: !0
                //     })), setTimeout(e.proxy(function() {
                //         this.demoScroll.refresh()
                //     }, this), 100)
                // }, this.resetActive = function() {
                //     o.removeClass("demo-list-active")
                // }, this.getHash = function() {
                //     return window.location.hash.replace("#", "")
                // }, this.init = function() {
                //     l.on("click tap", "a", function(a) {
                //         a.preventDefault(), window.location.hash = e(this).attr("data-rel")
                //     }), e(window).on("hashchange", e.proxy(function() {
                //         this.createList()
                //     }, this)), e("#btn-back").on("click", function(e) {
                //         e.preventDefault(), window.location.hash = ""
                //     }), l.on("touchmove", function(e) {
                //         e.preventDefault()
                //     }), this.createList()
                // }, this.init(), this.mainScroll = new a(l[0])
            };e('#main-view').on('click tap', 'a', function(a) {
              a.preventDefault(), e('body').addClass('detail-active');
            });
            e('#btn-back').on('click', function(a) {
              a.preventDefault();
              e('body').removeClass('detail-active');
            });
            // e('.am-list-news-bd').on("touchmove", function(e) {
            //     e.preventDefault()
            // });
            e(function() {
                new o
            });
            var r = Handlebars.compile(e('#demo-list').html());
            e('#main-view').append(r({
              content: [{
                title: '今日发电量',
                normalImage: 'assets/i/发电量.png',
                highlightImage: 'assets/i/icon12.png',
                value: 123,
                unit: 'kWh'
              }]
            }));
        }
    }
}(window.jQuery || window.Zepto);
