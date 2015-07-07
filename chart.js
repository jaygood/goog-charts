
function drawVisualization1() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'LineChart',
    dataSourceUrl: 'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1',
    query: 'SELECT A,D WHERE D > 100 ORDER BY D',
    options: {'title': 'Countries'},
    containerId: 'visualization1'
  });
  wrapper.draw();
}

function drawVisualization2() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'ColumnChart',
    dataTable: [
      ['', 'First', 'Second', 'Troisième', 'Fourth', 'Fifth', 'Neuvième'],
      ['', 1, .2, Math.PI, 4, 3, 1.4]
    ],
    options: {title: 'Miscellaneous'},
    containerId: 'visualization2'
  });
  wrapper.draw();
}

google.setOnLoadCallback(function() {
  drawVisualization1();
  drawVisualization2();
});