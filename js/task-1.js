const list = document.querySelector('#categories');
const listItems = list.children;
console.log(`Number of categories: ${listItems.length}`);

for (let li of listItems) {
    const firstItem = li.firstElementChild;
    const lastItemChildren =li.lastElementChild.children;
    console.log(`Category: ${firstItem.textContent}`);
    console.log(`Elements: ${lastItemChildren.length}`);
}

// Array.from(listItems).forEach(li => {
//     const firstItem = li.firstElementChild;
//     const lastItemChildren =li.lastElementChild.children;
//     console.log(`Category: ${firstItem.textContent}`);
//     console.log(`Elements: ${lastItemChildren.length}`);
// });
    



