FlowRouter.route('/contratos/cuenta/:cuentaId', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "contratosListTpl"});
  }
});

FlowRouter.route('/contratos/cuenta/:cuentaId/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "contratosNewTpl"});
  }
});

FlowRouter.route('/contratos/:_id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "contratosShowTpl"});
  }
});

FlowRouter.route('/contratos/:_id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "contratosUpdateTpl"});
  }
});