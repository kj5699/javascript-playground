// Adding elements
const body = document.body 
body.append("Hello world", "Bye" ); // Can take string, as weel take multiple arguments

const div= document.createElement('div');
div.innerText = 'div Text'; // Gives the output version of text, like css, sisplay,i.e how it displays,
div.textContent = "Hello World"; // the actual text inside the tags, incluing spaces , indentations
body.appendChild(div) // Can take only HTML element, and one child at a time
