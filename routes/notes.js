const uuid = require('../helpers/uuid');
const fsUtils = require('../helpers/fsUtils');
const { get } = require('http');
const Notes = require('express').Router();

// GET
Notes.get('/', (req, res) =>{
 console.info(`${req.method} Accessible Notes`);
 fsUtils.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

