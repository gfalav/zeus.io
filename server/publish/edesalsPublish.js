Meteor.publish('edesalsPublish', function(edesalId) {
	var auxi =  Edesals.find({"_id": edesalId});
})