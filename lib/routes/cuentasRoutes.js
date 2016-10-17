FlowRouter.route('/cuentas/cliente/:clienteId', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "cuentasListTpl"});
  }
});

FlowRouter.route('/cuentas/cliente/:clienteId/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "cuentasNewTpl"});
  }
});

FlowRouter.route('/cuentas/:_id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "cuentasShowTpl"});
  }
});

FlowRouter.route('/cuentas/:_id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "cuentasUpdateTpl"});
  }
});