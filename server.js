const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("99 Bottles of beer on the wall <br> <a href='/98'> take one down, pass it around </a>")
})

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles === '0') {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <br> <a href='../'> Start Over </a>`)
    } else {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <br> <a href='${req.params.number_of_bottles - 1}'> take one down, pass it around </a>`)
    }
})

app.listen(3002, () => {
    console.log('Listening on Port 3001')
})