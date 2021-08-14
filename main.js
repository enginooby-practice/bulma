document.addEventListener("DOMContentLoaded", function (event) {
        const eNavbarBurger = document.querySelector(".navbar-burger")
        const eNavbarMenu = document.querySelector(".navbar-menu")

        eNavbarBurger.addEventListener('click', () => {
                eNavbarMenu.classList.toggle('is-active')
                eNavbarBurger.classList.toggle('is-active')
        })
});
