var express = require('express');


var mongoose = require('mongoose');
var baucis = require('baucis');
//var swagger = require('baucis-swagger');

// __Main Program__

// Connect to the Mongo instance
//mongoose.connect('mongodb://192.168.1.107/aAa-BaUcIs-ExAmPlE-AaA');

// Create a Mongoose schema
//var Quiz = new mongoose.Schema({ Title: String, initialTime: Number,
//                               Answers :  [{ 'ID': Number, 'Answer' : String, 'Clue' : String, 'SubQuizzes' : [String] }],
//                               Rankings: [{ 'ID' : Number, 'User' : String, 'Score': Number }],
//                               Subquizzes : [ {
//            'Name' : String,
//            'Display' : String,
//            'TimeReward': Number }
//        ]
//                               });
//
// Note that Mongoose middleware will be executed as usual
//Quiz.pre('save', function (next) {
//  console.log('A quiz was saved to Mongo: %s.', this.get('Title'));
//  next();
//});
//
// Register the schema
//mongoose.model('quiz', Quiz);

// Create dummy data
//var quiz = {
//        'Title' : 'Baseball Home Runs by First Letter',
//        'Answers' : [
//            { 'ID': 1, 'Answer' : 'Hank Aaron', 'Clue' : '755', 'SubQuizzes' : ['top-1'] },
//            { 'ID': 2, 'Answer' : 'Babe Ruth', 'Clue' : '714' },
//            { 'ID': 3, 'Answer' : 'Willie Mays', 'Clue' : '660' },
//            { 'ID': 4, 'Answer' : 'Sammy Sosa', 'Clue' : '606' }
//        ],
//        'Rankings' : [
//            { 'ID' : 1, 'User' : 'darinh', 'Score': 70 },
//            { 'ID' : 2, 'User' : 'kirbykyle', 'Score': 68 },
//            { 'ID' : 3, 'User' : 'kthejoker', 'Score': 64 }
//        ],
//        'Subquizzes' : [ {
//            'Name' : 'top-1',
//            'Display' : 'Top 1 Hitters',
//            'TimeReward': 30 }
//        ]
//        
//        };

// Clear the database of old vegetables
//mongoose.model('quiz').remove(function (error) {
//  if (error) throw error;

  // Put the fresh vegetables in the database
  //mongoose.model('quiz').create(quiz, function (error) {
   // if (error) throw error;

    // Create the API routes
    //baucis.rest('quiz');

    // Create the app and listen for API requests
    var app = express();
    //app.use('/api', baucis());
    app.use(express.static(__dirname + '/src'));
    app.listen(5000);

    //console.log('Server listening on port 5000.');
 // });
//});

