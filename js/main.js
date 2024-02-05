let count=+(prompt("enter the count of scores"))

let html=""
for (let i = 1; i <= count; i++) {
  html+=`
  <label for="score">Score:</label>
  <input type="text" name="score" required/>
  <label for="quotient">Quotient:</label>
  <input type="text" name="quotient" required/>
  <br />
  `
}

let scores=[]
let quotients=[]

let sum=0;
let avg=0;
let totalQuotient= 0;

let averageForm=document.querySelector("div.wrapper>div.form");

let scoreDiv=document.querySelector("div.wrapper>div.form>div.scores");
scoreDiv.innerHTML+=html

let btnCalc=document.querySelector("button#btnCalc");


let scoreInput=document.querySelectorAll("div.wrapper>div.form>div.scores>input[name='score']");

let quotientInput=document.querySelectorAll("div.wrapper>div.form>div.scores>input[name='quotient']");

btnCalc.addEventListener("click", function () {

  scoreInput.forEach((elem)=>{
    scores.push(elem.value)
  })

  quotientInput.forEach((elem)=>{
    quotients.push(elem.value)
  })

for (let i = 0; i < scores.length; i++) {
   sum+=scores[i]*quotients[i];
   totalQuotient+= Number(quotients[i]);
}

avg=sum/totalQuotient;
averageForm.innerHTML=`The average of your scores is ${avg}`
})