let invoice = {
    name : "Nicolas",
    age : 24,
    products : {
        0 : ["Mouse 2xwm", 29.00],
        1 : ["Taclado mecânico", 129.99],
        2 : ["Monitor", 899.99]


    }
}

function generateIvoice(invoice) {
    console.log(`O comparador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------")

    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(`-${productsName}: R$ ${productsPrice}`)
    }      
}

generateIvoice(invoice)