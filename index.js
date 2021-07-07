const express = require('express')
const connectDB = require('./db')

const app = express()


const PORT = process.env.PORT || 5000
app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`)
})

connectDB();


