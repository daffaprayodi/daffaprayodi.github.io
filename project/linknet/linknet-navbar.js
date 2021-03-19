function ownKeys(t, e) { var a, r = Object.keys(t); return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t), e && (a = a.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, a)), r }

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(a), !0).forEach(function(e) { _defineProperty(t, e, a[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e)) })
    }
    return t
}

function _defineProperty(e, t, a) { return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e }

function _typeof(e) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
// ----
! function() {
    "use strict";
    var e, t, a, r, n;
    (function() {
        var n, o = document.querySelectorAll(".masonry-grid");
        if (null !== o)
            for (var e = 0; e < o.length; e++) {
                var t = function(e) {
                    n = new Shuffle(o[e], { itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" }), imagesLoaded(o[e]).on("progress", function() { n.layout() });
                    var r = o[e].closest(".masonry-filterable");
                    if (null === r) return { v: void 0 };
                    for (var t = r.querySelectorAll(".masonry-filters [data-group]"), a = 0; a < t.length; a++) t[a].addEventListener("click", function(e) {
                        var t = r.querySelector(".masonry-filters .active"),
                            a = this.dataset.group;
                        null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(a), e.preventDefault()
                    })
                }(e);
                if ("object" === _typeof(t)) return t.v
            }
    })(), null != (a = document.querySelector(".navbar-sticky")) && (e = a.classList, t = a.offsetHeight, e.contains("navbar-floating") && e.contains("navbar-dark") ? window.addEventListener("scroll", function(e) { 500 < e.currentTarget.pageYOffset ? (a.classList.remove("navbar-dark"), a.classList.add("navbar-light", "navbar-stuck")) : (a.classList.remove("navbar-light", "navbar-stuck"), a.classList.add("navbar-dark")) }) : e.contains("navbar-floating") && e.contains("navbar-light") ? window.addEventListener("scroll", function(e) { 500 < e.currentTarget.pageYOffset ? a.classList.add("navbar-stuck") : a.classList.remove("navbar-stuck") }) : window.addEventListener("scroll", function(e) { 500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = t + "px", a.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", a.classList.remove("navbar-stuck")) })),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="search"]'),
                t = document.querySelector(".navbar-search");
            if (null !== t)
                for (var a = t.querySelector(".navbar-search-field"), r = 0; r < e.length; r++) e[r].addEventListener("click", function(e) { t.classList.toggle("show"), a.focus(), e.preventDefault() })
        }(),


        new SmoothScroll("[data-scroll]", { speed: 800, speedAsDuration: !0, offset: 40, header: "[data-scroll-header]", updateURL: !1 }),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="offcanvas"]'),
                t = document.querySelectorAll('[data-bs-dismiss="offcanvas"]'),
                a = document.querySelectorAll(".offcanvas"),
                r = document.body,
                n = document.querySelectorAll("[data-fixed-element]"),
                o = window.innerWidth > r.clientWidth,
                s = document.createElement("div");
            s.classList.add("offcanvas-backdrop");
            for (var l = function() {
                    for (var e = 0; e < a.length; e++) a[e].classList.remove("show");
                    if (s.classList.remove("show"), setTimeout(function() { s.parentNode.removeChild(s) }, 50), o && (r.style.paddingRight = 0, n.length))
                        for (var t = 0; t < n.length; t++) n[t].classList.remove("right-15");
                    r.classList.remove("offcanvas-open")
                }, c = 0; c < e.length; c++) e[c].addEventListener("click", function(e) {
                e.preventDefault(),
                    function(e) {
                        var t = document.querySelector(e).parentNode;
                        if (t.appendChild(s), setTimeout(function() { s.classList.add("show") }, 20), document.querySelector(e).classList.add("show"), o && (r.style.paddingRight = "15px", n.length))
                            for (var a = 0; a < n.length; a++) n[a].classList.add("right-15");
                        r.classList.add("offcanvas-open")
                    }(e.currentTarget.dataset.bsTarget, e.currentTarget)
            });
            for (var i = 0; i < t.length; i++) t[i].addEventListener("click", function(e) { e.preventDefault(), l() });
            document.addEventListener("click", function(e) { "offcanvas-backdrop" === e.target.classList[0] && l() })
        }(), null != (n = document.querySelector(".btn-scroll-top")) && (r = parseInt(600, 10), window.addEventListener("scroll", function(e) { e.currentTarget.pageYOffset > r ? n.classList.add("show") : n.classList.remove("show") })), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) { return new bootstrap.Tooltip(e) }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) { return new bootstrap.Popover(e) }), [].slice.call(document.querySelectorAll(".toast")).map(function(e) { return new bootstrap.Toast(e) }),



        function() {
            var e = document.querySelectorAll("[data-checkbox-toggle-class]");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                    var e = document.querySelector(this.dataset.bsTarget),
                        t = this.dataset.checkboxToggleClass;
                    this.checked ? e.classList.add(t) : e.classList.remove(t)
                })
        }()


}();