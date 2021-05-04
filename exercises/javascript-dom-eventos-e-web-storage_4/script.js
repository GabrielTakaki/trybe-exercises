window.onload = function() {

    const body = document.querySelector('body');
    const paragraph = document.querySelectorAll('.paragraph');
    // const divFontSize = document.getElementById('font-size');
    // const divLineHeight = document.getElementById('line-height');
    // const divFontFamily = document.getElementById('font-family');

    function pageColor(color) {
        body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    function setFontColor(color) {
        for(let index = 0; index < paragraph.length; index +=1) {
            paragraph[index].style.color = color;
        }
        localStorage.setItem('fontColor', color);
    }

    function setFontSize(size) {
        for(let index = 0; index < paragraph.length; index +=1) {
            paragraph[index].style.fontSize = size;
        }
        localStorage.setItem('fontSize', size);
    }

    function setLineHeight(height) {
        for(let index = 0; index < paragraph.length; index +=1) {
            paragraph[index].style.lineHeight = height;
        }
        localStorage.setItem('lineHeight', height);
    }

    function setFontFamily(font) {
        for(let index = 0; index < paragraph.length; index +=1) {
            paragraph[index].style.fontFamily = font;
        }
        localStorage.setItem('fontFamily', font);
    }

    const backgroundColorBtn = document.querySelectorAll('#background-color>button');
    for(let index = 0; index < backgroundColorBtn.length; index +=1) {
        backgroundColorBtn[index].addEventListener('click', (e) => {
            pageColor(e.target.innerHTML);
        });
    }

    const fontColorBtn = document.querySelectorAll('#font-color>button');
    for(let index = 0; index < fontColorBtn.length; index +=1) {
        fontColorBtn[index].addEventListener('click', (e) => {
            setFontColor(e.target.innerHTML);
        });
    }

    const fontSizeBtn = document.querySelectorAll('#font-size>button');
    for(let index = 0; index < fontSizeBtn.length; index +=1) {
        fontSizeBtn[index].addEventListener('click', (e) => {
            setFontSize(e.target.innerHTML);
        });
    }

    const lineHeightBtn = document.querySelectorAll('#line-height>button');
    for(let index = 0; index < lineHeightBtn.length; index +=1) {
        lineHeightBtn[index].addEventListener('click', (e) => {
            setLineHeight(e.target.innerHTML);
        });
    }

    const fontFamilyBtn = document.querySelectorAll('#font-family>button');
    for(let index = 0; index < fontFamilyBtn.length; index +=1) {
        fontFamilyBtn[index].addEventListener('click', (e) => {
            setFontFamily(e.target.innerHTML);
        });
    } 

    function setStorage() {
        const backgroundColor = localStorage.getItem('backgroundColor');
        if(backgroundColor) pageColor(backgroundColor);

        const fontColor = localStorage.getItem('fontColor');
        if(fontColor) setFontColor(fontColor);

        const fontSize = localStorage.getItem('fontSize');
        if(fontSize) setFontSize(fontSize);
        
        const lineHeight = localStorage.getItem('lineHeight');
        if(lineHeight) setLineHeight(lineHeight);

        const fontFamily = localStorage.getItem('fontFamily');
        if(fontFamily) setFontFamily(fontFamily);
    }
    setStorage()
}