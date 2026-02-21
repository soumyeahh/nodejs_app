const express = require("express");
const app = express();

app.use(express.json());
//items
let items = [];

app.get("/items", (req, res) => {
    res.json(items);
});

app.post("/items", (req, res) => {
    const item = req.body;
    items.push(item);
    res.json(item);
});

app.delete("/items/:id", (req, res) => {
    items = items.filter((_, i) => i != req.params.id);
    res.sendStatus(204);
});

app.listen(3001, () => {
    console.log("API running on 3001");
});