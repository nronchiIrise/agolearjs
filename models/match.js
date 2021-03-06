var validator = require('validator');
var mongoose = require('mongoose');
var GoalSchema = require('./goal').GoalSchema;
var IncidentSchema = require('./incident').IncidentSchema;

var MatchSchema = new mongoose.Schema({
    start_datetime     : {type: Date, default: Date.now },
    winner	     		: {type: mongoose.Schema.ObjectId, ref: 'Team' },
    local_team     		: {type: mongoose.Schema.ObjectId, ref: 'Team' },
    visitor_team	 	: {type: mongoose.Schema.ObjectId, ref: 'Team' },
    local_team_goals  	: [GoalSchema],
    visitor_team_goals	: [GoalSchema],
    turn     			: {type: mongoose.Schema.ObjectId, ref: 'Turn' },
    incidents			: [IncidentSchema]
    mvp     			: {type: mongoose.Schema.ObjectId, ref: 'Player' },
    //Players who assisted to the match
    local_team_players  : [{type: mongoose.Schema.ObjectId, ref: 'Player' }],
    visitor_team_players: [{type: mongoose.Schema.ObjectId, ref: 'Player' }],
    referees			: [RefereeSchema]
    matchday   			: {type: mongoose.Schema.ObjectId, ref: 'Matchday' },
    played				: {
               				 type: Boolean
               			 },
    parent              : {type: mongoose.Schema.ObjectId, ref: 'Match' },                   
	created		    	: {type: Date, default: Date.now },
	modified			: {type: Date, default: Date.now }
});

exports.MatchModel = mongoose.model('Match', MatchSchema);