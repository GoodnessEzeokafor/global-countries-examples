const globalCountries = require('global-countries')
const allCountries = globalCountries.countries()
const country  = "IRAQ"
const iraqCapital = globalCountries.getCountryCapital(country)
console.log(allCountries)
console.log("Capital of IRAQ is", iraqCapital.toUpperCase())