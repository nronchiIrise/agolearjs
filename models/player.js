var validator = require('validator');
var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
	name	: { 
				type: String,
				trim: true,
				required:true,
				validate : [
                     function(v) { return validator.isAlpha(v); },
                     'Nombre invalido, no se aceptan numeros ni simbolos'
                 	]
                },
    lname	: { 
				type: String,
				trim: true,
				required:true,
				validate : [
                     function(v) { return validator.isAlpha(v); },
                     'Nombre invalido, no se aceptan numeros ni simbolos'
                 	]
                },
	dni	: { 
				type: String,
				trim: true,
				required:true,
				validate : [
                     function(v) { return validator.isNumeric(v); },
                     'El dni solo debe estar compuesto por numeros'
                 	]
                },
    email	: { 
    			type: String, 
    			required: true,
    			validate : [
                     function(v) { return validator.isEmail(v); },
                     'Email inválido'
                 	]
    		},
    phone	: { 
				type: String,
				trim: true,
				required:true,
				validate : [
                     function(v) { return validator.isAscii(v); },
                     'Telefono invalido'
                 	]
                },
    birthdate   : { type: Date, required: true},
    address	: { 
				type: String,
				trim: true,
				validate : [
                     function(v) { return validator.isAscii(v); },
                     'Dirección invalido'
                 	]
                },
    blood_type : { 
                type: String,
                trim: true,
                validate : [
                     function(v) { return validator.isLength(v, 1 , 5); },
                     'Grupo sanguíneo debe tener entre uno y 5 caracteres'
                    ]
                },
	created    	: {type: Date, default: Date.now },
	modified	: {type: Date, default: Date.now }
});

exports.PlayerModel = mongoose.model('Player', PlayerSchema);