let word = '제로초'

while(true){
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
  }else {
    alert('땡! 마지막 단어로 첫 글자를 시작해주세요!')
  }
}