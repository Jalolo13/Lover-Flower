let faqBtn = document.querySelectorAll('.question-block__button');
let faqAnswer = document.querySelectorAll('.question-block__answer');

for(let i =0; i < faqBtn.length; i++){
  faqBtn[i].addEventListener('click', function(e){
    for(let j =0; j < faqAnswer.length; j++){
      if(faqAnswer[j].classList.contains('open')){
        faqAnswer[j].classList.remove('open');
        faqBtn[j].classList.remove('active')
      }
    }
    faqBtn[i].classList.toggle('active');
    faqAnswer[i].classList.toggle('open')
  })
}