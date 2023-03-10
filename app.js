const questions = [
    {
        "que":"what type of language HTML is?",
        "a":"programming",
        "b":"HyperText",
        "c":"Cascading Style sheet",
        "d":"PHP",
        "correct":"b"
    },
    {
        "que":"what type of language JavaScript is?",
        "a":"programming",
        "b":"HyperText",
        "c":"Cascading Style sheet",
        "d":"PHP",
        "correct":"a"
    },
    {
        "que":"what type of language CSS is?",
        "a":"programming",
        "b":"HyperText",
        "c":"Cascading Style sheet",
        "d":"PHP",
        "correct":"c"
    }
]


let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
let heading = document.getElementById("question");
const options = document.querySelectorAll(".options")
const loadQuestion = ()=>{
    if(index === total){
       return endQuiz();
    }
    reset();
    const question = questions[index];
    heading.innerHTML = `${index+1}) ${question.que}`;
    options[0].nextElementSibling.innerText = question.a;
    options[1].nextElementSibling.innerText = question.b;
    options[2].nextElementSibling.innerText = question.c;
    options[3].nextElementSibling.innerText = question.d;
}

const submitQuiz = ()=>{
   let correct = questions[index].correct;
//    console.log(correct);
   let userSelected = getInputValue();
//    console.log(userSelected);
//    console.log(correct);
   if(correct === userSelected){
       right++
   } else {
     wrong++
   }
   index++
   loadQuestion();
//    console.log(right);
//    console.log(wrong);
}

const getInputValue = ()=>{
    let answer;
   options.forEach(
    (option)=>{
        if(option.checked){
          answer = option.value;
        }
    }
   )
   return answer;
}


const endQuiz = ()=>{
    if(right === 3){
    let box = document.getElementById("box");
    box.innerHTML = `
    <h2>Thank you for playing the quiz</h2>
    ${right} / ${total} are correct
    <h2 class="message">You played fantastic</h2>
    `
    } else if(right === 2){
        let box = document.getElementById("box");
        box.innerHTML = `
        <h2>Thank you for playing the quiz</h2>
        ${right} / ${total} are correct
        <h2 class="message">You'were so close to get all correct</h2>
        `
    } else{
        let box = document.getElementById("box");
        box.innerHTML = `
        <h2>Thank you for playing the quiz</h2>
        ${right} / ${total} are correct
        <h2 class="message">You could'nt make it correct</h2>
        `
    }
    // console.log("quiz is end");
    // console.log(right + "/" + total  + "are correct");
}

const reset = ()=>{
    options.forEach(
        (option)=>{
            option.checked = false;
        }
       )
}
loadQuestion();