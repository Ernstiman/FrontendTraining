

const textBlocks = document.getElementsByClassName('text-block');
for(let block of textBlocks){
    block.addEventListener('click', (e) => {

        let isOpen = block.parentElement.classList.contains('open');

        let openNavs = document.querySelectorAll('.navbar-container.open');
        openNavs.forEach(nav => nav.classList.remove('open'));

        if(!isOpen) block.parentElement.classList.add("open");
        
    })
}

document.addEventListener("click", (e) => {
    let isInside = e.target.closest('.navbar-container');
    if(!isInside){
        let openNavs = document.querySelectorAll('.navbar-container.open');
        openNavs.forEach(nav => nav.classList.remove('open'));
    }
})
