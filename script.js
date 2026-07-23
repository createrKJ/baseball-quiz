const questions = [
    {
    number: "問題1",

    question: "ヒットで1塁に出ました。まず最初にしなければならないことは何ですか？",

    choices: [
        { text: "すぐに大きくリードを取る", correct: false },
        { text: "ベンチの友達を見る", correct: false },
        { text: "馬場監督やコーチのサインを見る", correct: true },
        { text: "相手ピッチャーを見る", correct: false }
    ],

    comment: "出塁したらまず馬場監督やコーチのサインを確認しましょう。サインを見ないと作戦が分からず、チームに迷惑をかけてしまいます。"
},

{
    number: "問題2",

    question: "1塁に出ました。馬場監督やコーチのサインは、どこで確認するのが正しいですか？",

    choices: [
        { text: "リードを取りながら見る", correct: false },
        { text: "ベースの上で見る", correct: true },
        { text: "ベンチを見ながら歩く", correct: false },
        { text: "相手ベンチを見る", correct: false }
    ],

    comment: "サインを見るときは必ずベースの上で確認します。リードを取りながら見ると、けん制アウトになる危険があります。"
},

{
    number: "問題3",

    question: "1塁に出ました。リードを取るタイミングはいつですか？",

    choices: [
        { text: "出塁したらすぐ", correct: false },
        { text: "相手ピッチャーが構えたら", correct: false },
        { text: "馬場監督やコーチのサインを確認したあと", correct: true },
        { text: "キャッチャーを見たあと", correct: false }
    ],

    comment: "リードは必ずサインを確認してから取ります。焦ってリードを取るとサインを見逃したり、けん制アウトになる危険があります。"
},

{
    number: "問題4",

    question: "ランナー3塁。ピッチャーが投げたボールが後ろへそれてワイルドピッチになりました。ピッチャーが最初にしなければならないことは？",

    choices: [
        { text: "マウンドで待つ", correct: false },
        { text: "ホームベースのカバーに入る", correct: true },
        { text: "セカンドベースへ走る", correct: false },
        { text: "ベンチを見る", correct: false }
    ],

    comment: "キャッチャーがボールを取りに行くため、ピッチャーはすぐホームベースをカバーします。"
},

{
    number: "問題5",

    question: "バッターがファースト方向へゴロを打ちました。ピッチャーがすぐにしなければならないことは？",

    choices: [
        { text: "マウンドで見る", correct: false },
        { text: "1塁ベースのカバーに入る", correct: true },
        { text: "セカンドベースへ行く", correct: false },
        { text: "ベンチを見る", correct: false }
    ],

    comment: "ファーストが打球を処理したら、ピッチャーは1塁ベースへ走って送球を受けます。"
},

{
    number: "問題6",

    question: "キャッチャーがピッチャーへ返球するとき、ショートやセカンドがしなければならないことは？",

    choices: [
        { text: "二遊間へ戻り返球に備える", correct: true },
        { text: "ベンチを見る", correct: false },
        { text: "外野へ下がる", correct: false },
        { text: "ホームへ走る", correct: false }
    ],

    comment: "返球がそれることもあります。ショート・セカンドは二遊間で返球をカバーします。"
},

{
    number: "問題7",

    question: "レフトオーバーのヒットになりました。カットマンに入るのは誰ですか？",

    choices: [
        { text: "キャッチャー", correct: false },
        { text: "ショート", correct: true },
        { text: "ファースト", correct: false },
        { text: "ライト", correct: false }
    ],

    comment: "レフト方向の打球では、基本的にショートがカットマンになります。"
},

{
    number: "問題8",

    question: "レフトオーバーのヒットでショートがカットマンに入りました。セカンドはどこへ入りますか？",

    choices: [
        { text: "ホームベース", correct: false },
        { text: "ファースストベース", correct: false },
        { text: "セカンドベース", correct: true },
        { text: "ライト", correct: false }
    ],

    comment: "ショートがカットに入るとセカンドベースが空くため、セカンドがベースに入ります。"
},

{
    number: "問題9",

    question: "ランナー2塁で外野へヒットになりました。ピッチャーはどこをカバーしますか？",

    choices: [
        { text: "セカンドベース", correct: false },
        { text: "サードベース", correct: true },
        { text: "ファーストベース", correct: false },
        { text: "ライト", correct: false }
    ],

    comment: "サードがカットプレーなどでベースを離れることがあるため、ピッチャーがサードベースをカバーします。"
},

{
    number: "問題10",

    question: "ランナー1塁でライト前ヒットになりました。セカンドが最初にしなければならないことは？",

    choices: [
        { text: "ホームへ走る", correct: false },
        { text: "ベンチを見る", correct: false },
        { text: "セカンドベースに入って送球を受ける準備をする", correct: true },
        { text: "ライトの後ろへ行く", correct: false }
    ],

    comment: "ライトからの返球を受けられるように、セカンドはすぐにセカンドベースへ入ります。"
}

];

