const order1 = {
  customer : {
      name: 'Alice',
      phone: 123
  },
  cart: {
      product : 'Rice',
      quantity: 10,
      unitPrice: 5,
      totalPrice: 50
  },
  total : 50,
  paid: 50,
  due: 0
}

const order2 = {
  customer : {
      name: 'Bob',
      phone: 124
  },
  cart: {
      product : 'Bread',
      quantity: 15,
      unitPrice: 10,
      totalPrice: 150
  },
  total : 150,
  paid: 100,
  due: 50
}

const orders = [order1, order2]

// total customers

const customers = orders.map((order) => order).map((customer) => customer.customer.name)

console.log(customers.length)

for(let customer of customers) {
  console.log(`Customer name : `, customer)
}

// calculate total orders amount 

const orderAmountList = orders.map((order) => order).map((ord) => ord.total

)

console.log(orderAmountList)

const totalAmount = orderAmountList.reduce((sum, current) => sum + current, 0)
console.log(totalAmount)

// calculate total paid amount 
const totalPaidAmount = orders.map((order) => order).map((ord) => ord.paid).reduce((sum, current) => sum + current, 0)

console.log(totalPaidAmount)

// average order amount 

console.log(totalPaidAmount/orderAmountList.length)

// item wise sale

const itemWiseSale = orders.map((order) => order).map((items) =>
  items.cart
)

console.log(itemWiseSale)

for(let item of itemWiseSale) {
  console.log(item.product + " : " + item.quantity)

}