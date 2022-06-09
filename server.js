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

    'unknown':{
        'id':42,
        'name': 'Unknown',
        'number': '000-000000'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:contactName', (request, response) => {
    const contactsName = request.params.contactName.toLowerCase()
    if (book[contactsName]){
        response.json(book[contactsName])
    } else {
        response.json(book['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is listening on ${PORT}! You better go catch it!`)
})