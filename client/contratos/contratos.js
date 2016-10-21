AutoForm.hooks({
	insertCustonContratosForm: {

		onSuccess: function(formType, result) {
			FlowRouter.go('/contratos/' + result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonContratosForm: {
		onSuccess: function(formType, result) {
			FlowRouter.go('/contratos/' + this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});

Template.contratosListTpl.onCreated(function() {
	this.cuentaId = () => FlowRouter.getParam('cuentaId');


	this.autorun(() => {
		this.subscribe('contratosPublish', this.cuentaId(), null);
	});

});

Template.contratosListTpl.helpers({
	contratosVar: function() {
		return Contratos.find({});
	},
	cuentaId: function() {
		return FlowRouter.getParam('cuentaId');
	}
});

Template.contratosShort.helpers({
	edesal: function() {
		return Edesals.findOne({"contratoId": this._id});
	},

});
