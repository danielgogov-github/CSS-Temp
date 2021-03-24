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

function insertDecimal(num) {
    return (num / 1000).toFixed(3);
}

console.log(insertDecimal(1000));
