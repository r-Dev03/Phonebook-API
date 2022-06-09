const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const phoneData = {
    "Person 1" : {
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },

    "Person 2" : {
        "id": 2,
        "name": "Bobby Johnson", 
        "number": "036-159859"
    },

    "Person 3" : {
        "id": 3,
        "name": "Leroy Jenkins", 
        "number": "018-098372"
    },

    "Unknown" : {
        "id": 0,
        "name": "unknown", 
        "number": "000-000000"
    }
}

//Read Requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/name', (req, res) => {
    const name = req.params.name.toLowercase()
    if (phoneData[name]) {
        res.json(phoneData[name])
    } else {
        res.json(phoneData["Unknown"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is listening on ${PORT}! You better go catch it!`)
})



