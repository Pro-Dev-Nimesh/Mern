const express = required('express');
const app = express();
const port = 3000;

// Middware top parse JASON requests
app.use(express.json());

//Root route
app.get('/', (req, res)=> {
    res.send('Hello world!');
});

// API route
app.get('/api', (req, res)=>{
    res.jason({message: 'Welcome to the API'});
});


// API route
app.get('/api', (req, res)=>{
    res.jason({message: 'Welcome to the API 2 New Branch'});
});


// Example of a POST rout
app.post('/api/data',(req, res)=>{
    const data = req.body;
    res.jason({message: 'Data recived', data});
});

app.listen(port, () =>{
    console.log('Server is running on http://localhost:${port}');
});