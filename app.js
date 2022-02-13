// function caseNumberUpdate(isIncreasing) {
//     const caseInput = document.getElementById(product + '-number')
//     let caseNumber = caseInput.value
//     if (isIncreasing == true) {
//         caseNumber = parseInt(caseNumber) + 1
//     }
//     else if (caseNumber > 0) {
//         caseNumber = parseInt(caseNumber) - 1
//     }
//     caseInput.value = caseNumber
//     // update case total
//     const caseTotal = document.getElementById(case-total')
//     caseTotal.innerText = caseNumber * price

// }
function updateProductNumber(product, price, isIncreasing) {
    // product increasing/product decreasing****
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    // end product in/decreasing
    productInput.value = productNumber

    // update produc total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price
    // calculateTotal
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = caseTotal + phoneTotal
    const tax = subTotal * 0.1
    const totalAmount = subTotal + tax
    //  subTotal display
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax.toFixed(2)
    document.getElementById('total-amount').innerText = totalAmount
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)

})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)

})
// phone section

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})


