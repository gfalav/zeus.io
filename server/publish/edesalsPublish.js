Meteor.publish('edesalsPublish', function(edesalId) {
	return Edesals.find({"_id": edesalId});
})