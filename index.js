// JS
// var pdf = new jsPDF();
// pdf.addHTML(document.querySelectorAll('.wrapper'), function () {
//     pdf.save('Test.pdf');
// });

// let buttonRotate = document.querySelector('.rotate');
// let circle = document.querySelector('.circle');
// let circleInfo = document.querySelector('.circle-info');
// let rotate = 0;
// let rotateStep = 40;

// buttonRotate.addEventListener('click', function() {
//     rotate += rotateStep;
//     circle.style.transform = 'rotate('+ rotate +'deg)';
//     circleInfo.style.transform = 'rotate(-'+ rotate +'deg)'
// });

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(250,174,50,1)');   
gradient.addColorStop(1, 'rgba(250,174,50,0)');
// backgroundColor: gradient,
