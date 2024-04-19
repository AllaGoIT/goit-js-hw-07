const elms = document.querySelector("ul#categories");
console.log(`Number of categories: ${elms.children.length}`)
const lists = document.querySelectorAll("li.item");
lists.forEach(function callback(element) {
    console.log(`Category: ${element.querySelector("h2").innerText}`);
    console.log(`Elements: ${element.querySelector("ul").children.length}`);
    
});


