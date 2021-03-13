// SERVER ROUTES GO HERE
import {jobs} from './_data.js';  // This is to pull bullshit data
import {v4 as uuidv4} from 'uuid'; // import UUID installed 'npm install uuid'
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

export function get(req, res, next){  // GET request
    res.end(JSON.stringify(jobs));
}

export function post(req, res, next){ //POST request
    const { title, salary, details } = req.body;
    const id = uuidv4();

    jobs.push({ id, title, salary, details });
    
    res.end(JSON.stringify(jobs));
}
