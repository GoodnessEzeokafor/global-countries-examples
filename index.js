const globalCountries = require('global-countries')
const country  = "IRAQ"

// get capital
const iraqCapital = globalCountries.getCountryCapital(country)

// get isoCodes
const iraqIsoCodes = globalCountries.getCountryIsoCodes(country)

//get flag
const iraqFlag = globalCountries.getCountryFlag(country)

// get call code
const iraqCallCode = globalCountries.getCountryCallCode(country)

// console.log("Capital of IRAQ is", iraqCapital.toUpperCase())
// console.log("ISO CODES of IRAQ is", iraqIsoCodes)
// console.log("IRAQ Flag", iraqFlag)
// console.log("IRAQ Call Code", iraqCallCode)

