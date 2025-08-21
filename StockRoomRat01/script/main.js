// adobe font
(function (d) {
    var config = {
            kitId: "bpb3ikw",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

//hero-animation
const target = document.querySelector("body");
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (
            mutation.type === "attributes" &&
            target.classList.contains("pace-done")
        ) {
            observer.disconnect();
            runHeroAnimation();
        }
    }
});
observer.observe(target, { attributes: true });

function runHeroAnimation() {
    const heroAnimate = gsap.timeline();
    gsap.from(".lamp__line", {
        opacity: 0,
        duration: 1,
        delay: 0,
        height: 0,
    });
    heroAnimate.from(".lamp__triangle", {
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        height: 0,
        width: 0,
    });
    heroAnimate.from(".lamp__light", {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        height: 0,
    });
    heroAnimate.from(".lightSpot", {
        opacity: 0,
        duration: 1.5,
        delay: 0.6,
        height: 0,
        width: 0,
    });
    heroAnimate.from(".tv", {
        opacity: 0,
        duration: 0.7,
        delay: -0.6,
        height: 0,
    });

    const tvChange = gsap.timeline({ repeat: -1 });
    tvChange.to(".tv img", {
        opacity: 1,
        duration: 0,
        stagger: 0.07,
    });

    const tvElement = document.querySelector(".tv");
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    function updateOnScroll() {
        const scale = (100 + lastScrollY / 10) / 100;
        tvElement.style.transform = `translate(-50%, -50%) scale(${scale})`;
        ticking = false;
    }
}
