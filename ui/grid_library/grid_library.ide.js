TW.IDE.Widgets.grid_library = function () {
  this.widgetIconUrl = null;

  this.widgetProperties = function () {
    return {
      name: "Grid library",
      description: "",
      category: ["Common"],
      supportsAutoResize: true,
      iconClass: "widgets-grid-icon",
      properties: {
        "Grid-Type": {
          baseType: "STRING",
          defaultValue: "grid type",
          isBindingTarget: true,
          defaultValue: "handsontable",
          selectOptions: [
            // {
            //   value: "aggrid",
            //   text: "AG Grid",
            // },
            {
              value: "handsontable",
              text: "Handsontable Grid",
            },
            // {
            //   value: "webix",
            //   text: "Webix Grid",
            // },
          ],
        },
      },
    };
  };

  this.afterSetProperty = function (name, value) {
    return false;
  };

  this.renderHtml = function () {
    return "<div class='widget-content widget-grid_library'></div>";
  };

  this.afterRender = function () {};
};
