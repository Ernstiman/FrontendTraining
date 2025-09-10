

const navbars = document.getElementsByClassName('navbar');
for(let navbar of navbars){
    navbar.addEventListener('click', () => {
        navbar.classList.toggle("open");
        console.log("You clicked on a navbar! ");
    })
}
