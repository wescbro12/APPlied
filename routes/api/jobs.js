const express = require('express');
const router = express.Router();
const job = require('../../controllers/api/jobs')

//Jobs Index-will show cards of all the diff jobs
router.get('/', job.index)

// Delete route
router.delete('/:id', job.destroy)

//Edit
router.put('/:id/edit', job.edit)

//Create new
router.post('/new', job.create)

//Show route
router.get('/:id', job.show)

module.exports = router



