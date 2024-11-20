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

turnGreen.innerText
'one'
turnGreen.innerText = 'four'
'four'


const list = document.querySelectorAll('li')
undefined
list
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()length: 1name: "forEach"arguments: (...)caller: (...)[[Prototype]]: ƒ ()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const arr = [1,2,3,4]
undefined
arr
// (4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
list.style.color = 'red'
// VM344:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM344:1
list[0].style.color = 'red'
'red'
const myH1 = document.querySelectorAll('h1')
undefined
myH1
// NodeList [h1#title.heading]0: h1#title.headingaccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}autocapitalize: ""autofocus: falsebaseURI: "https://fluffy-dollop-97gpw66rgx6c7695-3000.app.github.dev/js/"childElementCount: 1childNodes: NodeList(2) [text, span]children: HTMLCollection [span]classList: DOMTokenList ['heading', value: 'heading']className: "heading"clientHeight: 37clientLeft: 0clientTop: 0clientWidth: 765contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: spanhidden: falseid: "title"inert: falseinnerHTML: "Document Object Model <span style=\"display: none;\">test text</span>"innerText: "Document Object Model"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: spanlastElementChild: spanlocalName: "h1"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2nextSibling: textnodeName: "H1"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 37offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 21offsetWidth: 765onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<h1 id=\"title\" class=\"heading\">Document Object Model <span style=\"display: none;\">test text</span></h1>"outerText: "Document Object Model"ownerDocument: documentparentElement: divparentNode: divpart: DOMTokenList [value: '']prefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 37scrollLeft: 0scrollTop: 0scrollWidth: 765shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H1"textContent: "Document Object Model test text"title: ""translate: truevirtualKeyboardPolicy: ""[[Prototype]]: HTMLHeadingElement(...)length: 1[[Prototype]]: NodeList
myH1.style.color = 'green'
// VM597:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM597:1
myH1[0].style.color = 'green'
'green'
myH1[1].style.color = 'blue'
// VM806:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
//     at <anonymous>:1:9

list
NodeList(3) [li, li, li]
list.forEach(function (l) {
    l.style.backgroundColor = 'purple'
})
undefined

const classList = document.getElementsByClassName('list-item')
undefined
classList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollection
Array.from(classList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

classList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item] 
Array.from(classList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item] 
Array.from(classList).forEach(function(li){
    li.style.color = 'orange'
})
undefined
