const express = require("express")
const router = express.Router();
const coinController = require("../controller/cryptoController")


router.get("/crypto", coinController.getCrypto )




module.exports = router;