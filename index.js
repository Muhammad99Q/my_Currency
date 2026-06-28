let firstCurency= document.getElementById("firstCurency");
let secondCurency= document.getElementById("secondCurency");
let firstInput= document.getElementById("firstInput");
let secondInput= document.getElementById("secondInput");


rate();

function rate(){
fetch(`https://v6.exchangerate-api.com/v6/c0db9d86a0ffdd9617368f0c/latest/${firstCurency.value}`)
.then((ans)=>ans.json()).then((data)=>{
  let price= data.conversion_rates[secondCurency.value];
secondInput.value= (price*firstInput.value).toFixed(1);
     document.getElementById("CurrrencyToday").innerText=`1 ${firstCurency.value} = ${price}  ${secondCurency.value}`;

})

};


firstCurency.addEventListener("change",rate);
secondCurency.addEventListener("change",rate);
firstInput.addEventListener("input",rate);

