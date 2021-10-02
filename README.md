#### examples on how to use global-countries sdk

```
 npm i global-countries
```

```js
// Require the library
const globalCountries = require('global-countries')
```

```js
// Get capital
const country  = "IRAQ"
const iraqCapital = globalCountries.getCountryCapital(country)
console.log("Capital of IRAQ is", iraqCapital.toUpperCase())
```

```js
// Get flag
const country  = "IRAQ"
const iraqFlag = globalCountries.getCountryFlag(country)
```

```js
// get call code
const country  = "IRAQ"
const iraqCallCode = globalCountries.getCountryCallCode(country)
```


