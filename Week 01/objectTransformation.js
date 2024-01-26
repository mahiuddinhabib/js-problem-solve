/*
  Create an array of objects representing customers with 'name', 'purchases', 
  and 'loyaltyPoints' properties. Write a function to transform the array by 
  doubling the 'loyaltyPoints' of customers with more than 5 purchases.
 */

const customers = [
  {
    name: "John",
    purchases: ["phone", "car", "tv"],
    loyaltyPoints: 20,
  },
  {
    name: "Mary",
    purchases: ["tv", "phone", "laptop", "earphones", "keyboard", "mouse"],
    loyaltyPoints: 40,
  },
  {
    name: "Peter",
    purchases: ["phone", "tv"],
    loyaltyPoints: 40,
  },
];

const doubleLoyalty = (customers) => {
  customers.forEach((customer) => {
    if (customer.purchases.length > 5) {
        console.log(customer);
      customer.loyaltyPoints *= 2;
    }
  });
};

doubleLoyalty(customers);

console.log(customers);
