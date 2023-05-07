const quiz=[
  {
    qestion:'appleが出しているOSの名称は？',
    answers:['Windos','Linux','macos','Android'],
    correct:'macos'
  },{
    qestion:'ファイナルファンタジーⅦの主人公の名前は？',
    answers:['フリオニール','クラウド','ティーダ','セシル'],
    correct:'クラウド'
  },{
    qestion:'日本の家電量販店 店舗数ランキング１は？',
    answers:['ヨドバシカメラ','ビックカメラ','ケーズデンキ','ヤマダ電機'],
    correct:'ヤマダ電機'
  }
]

const quizLength=quiz.length
let quizIndex=0
let score=0

const $button=document.getElementsByTagName('button');
const buttonLength=$button.length

//クイズの問題文、選択肢を定義
const setupQuiz=()=>{
  document.getElementById('js-question').textContent=quiz[quizIndex].qestion
  let buttonIndex = 0
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz()

//
const clicklHandler=(e)=>{
  if(quiz[quizIndex].correct===e.target.textContent){
    window.alert('正解')
    score++
  }else{
    window.alert('不正解')
  }
quizIndex++

if(quizIndex<quizLength){
  setupQuiz()
}else{
  window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です！')
}
}

//ボタンをクリックしたら正誤判定
let handlerIndex=0
while(handlerIndex<buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clicklHandler(e)
  })
  handlerIndex++
}


