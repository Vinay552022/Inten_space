let button=document.getElementById("btn");
let body=document.body;
let color=["red","blue","yellow","green","violet","black","brown","cyan","purple","aqua","lightpink","orange","indigo","teal","gray"];
button.style.backgroundColor=color[1];
button.addEventListener('click',changeBackground);
function changeBackground(){
    let colindex=Math.floor(Math.random()*color.length);
    console.log(6);
    body.style.backgroundColor=color[colindex];
    button.style.backgroundColor=color[colindex-1];
}