AutoForm.hooks({
	insertCustonCuentasForm: {

		onSuccess: function(formType, result) {
			FlowRouter.go('/cuentas/' + result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonCuentasForm: {
		onSuccess: function(formType, result) {
			FlowRouter.go('/cuentas/' + this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});

Template.cuentasFormTpl.helpers({
	clienteId: function() {
		return FlowRouter.getParam('clienteId');
	}
});

Template.cuentasListTpl.onCreated(function() {
	this.clienteId = () => FlowRouter.getParam('clienteId');


	this.autorun(() => {
		this.subscribe('cuentasPublish', this.clienteId(), null);
	});

});

Template.cuentasListTpl.helpers({
	cuentasVar: function() {
		return Cuentas.find({});
	},
	clienteId: function() {
		return FlowRouter.getParam('clienteId');
	}
});

Template.cuentasShowTpl.onCreated(function() {
  this.cuentaId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('cuentasPublish', null, this.cuentaId());
  });

});

Template.cuentasShowTpl.helpers({
	cuentaVar: function() {
	    this.cuentaId = () => FlowRouter.getParam('_id');

		return Cuentas.findOne({"_id": this.cuentaId() })
	}
});

Template.cuentasUpdateTpl.onCreated(function() {
  this.cuentaId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('cuentasPublish', null, this.cuentaId());
  });

});

Template.cuentasUpdateTpl.helpers({
	cuentaVar: function() {
	    this.cuentaId = () => FlowRouter.getParam('_id');

		return Cuentas.findOne({"_id": this.cuentaId() })
	}
});