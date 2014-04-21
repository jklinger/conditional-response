var fb = require('./fb');

exports.subscribe = function subscribe(eventId, userId, friendIds) {
	fb.subscribe(eventId, userId);
};

exports.unsubscribe = function unsubscribe(eventId, userId) {
	fb.unsubscribe(eventId, userId);
};

exports.updateEvent = function updateEvent(eventId) {
	db.allUsersForEvent(eventId, checkEvent);
};

function checkEvent(eventId, userId) {
	changeResponse(eventId, userId, wantToGo(eventId, userId));
};

function wantToGo(eventId, userId) {
	// check for circular references when multiple people use our service for a given event
	if (db.hasFeedbackLoopForEvent(eventId, userId)) {
		return true;
	}
	
	// check event status for each friend indicated in the conditional response
	// (not written yet)
}

function changeResponse(eventId, userId, response) {
	fb.rsvp(eventId, userId, response ? 'going' : 'maybe');
}
