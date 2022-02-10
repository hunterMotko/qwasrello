const express = require('express');

const app = express();
const PORT = 3001;
// app.set('json spaces', 2)

app.get('/', (req, res) => {
    console.log('working!');
    res.send("ok");
})

app.get('/api/tasks', (req, res) => {
    
    let tasks = [
        {
            "id": 1,
            "name": "Task 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            "status": "open"
        },
        {
            "id": 2,
            "name": "Task 2",
            "description": "Lorem ipsum dolor sit amet",
            "status": "open"
        },
        {
            "id": 3,
            "name": "Task 3",
            "description": "ut labore et dolore magna aliqua.",
            "status": "in progress"
        },
        {
            "id": 4,
            "name": "Task 5",
            "description": "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "status": "done"
        },
        {
            "id": 5,
            "name": "Task 6",
            "description": "is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c",
            "status": "in progress"
        }
    ]
    
    res.header("Access-Control-Allow-Origin", "*");
    res.json(tasks);
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
})
