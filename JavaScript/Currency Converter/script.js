let input = document.getElementById("input");
let toCurr = document.getElementById("to");
let fromCurr = document.getElementById("from");
let result = document.getElementById("result");

const countryList = [];
 
CountryList = fetch('https://restcountries.com/v3.1/all?fields=name,currencies,flag')
.then(Response => Response.json())
.then(data => {
    
    data.forEach(val => {
        console.log(val);
        const name = val.name?.common || "Unknown";
        const flag = val?.flag || "null";;
        const currencyCode = val.currencies ? Object.keys(val.currencies)[0] : null;
        // const short = currencyCode ? Object.keys(val.currencies)[0] : "N/A";
        const currency = currencyCode ? val.currencies[currencyCode]?.name : "N/A";
        // const flagSymbol = flag.toLowerCase();
        // const flagUrl = flagSymbol ? `https://flagcdn.com/w40/${flagSymbol}.png` : "";
        
        console.log(`${flag} ${currencyCode} - ${currency}`);
        const option1 = document.createElement("option");
        option1.value = currencyCode;
        option1.textContent = `${flag} ${currencyCode} - ${currency}`;

        const option2 = document.createElement("option");
        option2.value = currencyCode;
        option2.textContent = `${flag} ${currencyCode} - ${currency}`;
  
        toCurr.appendChild(option1);
        fromCurr.appendChild(option2);
    })
})

const convert = async() => {
    if(!input.value){
        alert ("Enter the Amount First");
        return;
    }
     const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`) ;
     const data = await response.json();

     const value = data[Object.keys(data)[1]] ;
     const ans = value[toCurr.value.toLowerCase()];
     console.log(ans);
     console.log(input.value)
    const final = (ans* parseFloat(input.value)).toFixed(3);
    console.log(final);
    result.innerText = `${input.value} ${fromCurr.value} = ${final} ${toCurr.value}`;

}