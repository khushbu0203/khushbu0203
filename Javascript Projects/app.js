const questions = [
    {
        que: 'which of the following is a markup language ?',
        a : 'HTML',
        b : 'CSS',
        c : 'JavaScript',
        d : 'PHP',
        correct : 'a'
    },
    {
        que: 'What does HTML stand for? ?',
        a: 'Hyper Trainer Marking Language',
        b: 'Hyper Text Marketing Language',
        c: 'Hyper Text Markup Language',
        d: 'Hyper Text Markup Leveler',
        correct: 'c' 
    },
    {
        que: 'What does CSS stand for? ?',
         a: 'Cascading Style Sheets',
         b: 'Colorful Style Sheets',
         c: 'Creative Style System',
         d: 'Creative Scale Sheet',
         correct: 'a' 
     }
]   
let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.Options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else {
        wrong++; 
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }   
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thankyou For Playing The Quiz </h3>
        <h2> ${right}/${total} are correct </h2>
    </div>    
    `
}

loadQuestion();