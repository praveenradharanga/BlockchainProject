let axios = require("axios");
const coinModel = require("../model/cryptoModel");



let getCrypto = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: "http://api.coincap.io/v2/assets",
            headers: {
                Authorization: "Bearer 5f6ea31d-9790-474c-ac7d-14b3e1410705",
            }
        }

        let result = await axios(options)
        let datels = result.data
        
        let coins = datels.data

        let coinarr = coins.map(a => {
            return {
                symbol: a.symbol,
                name: a.name,
                marketCapUsd: a.marketCapUsd,
                priceUsd: a.priceUsd,
                changePercent24Hr: a.changePercent24Hr
            }
        })
        coinarr = coinarr.sort((a, b) => {
            a.changePercent24Hr - b.changePercent24Hr
        })

        for (let i = 0; i < 100; i++) {
            await coinModel.create(coinarr[i])
        }

        let sortedCoins = await coinModel.find()
        return res.status(200).send({ status: true, msg: sortedCoins })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ msg: err.message })
    }
}


module.exports = { getCrypto }