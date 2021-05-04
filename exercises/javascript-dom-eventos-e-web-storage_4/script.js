window.onload = function() {

    const body = document.querySelector('body');
    const paragraph = document.querySelectorAll('.paragraph');
    const divFontSize = document.getElementById('font-size');
    const divLineHeight = document.getElementById('line-heoght');
    const divFontFamily = document.getElementById('font-family');

    function pageColor(color) {
        body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    function fontColor(color) {
        for(let index = 0; index < paragraph.length; index +=1) {
            paragraph[index].style.backgroundColor = color;
        }
        localStorage.setItem('fontColor', color);
    }

    function fontSize(size) {
        for(let index = 0; index < divFontSize.length; index +=1) {
            paragraph[index].style.fontSize = size;
        }
        localStorage.setItem('fontSize', size);
    }

    function lineHeight(height) {
        for(let index = 0; index < divLineHeight.length; index +=1) {
            divLineHeight[index].style.lineHeight = height;
        }
        localStorage.setItem('lineHeight', height);
    }

    function fontFamily(font) {
        for(let index = 0; index < divFontFamily.length; index +=1) {
            divFontFamily[index].style.fontFamily = font;
        }
        localStorage.setItem('fontFamily', font);
    }

    const backgroundColorButtons = document.querySelectorAll('#background-color>button');
    for(let index = 0; index < backgroundColorButtons.length; index +=1) {
        backgroundColorButtons[index].addEventListener('click', (e) => {
            pageColor(e.target.innerHTML);
        });
    }
}