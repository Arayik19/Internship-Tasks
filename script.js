//================ Variable Declaration=========

let main = document.getElementById('main')
let c1 = 0;
let c2 = 0;
let c3 = 0;

//================ Variable Declaration=========

//==================== Matrix Creation============

for(let i = 0; i < 256; i++){
    for(let j = 0;j < 256; j++){
        let colorBlock = document.createElement('div');
        colorBlock.className = "cBlock";
        colorBlock.style.height = "100px";
        colorBlock.style.width = "100px";
        colorBlock.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
        colorBlock.style.float = 'left';            
        colorBlock.addEventListener("mouseenter",function(){
            colorBlock.innerHTML = `i=${i} j=${j} rgb(${0};${i};${j})`;
        })
        colorBlock.addEventListener("mouseleave",function(){
            colorBlock.innerHTML = "";
        })   
        main.appendChild(colorBlock);
        c3=c3+1;
    }    
    c2=c2+1;
    c3 = 0;
}
//==================== Matrix Creation============


