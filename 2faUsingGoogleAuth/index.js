const express = require('express')
require('./db/mongoose')
const userRouter= require('./routers/user')


const app = express()
//PORT
app.listen(5000, () => {
    console.log("Listening at :5000...");
});


app.use(express.json())
app.use(userRouter)


