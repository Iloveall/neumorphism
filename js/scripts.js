(() => {
    gsap.to(".btn", {
        scale: "+=.9",
        duration: 0.6,
        stagger: 0.3 //space each element's animation out by 0.5 seconds
    });

    gsap.from('.btn', {
        color: 'red'
    });

    gsap.to('.btn', {
        color: 'green'
    });

    const time = 3;
    const startBg = 1;
    const bgCount = 6;
    let i = startBg;

    const interval = setInterval(() => {
        i++;

        const body = document.querySelector('body');

        console.log(`--bg-${i}`);

        body.classList.add(`--bg-${i}`);

        if (i === bgCount) {
            clearInterval(interval);
        }
    }, time * 1000);

})();
