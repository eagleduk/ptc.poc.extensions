TW.Runtime.Widgets.grid_library = function () {
  this.gridTypes = [
    // {
    //   type: "aggrid",
    //   render: (id) => {
    //     try {
    //       return new agGrid.Grid(document.getElementById(id), {
    //         columnDefs: [
    //           { field: "Film title", sortable: true },
    //           { field: "Released", sortable: true },
    //           { field: "Votes", sortable: true },
    //           { field: "Rating", sortable: true },
    //           { field: "Rank", sortable: true },
    //           { field: "Category", sortable: true },
    //         ],
    //         rowData: [
    //           {
    //             "Film title": "The Shawshank Redemption",
    //             Released: 1994,
    //             Votes: 678790,
    //             Rating: 9.2,
    //             Rank: 1,
    //             Category: "Thriller",
    //           },
    //           {
    //             "Film title": "The Godfather",
    //             Released: 1972,
    //             Votes: 511495,
    //             Rating: 9.2,
    //             Rank: 2,
    //             Category: "Crime",
    //           },
    //           {
    //             "Film title": "The Godfather: Part II",
    //             Released: 1974,
    //             Votes: 319352,
    //             Rating: 9.0,
    //             Rank: 3,
    //             Category: "Crime",
    //           },
    //           {
    //             "Film title": "The Good, the Bad and the Ugly",
    //             Released: 1966,
    //             Votes: 213030,
    //             Rating: 8.9,
    //             Rank: 4,
    //             Category: "Western",
    //           },
    //           {
    //             "Film title": "Pulp fiction",
    //             Released: 1994,
    //             Votes: 533848,
    //             Rating: 8.9,
    //             Rank: 5,
    //             Category: "Crime",
    //           },
    //           {
    //             "Film title": "12 Angry Men",
    //             Released: 1957,
    //             Votes: 164558,
    //             Rating: 8.9,
    //             Rank: 6,
    //             Category: "Western",
    //           },
    //         ],
    //         enableRangeSelection: true,
    //         defaultColDef: {
    //           resizable: true,
    //         },
    //       });
    //     } catch (e) {
    //       console.log(id, e);
    //     }
    //   },
    //   remove: (object) => object?.destroy(),
    // },
    // {
    //   type: "handsontable",
    //   render: (id) => {
    //     try {
    //       return new Handsontable(document.getElementById(id), {
    //         data: [
    //           ["The Shawshank Redemption", 1994, 678790, 9.2, 1, "Thriller"],
    //           ["The Godfather", 1972, 511495, 9.2, 2, "Crime"],
    //           ["The Godfather: Part II", 1974, 319352, 9.0, 3, "Crime"],
    //           [
    //             "The Good, the Bad and the Ugly",
    //             1966,
    //             213030,
    //             8.9,
    //             4,
    //             "Western",
    //           ],
    //           ["Pulp fiction", 1994, 533848, 8.9, 5, "Crime"],
    //           ["12 Angry Men", 1957, 164558, 8.9, 6, "Western"],
    //         ],
    //         rowHeaders: false,
    //         columnSorting: true,
    //         colHeaders: [
    //           "Film title",
    //           "Released",
    //           "Votes",
    //           "Rating",
    //           "Rank",
    //           "Category",
    //         ],
    //         width: "100%",
    //         height: "100%",
    //         licenseKey: "non-commercial-and-evaluation", // for non-commercial use only
    //       });
    //     } catch (e) {
    //       console.log(id, e);
    //     }
    //   },
    //   remove: (object) => object?.destroy(),
    // },
    // {
    //   type: "webix",
    //   render: (id) => {
    //     try {
    //       webix.ui({
    //         id,
    //         container: id,
    //         view: "datatable",
    //         columns: [
    //           { id: "title", header: "Film title", fillspace: true },
    //           { id: "year", header: "Released", width: 80 },
    //           { id: "votes", header: "Votes", width: 100 },
    //           { id: "rating", header: "Rating", width: 100 },
    //           { id: "rank", header: "Rank", width: 100 },
    //           { id: "category", header: "Category", width: 100 },
    //         ],
    //         select: "cell",
    //         multiselect: true,
    //         blockselect: true,
    //         clipboard: "block",
    //         scroll: false,
    //         data: [
    //           {
    //             id: 1,
    //             title: "The Shawshank Redemption",
    //             year: 1994,
    //             votes: 678790,
    //             rating: 9.2,
    //             rank: 1,
    //             category: "Thriller",
    //           },
    //           {
    //             id: 2,
    //             title: "The Godfather",
    //             year: 1972,
    //             votes: 511495,
    //             rating: 9.2,
    //             rank: 2,
    //             category: "Crime",
    //           },
    //           {
    //             id: 3,
    //             title: "The Godfather: Part II",
    //             year: 1974,
    //             votes: 319352,
    //             rating: 9.0,
    //             rank: 3,
    //             category: "Crime",
    //           },
    //           {
    //             id: 4,
    //             title: "The Good, the Bad and the Ugly",
    //             year: 1966,
    //             votes: 213030,
    //             rating: 8.9,
    //             rank: 4,
    //             category: "Western",
    //           },
    //           {
    //             id: 5,
    //             title: "Pulp fiction",
    //             year: 1994,
    //             votes: 533848,
    //             rating: 8.9,
    //             rank: 5,
    //             category: "Crime",
    //           },
    //           {
    //             id: 6,
    //             title: "12 Angry Men",
    //             year: 1957,
    //             votes: 164558,
    //             rating: 8.9,
    //             rank: 6,
    //             category: "Western",
    //           },
    //         ],
    //       });
    //     } catch (e) {
    //       console.log(id, e);
    //     }
    //   },
    //   remove: (object) => console.log(object),
    // },
    {
      type: "toast",
      render: (id) => {
        new tui.Grid({
          el: document.getElementById(id),
          data: [
            {
              "Film title": "The Shawshank Redemption",
              Released: 1994,
              Votes: 678790,
              Rating: 9.2,
              Rank: 1,
              Category: "Thriller",
            },
            {
              "Film title": "The Godfather",
              Released: 1972,
              Votes: 511495,
              Rating: 9.2,
              Rank: 2,
              Category: "Crime",
            },
            {
              "Film title": "The Godfather: Part II",
              Released: 1974,
              Votes: 319352,
              Rating: 9.0,
              Rank: 3,
              Category: "Crime",
            },
            {
              "Film title": "The Good, the Bad and the Ugly",
              Released: 1966,
              Votes: 213030,
              Rating: 8.9,
              Rank: 4,
              Category: "Western",
            },
            {
              "Film title": "Pulp fiction",
              Released: 1994,
              Votes: 533848,
              Rating: 8.9,
              Rank: 5,
              Category: "Crime",
            },
            {
              "Film title": "12 Angry Men",
              Released: 1957,
              Votes: 164558,
              Rating: 8.9,
              Rank: 6,
              Category: "Western",
            },
          ],
          scrollX: false,
          scrollY: false,
          columns: [
            {
              header: "Film title",
              name: "Film title",
              sortable: true,
            },
            {
              header: "Released",
              name: "Released",
              sortable: true,
            },
            {
              header: "Votes",
              name: "Votes",
              sortable: true,
            },
            {
              header: "Rating",
              name: "Rating",
              sortable: true,
            },
            {
              header: "Rank",
              name: "Rank",
              sortable: true,
            },
            {
              header: "Category",
              name: "Category",
              sortable: true,
            },
          ],
        });
      },
    },
  ];

  this.renderHtml = function () {
    const id = this.jqElementId;

    return `<div class='widget-content widget-grid_library'>
		
		<div id="${id}_aggrid" class="ag-theme-alpine display-hidden" style="width: 100%; height: 100%;"></div>

    <div id="${id}_handsontable" class="display-hidden" style="width: 100%; height: 100%;"></div>

		<div id="${id}_webix" class="display-hidden" style="width: 100%; height: 100%;"></div>

		<div id="${id}_toast" style="width: 100%; height: 100%;"></div>

	</div>`;
  };

  this.renderGrid = function () {
    const id = this.jqElementId;
    this.gridTypes.forEach(({ type, render }) => {
      const targetID = `${id}_${type}`;
      render(targetID);
    });
  };

  this.displayGrid = function (value) {
    const unDisplayClassName = "display-hidden";
    const id = this.jqElementId;
    this.gridTypes.forEach(({ type, remove }) => {
      const targetID = `${id}_${type}`;
      const gridElement = document.getElementById(targetID);
      if (gridElement) {
        type === value
          ? gridElement.classList.remove(unDisplayClassName)
          : gridElement.classList.add(unDisplayClassName);
      }
    });
  };

  this.afterRender = function () {
    this.renderGrid();

    const gridtype = this.getProperty("Grid-Type");
    //this.displayGrid(gridtype ? gridtype : "toast");
  };

  // this is called on your widget anytime bound data changes
  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === "Grid-Type") {
      const gridtype = updatePropertyInfo.SinglePropertyValue;
      this.setProperty("Grid-Type", gridtype);
      // this.displayGrid(gridtype);
    }
  };
};
