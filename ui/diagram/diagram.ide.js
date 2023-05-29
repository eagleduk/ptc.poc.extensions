TW.IDE.Widgets.diagram = function () {
  this.widgetIconUrl = function () {
    return "'../Common/extensions/sspoc/ui/diagram/default_widget_icon.ide.png'";
  };

  this.widgetProperties = function () {
    return {
      name: "diagram",
      description: "",
      category: ["Common"],
      supportsAutoResize: !0,
      iconClass: "widgets-diagram-icon",
      properties: {
        data: {
          baseType: "JSON",
          isBindingTarget: true,
          isBindingSource: false,
        },
        selectedData: {
          baseType: "JSON",
          isBindingSource: true,
          isBindingTarget: false,
        },
      },
    };
  };

  this.widgetEvents = function () {
    return {
      selectionChanged: { isVisible: true },
    };
  };

  this.afterSetProperty = function (name, value) {
    return false;
  };

  this.renderHtml = function () {
    return "<div class='widget-content widget-diagram'>" + "</div>";
  };

  this.afterRender = function () {};
};
