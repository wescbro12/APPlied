const express = require('express');
const mongoose = require('mongoose');
const Job = require('../../models/Jobs');


module.exports = {
    index,
    destroy,
    create,
    edit,
    show
}


//Index
async function index(req, res) {
    try {
        const jobs = await Job.find({})
        res.status(200).json(jobs)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}

//Delete

async function destroy(req, res) {
    try {
        const job = await Job.findByIdAndDelete(req.params.id)
        res.status(200).json(job)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}


//Create
async function create(req, res) {
    try {
        const job = await Job.create(req.body)
        res.status(200).json(job)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}


//Edit
async function edit(req, res) {
    try {
        const job = await Job.findById(req.params.id)
        res.status(200).json(job)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}


//Show
async function show(req, res) {
    try {
        const job = await Job.findById(req.params.id) 
        res.status(200).json(job)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}