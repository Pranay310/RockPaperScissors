let btn = document.querySelectorAll(".choice");
let div = document.querySelector(".score-div");
let result ;


btn.forEach((choice)=>{
	choice.addEventListener("click",()=>{
		let seleChoice = choice.innerText;
		compChoice(seleChoice);
	})
})

function compChoice(seleChoice){
	
	let generatedNum = Math.floor(Math.random()*3);
	let genertedChoice = btn[generatedNum].innerText;
	compare(genertedChoice , seleChoice);
}

function compare(genertedChoice , seleChoice){
	console.log(`Comp Choice ${genertedChoice} , Yours Choice ${seleChoice}`)
	if(seleChoice === genertedChoice){
		result = "Draw Play" ;
	}
	else if(genertedChoice === "Rock"){
		if(seleChoice === "Paper"){
			result = "You Win"
		}else{result = "You lose"}
	}
	else if(genertedChoice === "Paper"){
		if(seleChoice === "Scissors"){
			result = "You Win"
		}else{result = "You lose"}
	}
	else if(genertedChoice === "Scissors"){
		if(seleChoice === "Rock"){
			result = "You Win"
		}else{result = "You lose"}
	}
}

let newPara = document.createElement("p");

newPara.innerText = result;

div.append(newPara);
// console.log(newPara);