var inpnum=document.getElementById("num")
var gennum=Math.floor(Math.random()*10)+1
var result=document.getElementById("results")
var score=document.getElementById("score")
var totalscore=10


function guess_num(){
var enterednum=inpnum.value 
if(enterednum == gennum)
{
    console.log("Right")
    result.textContent="Right"
    alert("You won..!")
    bg.style.backgroundColor="#98FF98"
}
else 
{
    totalscore=totalscore-1
    score.textContent="Score : "+totalscore
    console.log("Wrong")
    result.textContent="Wrong"
}
} 