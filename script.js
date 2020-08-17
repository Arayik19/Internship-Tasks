//================ Variable Declaration=========
const main = document.getElementById('main');
//================ Variable Declaration=========

//==================== Matrix Creation============

for(let i = 0; i < 256; i++){
    for(let j = 0;j < 256; j++){
        let colorBlock = document.createElement('div');
        colorBlock.className = "cBlock";
        colorBlock.style.backgroundColor = `rgb(0,${i},${j})`;            
        colorBlock.addEventListener("mouseenter",function(){
            colorBlock.innerHTML = `i=${i} j=${j} rgb(0;${i};${j})`;
        })
        colorBlock.addEventListener("mouseleave",function(){
            colorBlock.innerHTML = "";
        })   
        main.appendChild(colorBlock);        
    } 
}
//==================== Matrix Creation============


