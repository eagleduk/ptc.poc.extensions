TW.Runtime.Widgets.diagram = function () {
  this.runtimeProperties = function () {
    return {
      supportsAutoResize: true,
      needsDataLoadingAndError: true,
    };
  };

  this.renderHtml = function () {
    const Id = this.jqElementId;
    return `<div class="widget-content widget-diagram">
	  <div id="${Id}_diagram" class="widget-kpi_diagram-diagram"></div>
      </div>`;
  };

  this.afterRender = function () {
    const widget = this;
    const Id = this.jqElementId;
    const $ = go.GraphObject.make;

    const treeOption = {
      nodeSpacing: 20,
      layerSpacing: 30,
      alignment: go.TreeLayout.AlignmentStart,
    };

    const option = {
      initialAutoScale: go.Diagram.UniformToFill,
      layout: $(go.TreeLayout, treeOption),
      allowMove: false,
      contentAlignment: go.Spot.TopLeft,
    };

    const ptc_diagram = $(go.Diagram, `${Id}_diagram`, option);

    ptc_diagram.nodeTemplate = $(
      go.Node,
      "Horizontal",
      {
        padding: new go.Margin(0, 0, 0, 0),
        isShadowed: true,
        shadowBlur: 4,
        shadowColor: "rgba(0, 0, 0, .14)",
      },
      {
        selectionAdorned: true,
        selectionChanged: (node) => {
          if (node.isSelected) {
            widget.setProperty("selectedData", node.data);
            widget.jqElement.triggerHandler("selectionChanged");
          }
          /*
          console.log("4", node.elt(0).elt(0).elt(1));
          console.log("5", node.elt(0).elt(0).elt(1).elt(0));
          console.log("6", node.elt(0).elt(0).elt(1).elt(0).elt(1));
          node.elt(0).elt(0).elt(1).elt(0).elt(1).stroke = node.isSelected
            ? "#0978ff"
            : "#646c74";
          node.elt(0).elt(0).elt(1).elt(0).elt(3).stroke = node.isSelected
            ? "#0978ff"
            : "#646c74";
          if (node.isSelected) {
            widget.setProperty("selectedData", node.data);
            widget.jqElement.triggerHandler("selectionChanged");
          }
		  */
        },
      },
      // Expand Collapsed 버튼
      $("TreeExpanderButton", {
        // 미리 정해진 변수만 사용 가능 하는듯
        "ButtonBorder.fill": "white",
        // 크기 및 위치 조정
        width: 15,
        height: 15,
        margin: new go.Margin(0, 5, 0, 0),
        alignment: go.Spot.Center,
      }),
      $(
        go.Panel,
        go.Panel.Vertical,
        {
          cursor: "pointer",
        },
        $(
          go.Panel,
          "Auto",
          {},
          $(go.Shape, "RoundedRectangle", {
            strokeWidth: 2,
            fill: null,
            stroke: "#909fb7cc",
          }),

          $(
            go.Panel,
            "Horizontal",
            {
              background: "#FFFFFF",
            },
            $(
              go.Panel,
              go.Panel.Table,
              {
                width: 170,
              },
              $(go.RowColumnDefinition, {
                row: 0,
              }),
              $(go.RowColumnDefinition, {
                row: 1,
                width: 30,
              }),
              $(
                go.Shape,
                "Rectangle",
                {
                  width: 10,
                  strokeWidth: 0,
                  stretch: go.GraphObject.Vertical,
                  rowSpan: 2,
                  alignment: go.Spot.Left,
                },
                new go.Binding("fill", "status", (status) => {
                  if (status === "normal") return "gray";
                  else if (status === "good") return "green";
                  else if (status === "warning") return "yellow";
                  else if (status === "danger") return "red";
                  else return "inherit";
                })
              ),
              $(
                go.TextBlock,
                {
                  font: "bold 14px Helvetica, bold Arial, sans-serif",
                  stroke: "#000000",
                  row: 0,
                  alignment: go.Spot.LeftCenter,
                  maxSize: new go.Size(140, NaN),
                  margin: new go.Margin(5, 0, 5, 20),
                },
                new go.Binding("text", "name")
              ),
              $(
                go.TextBlock,
                {
                  font: "bold 14px Helvetica, bold Arial, sans-serif",
                  stroke: "#000000",
                  margin: 0,
                  row: 1,
                  alignment: go.Spot.RightCenter,
                },
                new go.Binding("text", "value")
              )
            )
          )
        )
      )
    );

    ptc_diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.AvoidsNodes },
      {
        selectable: false,
      },
      $(
        go.Shape,
        // the Shape.stroke color depends on whether Link.isHighlighted is true
        new go.Binding("stroke", "isHighlighted", (h) =>
          h ? "red" : "black"
        ).ofObject(),
        // the Shape.strokeWidth depends on whether Link.isHighlighted is true
        new go.Binding("strokeWidth", "isHighlighted", (h) =>
          h ? 3 : 1
        ).ofObject()
      )
    );

    this.ptc_diagram = ptc_diagram;
  };

  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === "data") {
      const nodeDataArray = updatePropertyInfo.RawDataFromInvoke.array;
      if (!nodeDataArray) return;

      this.ptc_diagram.model = go.Model.fromJson({
        class: "go.TreeModel",
        nodeDataArray,
      });

      this.setProperty("selectedData", undefined);
    }
  };
};
