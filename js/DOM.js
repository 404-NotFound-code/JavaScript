document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class', 'test')
undefined
document.getElementById('title').setAttribute('class', 'test heading')
undefined
const title = document.getElementById('title')
undefined
title.style.backgroundColor = 'red'
'red'
title.style.padding = '10px'
'10px'
title.style.borderRadius = "30px"
'30px'
title.innerHTML
'Document Object Model'
title.textContent
'Document Object Model'
title.innerText
'Document Object Model'

// Difference between innerText and textContext
title.innerText
'Document Object Model'
title.textContent
'Document Object Model test text'
title.innerHTML
'Document Object Model <span style="display: none;">test text</span>'

document.getElementsByClassName('heading')
// HTMLCollection [h1#title.heading, title: h1#title.heading]

document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​ 
document.querySelectorAll('h2')
// NodeList(3) [h2, h2, h2]0: h21: h22: h2length: 3   [[Prototype]]: NodeList
document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​ 
document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('input[type="password"]')
// <input type=​"password" name id>​
document.querySelector('p:first-child')
null

const myul = document.querySelector('ul')
undefined
myul.querySelector('li')
// <li>​…​</li>​
const turnGreen = myul.querySelector('li')
undefined
turnGreen.style.backgroundColor = 'green'
'green'
turnGreen.style.padding = '10px'
'10px'

