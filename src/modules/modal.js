import { animate } from './helpers'
const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    // const animation = () => {
    //     modal.animate([
    //     {opacity: '0'},
    //     {opacity: '1'}
    //   ], 100);
    // }
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`
            animate({
                duration: 300,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress
                }
              });
        })
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    modal.style.opacity = progress
                    if (progress === 0) {
                        modal.style.display = `none`
                    }
                }
              });
        }
    })
}

export default modal