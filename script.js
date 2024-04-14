let btn = document.querySelectorAll(".choice");
let p = document.querySelector("#description");
// let newPara = document.createElement("p");
let myScore = document.querySelector("#my-score");
let compScore = document.querySelector("#comp-score");
let myCount = 0;
let compCount = 0;


btn.forEach((choice)=>{
	choice.addEventListener("click",()=>{
		let seleChoice = choice.innerText;
		reset(p);
		compChoice(seleChoice);
	})
})

function compChoice(seleChoice){
	
	let generatedNum = Math.floor(Math.random()*3);
	let genertedChoice = btn[generatedNum].innerText;
	compare(genertedChoice , seleChoice);
}

function compare(genertedChoice , seleChoice){
	let result ;
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
	display(result)
}

function display(ele) {

	// body.append(newPara);
	p.innerText = ele;
	if(ele === "You Win"){ 
		myCount++;
		 myScore.innerText = myCount;
		}else if(ele === "You lose"){
			compCount++;
			compScore.innerText = compCount;
		}

}

function reset(newPara) {
	newPara.remove();
}