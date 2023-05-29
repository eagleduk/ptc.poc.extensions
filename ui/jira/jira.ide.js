TW.IDE.Widgets.jira = function () {
  this.widgetIconUrl = function () {
    return "'../Common/extensions/sspoc/ui/jira/Jira.png'";
  };

  this.widgetProperties = function () {
    return {
      name: "jira",
      description: "",
      category: ["Common"],
      supportsAutoResize: !0,
      iconClass: "widgets-jira-icon",
      properties: {
        URL: {
          isBindingTarget: !0,
          isBindingSource: !1,
          defaultValue: "",
          baseType: "HYPERLINK",
          warnIfNotBoundAsTarget: !0,
        },
      },
    };
  };

  this.afterSetProperty = function (name, value) {
    return false;
  };

  this.renderHtml = function () {
    return (
      "<div class='widget-content widget-jira'></div>"
    );
  };

  this.afterRender = function () {};
};
