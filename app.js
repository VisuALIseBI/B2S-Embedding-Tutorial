console.log("Back to School!");
let viz;

// Create a variable to store the viz Container
// Create a variable to store the dashboard options
// Create a variable to store the URL of our dashboard

const vizContainer = document.getElementById("vizContainer");

const option = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

const url =
  "https://public.tableau.com/views/KPIDashboardWOW2022w31/KPIDashboard?";

function initViz() {
  viz = new tableau.Viz(vizContainer, url, option);
}

// Listereners go here
document.addEventListener("DOMContentLoaded", initViz);

// Buttons go here
//PDF
const exportpdfbutton = document.getElementById("exportPDF");

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

exportpdfbutton.addEventListener("click", exportPDFfunction);

//PowerPoint
const exportpptbutton = document.getElementById("exportPowerPoint");

function exportpptfunction() {
  viz.showExportPowerPointDialog();
}

exportpptbutton.addEventListener("click", exportpptfunction);

// Filter Function
document
  .getElementById("FilterButton")
  .addEventListener("click", applyFilterFunction);

function applyFilterFunction() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheettofilter = sheets[0];
  sheettofilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}
