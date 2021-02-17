// JS
var pdf = new jsPDF();
pdf.addHTML(document.querySelectorAll('.wrapper'), function () {
    pdf.save('Test.pdf');
});
