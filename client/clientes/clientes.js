AutoForm.hooks({
	insertCustonClientesForm: {

		onSuccess: function(formType, result) {
			FlowRouter.go('/clientes/'+ result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonClientesForm: {
		onSuccess: function(formType, result) {
			FlowRouter.go('/clientes/'+ this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});

Template.clientesListTpl.onCreated(function() {
  this.autorun(() => {
    this.subscribe('clientesPublish', null, null, null, null);
  });

});

Template.clientesListTpl.helpers({
	clientesVar: function() {
		return Clientes.find({});
	}
});

Template.clientesShowTpl.onCreated(function() {
  this.clienteId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('clientesPublish', this.clienteId(), null, null, null);
  });

});

Template.clientesShowTpl.helpers({
	clienteVar: function() {
	    this.clienteId = () => FlowRouter.getParam('_id');

		return Clientes.findOne({"_id": this.clienteId() })
	}
});

Template.clientesUpdateTpl.onCreated(function() {
  this.clienteId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('clientesPublish', this.clienteId(), null, null, null);
  });

});

Template.clientesUpdateTpl.helpers({
	clienteVar: function() {
	    this.clienteId = () => FlowRouter.getParam('_id');

		return Clientes.findOne({"_id": this.clienteId() })
	}
});