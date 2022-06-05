// Number of categories

const ulCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${ulCategories}`);

// Category and elements

const listUl = document.querySelectorAll(".item");


listUl.forEach((item, index) => {
    console.log(`Category: ${item.querySelector(".item h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll(".item li").length}`);
});
