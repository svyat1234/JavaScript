const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.tagName === 'A') {
            handleMenu()
        }
    })

    menuBtn.addEventListener('click', handleMenu)
}

export default menu