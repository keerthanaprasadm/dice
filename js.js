
var randomnumber1=Math.floor(Math.random()*6)+1;
var imagesource="./dice images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
var changeattribute=image1.setAttribute("src",imagesource);
var randomnumber2=Math.floor(Math.random()*6)+1;
var imagesource2="./dice images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
var changeattribute2=image2.setAttribute("src",imagesource2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!";

}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!!";

}else{
    document.querySelector("h1").innerHTML="Draw!!";
}








    
                                                                                    
