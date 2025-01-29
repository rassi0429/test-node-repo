import express from "express"

const app = express()
const ENV = process.env.SAMPLE_ENV


app.get("/", (req, res) => {
    res.send("Hello, World! SAMPLE_ENV is " + ENV)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
