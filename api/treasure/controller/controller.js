const Treasure = require('../model/Treasure')

exports.find = async function(req, res) {
    try {
        const treasure = await Treasure.find()
        res.send(treasure)
    } catch(e) {
        res.send(e)
        console.log(e)
    }   
}

exports.findOne = async function(req, res) {
    try {
        const treasure = await Treasure.findOne({ _id: req.params._id })
        res.send(treasure)
    } catch(e) {
        res.send(e)
        console.log(e)
    }   
}

exports.create = async (req,res) => {
    let treasure = new Treasure({
        name: req.body.name,
        difficulty: req.body.difficulty,
        distance: req.body.distance,
        location: req.body.location,
        puzzle: req.body.puzzle,
        description: req.body.description,
        reward: req.body.reward
    })
    try {
        treasure = await treasure.save()
        res.send(treasure)
        console.log(treasure)
    } catch(e) {
        res.send(e)
        console.log(e)
    }
}

exports.updateOne = async (req,res) => {
    try {
        const treasure = await Treasure.updateOne({_id: req.body._id},{
            $set: req.body
        })
        res.send(treasure)
        console.log(treasure)
    } catch(e) {
        res.send(e)
        console.log(e)
    }
}

exports.addFeedback = async (req,res) => {
    try {
        const feedback = await Treasure.updateOne({_id: req.body._id},{
            $push: {feedback:req.body}
        })
        res.send(feedback)
        console.log(feedback)
    } catch(e) {
        res.send(e)
        console.log(e)
    }
}

exports.deleteOne = async (req,res) => {
    try {
        await Treasure.deleteOne({ _id: req.body._id })
    } catch(e) {
        res.send(e)
        console.log(e)
    }
}