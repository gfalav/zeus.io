Meteor.smartPublish('contratosPublish', function(cuentaId, contratoId) {

	var rta = [];

	if (contratoId) {
		contratos = Contratos.find({"_id": contratoId });
	} else {
		contratos = Contratos.find({"cuentaId": cuentaId });
	};

	rta.push(contratos);

	contratos.forEach(function(row) {
		rta.push(Edesals.find({"contratoId": row._id}));
	});

	return rta;
})