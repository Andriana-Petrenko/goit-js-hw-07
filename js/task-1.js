const list = document.querySelector('#categories');
const listItems = list.children;
console.log(`Number of categories: ${listItems.length}`);

for (let li of listItems) {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`);
}

// ======VARIANT 2=====
// Array.from(listItems).forEach(li => {
//     console.log(`Category: ${li.firstElementChild.textContent}`);
//     console.log(`Elements: ${li.lastElementChild.children.length}`);
// });
    



