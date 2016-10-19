Meteor.publish('cuentasPublish', function(clienteId, cuentaId) {
	if (cuentaId) {
		return Cuentas.find({"_id": cuentaId});
	} else {
		return Cuentas.find({"clienteId": clienteId})
	}
})