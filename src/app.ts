import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    
    res.json({message: 'bonjour'});
})

app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});