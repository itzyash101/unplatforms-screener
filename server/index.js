const express = require('express');
const app = express();
const mySQL = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const db = mySQL.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO questionnaire (question, options) VALUES (?, ?);"
    res.send('Hello World');
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM questionnaire";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const questionCount = req.body.questions.length;
    const sqlDeleteIfExists = () => {
        return new Promise((resolve, reject) => {
            db.query("DROP TABLE IF EXISTS questionnaire;", (err, res) => {
                // console.log(err);
                if(err) reject(err);
                console.log("Successfully Dropped");
                resolve(res);
            });
        });
    };
    const sqlRecreateTable = () => {
        return new Promise((resolve, reject) => {
            db.query(`CREATE TABLE questionnaire (
                qid INT NOT NULL AUTO_INCREMENT,
                question VARCHAR(500) NOT NULL,
                options VARCHAR(500) NOT NULL,
                PRIMARY KEY(qid));`, (err, res) => {
                    if(err) reject(err);
                    console.log("Successfully Recreated");
                    resolve(res);
            });
        });
    };
    const sqlInsert = (i) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO questionnaire (question, options) VALUES (?, ?);", 
                [req.body.questions[i].question,
                req.body.questions[i].options.toString()], (err, result) => {
                // console.log(err);
                if(err) reject(err);
                console.log('Successfully Inserted '+i.toString());
                resolve(res);
            });
        });
    };
    async function sequentialQueries() {
        try {
            const q1 = await sqlDeleteIfExists();
            const q2 = await sqlRecreateTable();
            for(let i=0; i<questionCount; i++) {
                const q3 = await sqlInsert(i);
            }
        }
        catch(error) {
            console.log('Error again xD');
        }
    }
    sequentialQueries();
});
app.listen(3001, () => {
    console.log("Running on Port 3001");
});