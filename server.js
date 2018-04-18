const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const model = require('./database/database.js');
app.use('/graphql', expressGraphQL({
    graphiql: true,
}))

app.get('/', (req, res)=>{
    model.getAllUsers((results)=>{
        res.send(results)
    })
})

app.listen(4000, () => {
    console.log('app listening at port 4000')
})
