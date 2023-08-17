import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const header = "Alpers Todo list";
const delBtn = 5;
const another = 2;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Initialize an empty array to store the tasks
const taskList = [];

app.get("/", (req, res) => {
    // Render the "index.ejs" template with the taskList data
    res.render("index.ejs", { taskList, header, delBtn, another });
});

app.post("/submit", (req, res) => {
    // Handle the form submission
    const newTask = req.body.newTask;
    if (newTask.trim() !== "") {
        // Only add non-empty tasks to the taskList
        taskList.push(newTask);
    }
    console.log(taskList);

    // Re-render the "index.ejs" template with the updated taskList
    res.render("index.ejs", { taskList, header, delBtn, another });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
