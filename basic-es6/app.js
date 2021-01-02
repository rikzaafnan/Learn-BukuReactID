// arrow function

// const getPrice = (a, b) => {
//     return a+b;
// }

// console.log(getPrice(1,2))

// reduce
const cart = [
    {id:1, name:'Buku', qty:5, price:7000},
    {id:2, name:'Rautan', qty:2, price:4000},
    {id:3, name:'Pensil', qty:1, price:2000},
]

const totalBelanja = cart.reduce((total, item) => {

    return total + (item.qty * item.price)

}, 0)

console.log(totalBelanja)