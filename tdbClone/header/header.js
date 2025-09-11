

const textBlocks = document.getElementsByClassName('text-block');
for(let block of textBlocks){
    block.addEventListener('click', () => {
        block.parentElement.classList.toggle("open");
        console.log("You clicked on a navbar! ");
    })
}
