var qa = [
  ['「テトリス（ゲーム）」を開発したのは、日本人だ。', 2],
  ['生きている間は、有名な人であっても広辞苑に載ることはない。 ', 1],
  ['現在、2000円札は製造を停止している。', 1],
  ['パトカーは、取り締まっている最中であれば、どこでも駐車違反になることはない。', 2],
  ['昆虫の中には、口で呼吸する昆虫もいる。 ', 2],
  ['一般的に体の水分は、男性より女性のほうが多く含まれている。', 2],
  ['たとえ１ｃｍの高さであっても、地震によって起こるのは全て「津波」である。', 1],
  ['1円玉の直径は、ちょうど１ｃｍになっている。', 2],
  ['塩はカロリー０である。 ', 1],
  ['「小中学校は、PTAを作らなければならない」と法律で定められている。', 2]
];

let qCount = 0;
let correctNum = 0;

// const randomMondai = Math.floor(Math.random() * qa.length)

let randomNum = Math.floor(Math.random() * qa.length)
let randomQA = qa[randomNum];
qa.splice(randomNum, 1)

console.log(randomQA);
let randomQ = randomQA[0];
let randomA = randomQA[1];

window.onload = () => {
  let questionHead = document.getElementById('questionHead'),
      question = document.getElementById('question');
  questionHead.innerHTML = (qCount + 1) + '問目';
  question.innerHTML = randomQ;
};

function retryRedirect() {
  window.location = "/gamestart";
}

function judgement(btnNum) {
  // クリック時の正解or不正解判定
  if(randomA == btnNum){
    correctNum++;
  }

  // 10問目であれば終了　終了した時の処理をここに書く
  if(qCount == 9){
    // 要素を削除
    document.getElementById('questionElement').remove();
    
    // id kekka に答えを表示させる
    const result = document.getElementById('result');
    const retry = document.getElementById('retry');
    result.innerHTML = '10問中 ' + correctNum + ' 問正解しました！';
    retry.innerHTML = '<input type="button", id="retryButton", value="もう一度挑戦する", onclick="retryRedirect()"></input>'
  } else {
    qCount++;
    let answer = [];
    const nowShowQuestion = $('#question').text();
    answer.unshift(nowShowQuestion);
    

    // ここに次の問題へ移行する処理
    let questionHead = document.getElementById('questionHead'),
        question = document.getElementById('question');

    const randomMondai = Math.floor(Math.random() * qa.length)

    let randomNum = Math.floor(Math.random() * qa.length)
    let randomQA = qa[randomNum];
    qa.splice(randomNum, 1)
    randomQ = randomQA[0];
    randomA = randomQA[1];
    questionHead.innerHTML = (qCount + 1) + '問目';
    question.innerHTML = randomQ;
  }

  
}