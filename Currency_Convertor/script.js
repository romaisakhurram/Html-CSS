
const currency = {
    USD:1, //base 
    EUR:0.91,
    GBP:0.77,
    IND:83.99,
    PKR:278.42,
    AUD:1.50,
    CAD:1.36,
};


document.getElementById("Convertor-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let fromCurrency = document.getElementById("from").value; //exchange rate
    let toCurrency = document.getElementById("to").value; // exchange rate
    let amount = document.getElementById("amount").value;

    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;

    document.getElementById("result").textContent = `Converted Amount:${Math.round(convertedAmount)}`;
});
