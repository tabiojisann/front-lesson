document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // const ta = new TextAnimation(entry.target);
                // ta.animate();
                observer.unobserve(entry.target);
            } else {
            }
        });
    };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
   
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.init();
    }

    init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // const ta = new TextAnimation(entry.target);
                    // ta.animate();

                    this.cb(entry, target, true);
                    observer.unobserve(entry.target);
                } else {
                }
            });
        };

        const io = new IntersectionObserver(callback.bind(this), this.options);
        els.forEach(el => io.observe(el));
    }
}
