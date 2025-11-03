class CurrencyConvertor {
    constructor(rates) {
        this.graph = this.buildGraph(rates);
    }
    buildGraph(ratesString){
        let rates = new Map();
        let exchanges = ratesString.split(",")
        for (let exchange of exchanges){
            let [from, to, rate] = exchange.split(":");
            from = from?.toUpperCase();
            to = to?.toUpperCase();
            if (!rates.has(from)) {
                rates.set(from, {});
            }
            if (!rates.has(to)) {
                rates.set(to, {});
            }

            rates.get(from)[to] = rate;
            rates.get(to)[from] = 1 / rate; 
        }
        return rates
    }
    convert(currencyFrom, currencyTo, amount){
        const normalizedFrom = currencyFrom?.toUpperCase();
        const normalizedTo = currencyTo?.toUpperCase()
        amount = parseFloat(amount);
        console.log('Normalized From', normalizedFrom, normalizedTo, amount);
        if(!this.graph.get(normalizedFrom) || !this.graph.get(normalizedTo) || amount < 0) {
            throw new Error("Data not proper")
        }
        let visited = {}
        return this.dfs(normalizedFrom, normalizedTo, amount, visited)

    }
    dfs(from, to, amount, visited){
        
        let queue = [{currentFrom: from, currentAmount:amount}];
        
        while (queue.length > 0){
            console.log(queue);
            const {currentFrom,currentAmount} = queue.shift();
            if(currentFrom === to){
                return currentAmount;
            }
            if(!visited[currentFrom]){
                visited[currentFrom] = true;
                let nieghBours = Object.keys(this.graph.get(currentFrom))
                
                const n = nieghBours.length
                console.log('Nieghbors', nieghBours, n);
                for (let i = n-1; i>=0; i-- ){
                    if(!visited[nieghBours[i]]){
                        queue.push({currentFrom:nieghBours[i], currentAmount: this.graph.get(currentFrom)[nieghBours[i]] * currentAmount})
                    }
                    
                }
            }
        }
        return null
    }
}

const testInputStrings = [
    // Valid Input Strings
    "USD:CAD:1.25,AUD:CAD:0.94", // Basic valid input with two currencies
    // "EUR:USD:1.10,GBP:EUR:1.25", // Multiple conversion rates
    // "USD:CAD:1.25,CAD:EUR:0.75,EUR:GBP:0.85", // Multiple exchange paths
    // "AUD:USD:0.77,USD:EUR:0.85,AUD:GBP:0.70", // Similar to above with Australian Dollar
    // "CAD:USD:0.80,GBP:AUD:1.50", // Inverse relationships
    // "JPY:USD:0.0091,USD:JPY:110", // Conversion from Yen to Dollar and back
    // "BTC:USD:50000,ETH:BTC:0.03", // Conversion rates between cryptocurrencies
    // "USD:INR:74.5,EUR:INR:88.1", // Converting from USD to INR and EUR to INR

    // // Edge Case Input Strings
    // "USD:CAD:1.25", // Test with zero amount
    // "USD:CAD:1.25", // Test with negative amount
    // "USD:CAD:1.25", // Unsupported currency: XYZ
    // "AUD:CAD:0.94", // Unsupported currency: ABC
    // "USD:CAD:1.25", // Same currency conversion
];

for (let currentString of testInputStrings) {

    const converter = new CurrencyConvertor(currentString);
    console.log(converter.graph);
    try {
        const fromCurrency = "USD";
        const toCurrency = "AUD";
        const amount = 100;
    
        const convertedValue = converter.convert(fromCurrency, toCurrency, amount);
        console.log(convertedValue);
        console.log(`${amount} ${fromCurrency} is equal to ${convertedValue.toFixed(2)} ${toCurrency}`);
    } catch (error) {
        console.error(error.message);
    }
}
