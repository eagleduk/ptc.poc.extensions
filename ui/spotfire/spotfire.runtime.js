TW.Runtime.Widgets.spotfire = function () {
  const DEFAULTURL = "https://spotfire-next.cloud.tibco.com/spotfire/wp/";
  this.renderHtml = function () {
    const id = this.jqElementId;
    return (
      "<div class='widget-content widget-spotfire'>" +
      "<script type='text/javascript'" +
      "src='https://spotfire-next.cloud.tibco.com/spotfire/wp/GetJavaScriptApi.ashx?Version=12.4'>" +
      "</script>" +
      `<div style="width: 100%; height: 100%;" id=${id}_wrapper >` +
      "</div>"
    );
  };

  this.afterRender = function () {
    this.customization = {
      showDodPanel: false,
      showStatusBar: false,
      showToolBar: false,
      showFilterPanel: false,
      showPageNavigation: false,
    };
    this.customizationInfo = new spotfire.webPlayer.Customization();
  };

  // this is called on your widget anytime bound data changes
  this.updateProperty = function (updatePropertyInfo) {
    // TargetProperty tells you which of your bound properties changed
    if (updatePropertyInfo.TargetProperty === "path") {
      const serverURL = this.getProperty("serverURL")
        ? this.getProperty("serverURL")
        : DEFAULTURL;
      const analysisPath = updatePropertyInfo.SinglePropertyValue;
      if (!analysisPath) return;

      const id = this.jqElementId;

      this.setProperty("path", analysisPath);

      new spotfire.webPlayer.Application(
        serverURL,
        this.customizationInfo,
        analysisPath
      ).openDocument(`${id}_wrapper`, "title", this.customization);
    }
  };
};
