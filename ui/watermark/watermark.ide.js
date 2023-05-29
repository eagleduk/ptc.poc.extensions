TW.IDE.Widgets.watermark = function () {
  this.widgetIconUrl = function () {
    return "'../Common/extensions/sspoc/ui/watermark/default_widget_icon.ide.png'";
  };

  this.widgetProperties = function () {
    return {
      name: "watermark",
      description: "",
      category: ["Common"],
      iconClass: "widgets-watermark-icon",
      properties: {
        Width: {
          baseType: "NUMBER",
          isEditable: false,
        },
        Height: {
          baseType: "NUMBER",
          isEditable: false,
        },
        Margin: {
          isEditable: false,
          addToWidgetContent: false,
          defaultValue: "0",
        },
        "Z-index": {
          isEditable: false,
          defaultValue: 9999,
        },
        SourceURL: {
          defaultValue: "",
          baseType: "IMAGELINK",
        },
        "Max-Width": {
          defaultValue: 500,
          baseType: "NUMBER",
        },
        opacity: {
          defaultValue: 0.2,
          baseType: "NUMBER",
        },
      },
    };
  };

  this.afterSetProperty = function (name, value) {
    return false;
  };
  this.renderHtml = function () {
    return "<div class='widget-content widget-watermark'><span>Water Mark</span></div>";
  };

  this.afterRender = function () {};
};
