TW.Runtime.Widgets.jira = function () {
  this.runtimeProperties = function () {
    return {
      needsDataLoadingAndError: !0,
      borderWidth: 1,
    };
  };

  this.renderHtml = function () {
    const id = this.jqElementId;
    return (
      "<div class='widget-content widget-jira'>" +
      `<iframe id=${id}_wrapper class='widget-jira-frame' src='' width=100% height=100% frameborder='0'></iframe>` +
      "</div>"
    );
  };

  this.afterRender = function () {};

  // this is called on your widget anytime bound data changes
  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === "URL") {
      const src = updatePropertyInfo.SinglePropertyValue;

      if (!src) {
        document.getElementById(`${id}_wrapper`).src = "";
      } else if (!src.startsWith("http")) {
        document.getElementById(`${id}_wrapper`).src = "";
      } else {
        this.setProperty("URL", src);

        const id = this.jqElementId;

        document.getElementById(`${id}_wrapper`).src = src;
      }
    }
  };
  this.beforeDestroy = function (t) {
    try {
    } catch (e) {}
  };
};
