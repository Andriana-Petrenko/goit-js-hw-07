const list = document.querySelector('#categories');
const listItems =list.children;
console.log(`Number of categories: ${listItems.length}`);
Array.from(listItems).forEach(li=> {
    const firstItem = li.firstElementChild;
    const lastItemChildren =li.lastElementChild.children;
    console.log(`Category: ${firstItem.innerHTML}`);
    console.log(`Elements: ${lastItemChildren.length}`);
});
    



