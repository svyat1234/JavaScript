const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const dots = document.querySelectorAll('.dot')
    
    const timeInterval = 2000

    let correntSlide = 0
    let interval

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, correntSlide, 'portfolio-item-active')
        prevSlide(dots, correntSlide, 'dot-active')
        correntSlide++

        if (correntSlide >= slides.length) {
            correntSlide = 0
        }

        nextSlide(slides, correntSlide, 'portfolio-item-active')
        nextSlide(dots, correntSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, correntSlide, 'portfolio-item-active')
        prevSlide(dots, correntSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            correntSlide++
        } else if (e.target.matches('#arrow-left')) {
            correntSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, i) => {
                if (e.target === dot) {
                    correntSlide = i
                }
            })
        }

        if (correntSlide >= slides.length) {
            correntSlide = 0
        } 
        
        if (correntSlide < 0) {
            correntSlide = slides.length - 1
        } 
        
        nextSlide(slides, correntSlide, 'portfolio-item-active')
        nextSlide(dots, correntSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)

    startSlide(timeInterval)
}

export default slider