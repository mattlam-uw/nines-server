/**
 * Nines API IO Interface for MongoDB collection defined and supported by
 * Mongoose Schema outlined in UrlGroups-Urls_Mongo.js model
 **/

// Node Module Dependencies
var mongoose = require('mongoose');

// Local Module Dependencies
var UrlGroupUrls = require('../models/UrlGroupUrls_Mongo');

/**
 * API Methods
 */

// Retrieve all URL Group - URLs relationship data
exports.getUrlGroupUrls = function(callback) {
    UrlGroupUrls.find(function(err, returnVal) {
        if (err) return next(err);
        callback(returnVal);
    });
}

/* ENABLE WHEN NEEDED

// Post a new URL Group - URL relationship
exports.postUrlGroupsUrl = function(req, callback) {
    Urls.create(req.body, function(err, returnVal) {
        if (err) return next(err);
        callback(returnVal);
    });
}

*/