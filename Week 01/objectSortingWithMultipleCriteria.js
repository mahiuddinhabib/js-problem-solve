/*
    Task: Object Sorting with Multiple Criteria
    Create an array of objects representing products with 'name', 'price', 
    and 'category' properties. Write a function to sort the array first by 
    'category' in ascending order and then by 'price' in descending order 
    within each category.
 */

const products = [
  { name: "iPad", price: 100.0, category: "Tablets" },
  { name: "iMac", price: 200.0, category: "Computers" },
  { name: "iPhone", price: 300.0, category: "Phones" },
  { name: "MacBook", price: 400.0, category: "Computers" },
  { name: "Galaxy", price: 500.0, category: "Tablets" },
  { name: "Pixel", price: 600.0, category: "Phones" },
  { name: "Fire", price: 700.0, category: "Tablets" },
];

function sortProducts(products) {
  return products.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    } else if (a.category > b.category) {
      return 1;
    } else {
      return b.price - a.price;
    }
  });
}

console.log(sortProducts(products));
