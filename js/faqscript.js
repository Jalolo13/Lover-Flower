let faqBtn = document.querySelectorAll('.question-block__button');
let faqAnswer = document.querySelectorAll('.question-block__answer');

for(let i =0; i < faqBtn.length; i++){
  faqBtn[i].addEventListener('click', function(e){
    faqBtn[i].classList.toggle('active');
    faqAnswer[i].classList.toggle('open')
  })
}