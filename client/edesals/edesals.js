AutoForm.hooks({
	insertCustonEdesalsForm: {

		onSuccess: function(formType, result) {
			FlowRouter.go('/edesals/' + result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonEdesalsForm: {
		onSuccess: function(formType, result) {
			FlowRouter.go('/edesals/' + this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});

Template.edesalsFormTpl.helpers({
	cuentaId: function() {
		return FlowRouter.getParam('cuentaId');
	}
});

Template.edesalsShowTpl.onCreated(function() {
  this.edesalId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('edesalsPublish', this.edesalId());
  });

});

Template.edesalsShowTpl.helpers({
	edesalVar: function() {
	    this.edesalId = () => FlowRouter.getParam('_id');
	    return Edesals.findOne({"_id": this.edesalId() });
	}
});
