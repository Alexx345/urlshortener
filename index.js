const express = require('express')
const connectDB = require('./db')

const app = express()

//Database connection
connectDB();

//Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 5000

app.listen(PORT || 5000, () => {
    console.log(`Server running on port ${PORT}`)
})




