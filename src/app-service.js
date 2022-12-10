// the business logic file of my application

// stay tuned for updates on this application, I was not able to get prices in my local cureency naira with promises but in 
// version 1.3.0(where I used Async and Await functions) I will be displaying the price n me local currency; Naira(₦)

// export class CurrencyConvertService {
//     static convertCurrencytToNaira() {

//         // returning a promise this time around and not storing me promise in a variable
//         return fetch(`https://openexchangerates.org/api/latest.json?app_id=${process.env.CONVERSION_API_KEY}&symbols=ngn&prettyprint=false&show_alternative=false`)

//            .then(function (converterResponse) {
//             if (!converterResponse.ok) {
//                 throw Error(converterResponse.statusText);
//             }
//             return converterResponse.json();
//         })
//             .catch(function (converterError) {
//                 return converterError;
//             })


//     }
// }

// I avoided the usage of XMLHttpRequest() object and its properties; Here I used fetch


export class CryptoService {
    static getAllCoins() {

        return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)

            // fetch returns me a promise; I can then use a .then() to handle it

            .then(function (cryptoResponse) {
                // checking to see if there is an "ok" property in the API call I made
                if (!cryptoResponse.ok) {
                    throw Error(cryptoResponse.statusText);
                }
                return cryptoResponse.json();
            })
            // the semi colon should be removed above because the .then() and .catch() are communicating with each other and a semicolon tells JavaScript that's the end of the line for our code

            // handling the error thrown above in a catch block
            .catch(function (cryptoError) {
                return cryptoError;
            })
        // adding a semicolon here now tells JS that's the end of handling the response gotten




    }
}

// the class for searching crypto's
export class SearchFeature {
    static searchMeCrypto(userSearch) {

        return fetch(`https://api.coingecko.com/api/v3/search?query=${userSearch}`)

            .then(function (searchResponse) {
                if (!searchResponse.ok) {
                    throw Error(searchResponse.statusText);
                }
                return searchResponse.json();
            })

            .catch(function (searchError) {
                return searchError;
            })

    }
}