class Carousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector)
        this.wrapper = this.carousel.querySelector("[data-carousel-wrapper]")
        this.prev = this.carousel.querySelector("[data-carousel-prev]")
        this.next = this.carousel.querySelector("[data-carousel-next]")
        this.indicatorsContainer = document.getElementById(this.carousel.getAttribute("data-carousel-indicators"))
        this.items = this.wrapper.querySelectorAll("[data-carousel-items]")
        this.currentIndex = 0
    }

    init() {
        console.log(this)
        this.createIndicators()
        this.addListeners()
        this.updateCorousel()
    }

    createIndicators() {
        this.items.forEach((item, index) => {
            const indicator = document.createElement("div")
            indicator.classList.add("indicator")

            // indicator.dataset.carouselIndex = index
            indicator.setAttribute("data-carousel-index", index)
            // indicator.textContent = index
            this.indicatorsContainer.appendChild(indicator)
        })

        this.indicators = this.indicatorsContainer.querySelectorAll(".indicator")
    }

    addListeners() {
        this.prev.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
            this.updateCorousel()
        })

        this.next.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex + 1) % this.items.length
            this.updateCorousel()
        })

        this.indicators.forEach(indicator => {
            indicator.addEventListener("click", e => {
                this.goToSlide(parseInt(e.target.getAttribute("data-carousel-index")))
            })
        })
    }

    updateCorousel() {

        this.wrapper.style.setProperty("--currentIndex", this.currentIndex)

        // this.indicators.forEach(item => item.classList.remove("active"))

        // if(this.indicatorsContainer.querySelector(".active")){
        //     this.indicatorsContainer.querySelector(".active").classList.remove("active")
        // }

        this.indicatorsContainer.querySelector(".active")?.classList.remove("active")

        this.indicatorsContainer.querySelector(`[data-carousel-index='${this.currentIndex}']`).classList.add("active")


    }

    goToSlide(index) {
        this.currentIndex = index
        this.updateCorousel()
    }
}

