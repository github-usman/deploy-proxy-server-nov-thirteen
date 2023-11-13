const express = require('express')
const app = express();


app.get('/',(req,res)=>res.json(
    {
    message:"Hello Proxy server",
}))
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });