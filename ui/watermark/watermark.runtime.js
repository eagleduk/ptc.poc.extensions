TW.Runtime.Widgets.watermark = function () {
  this.renderHtml = function () {
    const url = TW.convertImageLink(this.getProperty("SourceURL"));
    const width = this.getProperty("Max-Width");
    const opacity = this.getProperty("opacity");

    const textContent = `@media (max-width: ${width}px) {
		.widget-watermark {
			background-image: url("${url}");
			opacity: ${opacity};
		}
      }`;

    const styleEl = document.createElement("style");
    styleEl.textContent = textContent;

    const waterEl = document.createElement("div");
    waterEl.className = "widget-content widget-watermark";
    waterEl.appendChild(styleEl);

    document.querySelector("body").appendChild(waterEl);

    return "";
    /*
    return `<div class='widget-content widget-watermark'>
      <style>
      
      </style>
      </div>`;
	  */
  };

  this.afterRender = function () {};

  // this is called on your widget anytime bound data changes
  this.updateProperty = function (updatePropertyInfo) {};
};
