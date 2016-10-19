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

Template.contratosFormTpl.helpers({
	cuentaId: function() {
		return FlowRouter.getParam('cuentaId');
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

Template.contratosShowTpl.onCreated(function() {
  this.contratoId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('contratosPublish', null, this.contratoId());
  });

});

Template.contratosShowTpl.helpers({
	contratoVar: function() {
	    this.contratoId = () => FlowRouter.getParam('_id');

		return Contratos.findOne({"_id": this.contratoId() })
	}
});

Template.contratosUpdateTpl.onCreated(function() {
  this.contratoId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('contratosPublish', null, this.contratoId());
  });

});

Template.contratosUpdateTpl.helpers({
	contratoVar: function() {
	    this.contratoId = () => FlowRouter.getParam('_id');

		return Contratos.findOne({"_id": this.contratoId() })
	}
});

Template.contratosShort.helpers({
	edesal: function() {
		return Edesals.findOne({"contratoId": this._id});
	},

});
