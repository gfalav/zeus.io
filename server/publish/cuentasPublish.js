Meteor.publish('cuentasPublish', function(clienteId, cuentaId) {
	if (cuentaId) {
		console.log("cuenta");
		return Cuentas.find({"_id": cuentaId});
	} else {
		console.log("cliente");
		return Cuentas.find({"clienteId": clienteId})
	}
})