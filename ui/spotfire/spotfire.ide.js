TW.IDE.Widgets.spotfire = function () {
  this.widgetIconUrl = function () {
    return "'../Common/extensions/sspoc/ui/spotfire/2065619.jpg'";
  };

  this.widgetProperties = function () {
    return {
      name: "spotfire",
      description: "",
      category: ["Common"],
      supportsAutoResize: true,
      iconClass: "widgets-spotfire-icon",
      properties: {
        serverURL: {
          baseType: "STRING",
          // isBindingTarget: true,
        },
        path: {
          baseType: "STRING",
          isBindingTarget: true,
        },
      },
    };
  };

  this.afterSetProperty = function (name, value) {
    return false;
  };

  this.renderHtml = function () {
    return (
      "<div class='widget-content widget-spotfire'></div>"
    );
  };

  this.afterRender = function () {};
};
