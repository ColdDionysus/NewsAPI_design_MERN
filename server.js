const express = require('express')

const app = express()



app.use(express.static(__dirname, 'public'))
const PORT = process.env.PORT || 3500


app.listen(PORT, () => {console.log(`Server Started on ${PORT}`)})