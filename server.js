const express = require('express')
const app = express()
const PORT = 8000

const book = {
    'arto':{
        'id':29,
        'name': 'Arto Hellas',
        'number': '098-763221'
    },

    'bobby':{
        'id':11,
        'name': 'Bobby Johnson',
        'number': '123-456789'
    },

    'dylan':{
        'id':42,
        'name': 'Dylan Jefferson',
        'number': '000-000000'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (book[rappersName]){
        response.json(book[rappersName])
    } else {
        response.json(book['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is listening on ${PORT}! You better go catch it!`)
})