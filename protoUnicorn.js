'use strict';
var EventEmitter = require('events');
var ee = new EventEmitter();
var fs = require('fs');

var protoUnicorn = {}

function generateLibrary (config){
    var finalConfig = require('./config.json')
    
    if (config){
        
        if(config.allow && config.notAllow){
            ee.emit('error', new Error('[🦄] You can\'t use allow and notAllow in the same configuration'));
        }
        
        if (Array.isArray(config.allow)){
            finalConfig.lib = []
            config.allow.forEach(function(element){
                finalConfig.lib.push(element);
            })
        }
        
        if (Array.isArray(config.notAllow)){

            finalConfig.lib = finalConfig.lib.filter( function( el ) {
              return config.notAllow.indexOf( el ) < 0;
            } );

        }
        
    }
    
    console.log('[🦄 - INFO] finalConfig: ', finalConfig);

    finalConfig.lib.forEach(function(element){
        if (fs.existsSync("./lib/"+element+".js")) {
            require("./lib/"+element);
            console.log("[🦄 - INFO] Added:", element);
        } else {
            console.log("[🦄 - ERROR] No added:", element)
        }
    })
    //console.log("Math.sumar(1,5):", Math.sumar(1,5));
}

module.exports = generateLibrary;