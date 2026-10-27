const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/victoria', (request, response)=>{
    response.json({message: 'Holi desde mi app vhfg'})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
