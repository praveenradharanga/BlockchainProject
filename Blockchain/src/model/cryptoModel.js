const mongoose = require("mongoose")
const crptoSchema = new mongoose.Schema({
    symbol: {
        type: String,
       
    },
    name: {
        type: String,
      
    },
    marketCapUsd: {
        type: String,
    },
    priceUsd: {
        type: String,
    },
})
module.exports = mongoose.model( 'cryptocurrency', crptoSchema)