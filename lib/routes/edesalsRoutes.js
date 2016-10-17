
FlowRouter.route('/edesals/cuenta/:cuentaId/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "edesalsNewTpl"});
  }
});

FlowRouter.route('/edesals/:_id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "edesalsShowTpl"});
  }
});

FlowRouter.route('/edesals/:_id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "edesalsUpdateTpl"});
  }
});