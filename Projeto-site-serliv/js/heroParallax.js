function setupHeroParallax(selector) {
    const hero = document.querySelector(selector)
    if (!hero) return

    const parallaxSpeed1 = parseFloat(getComputedStyle(hero).getPropertyValue("--parallax-speed-1"))
    const parallaxSpeed2 = parseFloat(getComputedStyle(hero).getPropertyValue("--parallax-speed-2"))

    function updateParallax() {
        const scrollY = window.scrollY
        const heroHeight = parseInt(getComputedStyle(hero).height)

        if (scrollY < heroHeight) {
            hero.style.backgroundPosition = `
            left 5% top calc(${scrollY * parallaxSpeed1}px),
            right 5% top calc(${scrollY * parallaxSpeed1}px),
            left -2% bottom calc(2% + ${scrollY * parallaxSpeed2}px),
            right -2% bottom calc(2% + ${scrollY * parallaxSpeed2}px)
            `
        }
    }

    window.addEventListener("scroll", updateParallax)
}

