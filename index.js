const imagearray=["./images/product1.jpg",
    "./images/product2.jpg",
    "./images/product3.jpg",
    "./images/product4.jpg",
    "./images/product5.jpg"
]

let imageindex=0;
function prev(){
if(imageindex==0){
imageindex=imagearray.length-1;
}
else{
imageindex--;
}

const imageElement=document.getElementById("gallery-img");
imageElement.src=imagearray[imageindex]
}

function next(){
if(imageindex==imagearray.length-1){
imageindex=0;
}
else{
imageindex++;
}

const imageElement=document.getElementById("gallery-img");
imageElement.src=imagearray[imageindex]
}