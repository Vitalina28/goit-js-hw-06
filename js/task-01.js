const list = document.querySelector('#categories');
console.log("Number of categories: ", list.children.length);

const items = list.querySelectorAll('.item');
items.forEach(item => {
    console.log("Category: ", item.querySelector('h2').textContent);
    console.log("Elements: ", item.querySelectorAll('li').length);
})