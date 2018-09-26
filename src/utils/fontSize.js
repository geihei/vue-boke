export default function() {
    (function(d, c) {
        var e = d.documentElement,
            b = "orientationchange" in window ? "orientationchange" : "resize",
            a = function() {
                var f = e.clientWidth;
                if (!f) {
                    return
                }
                if (f >= 750) {
                    e.style.fontSize = "200px"
                } else {
                    e.style.fontSize = (f / 375 * 100) + "px"
                }
            };
        if (!d.addEventListener) {
            return
        }
        c.addEventListener(b, a, false);
        d.addEventListener("DOMContentLoaded", a, false);
        a()
    })(document, window);
    // // 禁止双击放大
    // document.documentElement.addEventListener('touchstart', function (event) {
    //     if (event.touches.length > 1) {
    //         event.preventDefault();
    //     }
    // }, false);
    // var lastTouchEnd = 0;
    // document.documentElement.addEventListener('touchend', function (event) {
    //     var now = Date.now();
    //     if (now - lastTouchEnd <= 300) {
    //         event.preventDefault();
    //     }
    //     lastTouchEnd = now;
    // }, false);
}