let currentQuestion = 0;
let answered = false;
let score = 0;

const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

function showQuestion() {

    document.getElementById("questionNumber").innerHTML =
    "問題" + (currentQuestion + 1);

    document.getElementById("questionText").innerHTML =
        questions[currentQuestion].question;

        let shuffledChoices = [...questions[currentQuestion].choices];

shuffledChoices.sort(() => Math.random() - 0.5);

    let buttons = "";

    for (let i = 0; i < shuffledChoices.length; i++) {

    buttons += `
        <button id="choice${i}" onclick="checkAnswer(${shuffledChoices[i].correct}, ${i})">
            ${i + 1}. ${shuffledChoices[i].text}
        </button>
    `;

}

    document.getElementById("choices").innerHTML = buttons;
document.getElementById("result").style.display = "none";
document.getElementById("comment").style.display = "none";

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

    document.getElementById("gameScreen").style.display = "none";

    document.getElementById("resultScreen").style.display = "block";

    document.getElementById("finalScore").innerHTML =
        `${questions.length}問中 ${score}問正解！`;

    if (score === 10) {

    document.getElementById("rank").innerHTML =
        "🏆 Sランク";

}

else if (score >= 8) {

    document.getElementById("rank").innerHTML =
        "🥇 Aランク";

}
else {

    document.getElementById("rank").innerHTML =
        "😊 Bランク";

}

    return;

}

    document.getElementById("result").innerHTML = "";
    document.getElementById("comment").innerHTML = "";

answered = false;

    showQuestion();

}


function checkAnswer(answer, buttonIndex) {

    if (answered) {
return;
}

document.getElementById("result").style.display = "block";
document.getElementById("comment").style.display = "block";

let selectedButton = document.getElementById("choice" + buttonIndex);

if (answer) {

score++;

correctSound.currentTime = 0;
correctSound.play();

selectedButton.style.backgroundColor = "#4CAF50";

        document.getElementById("result").innerHTML="⭕ 正解！";



        document.getElementById("comment").innerHTML =
questions[currentQuestion].comment;

    }

    else{

    wrongSound.currentTime = 0;
    wrongSound.play();

    selectedButton.style.backgroundColor = "#F44336";

    document.getElementById("result").innerHTML = "❌ 不正解";

    document.getElementById("comment").innerHTML =
        questions[currentQuestion].comment;

}

answered = true;

}

function restartGame() {

    currentQuestion = 0;
    answered = false;
    score = 0;

    questions.sort(() => Math.random() - 0.5);

document.getElementById("resultScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    document.getElementById("result").innerHTML = "";
    document.getElementById("comment").innerHTML = "";

document.getElementById("result").style.display = "none";
document.getElementById("comment").style.display = "none";

    showQuestion();

}

questions.sort(() => Math.random() - 0.5);

showQuestion();