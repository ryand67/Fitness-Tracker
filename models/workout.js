const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: 'Please enter a type'
        },
        name: {
            type: String,
            required: 'Please enter a name'
        }, 
        duration: {
            type: Number,
            required: 'Please enter a duration'
        },
        weight: {
            type: Number,
            required: 'Please enter a weight'
        },
        reps: {
            type: Number,
            required: 'Please enter the amount of reps'
        },
        sets: {
            type: Number,
            required: 'Please enter the amount of sets'
        }
    }]
},
{
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    })
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;