FlowRouter.route('/clientes', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "clientesListTpl"});
  }
});

FlowRouter.route('/clientes/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "clientesNewTpl"});
  }
});

FlowRouter.route('/clientes/:_id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "clientesShowTpl"});
  }
});