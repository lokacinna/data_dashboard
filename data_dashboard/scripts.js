// table.json
// chart.json

// if you wanted to load like 10 sets of data:
// var urlList["data/table.json", "data/chart.json"]
// then inside the doc ready -->  for var i=0;i<urlList.length;i++

$(document).ready(function(){
  // loadData("data/bicycle-crash-data-chapel-hill-region.csv");
  // loadData("data/chart.json");
  loadData();
})

function loadData(){
  //ajax request
  // onSuccess parseData(data);

  $.ajax({
    method: "GET",
    url: "googledata/google-political-ads-top-keywords-history.csv",
    dataType: "csv",
    success: parseData
  });
}

function parseData(data){
  // if data[0]"table" == "table1"{
  //   // parse data table
  //   buildTable();
  // }
  // if data[0]"chart" == "charts"{
  //   // parse chart data
  //   buildCharts();
  // }
  buildCharts();
}

function buildCharts(){
  var chart = c3.generate({
    bindto: "#chart",
    data: {
     url: 'googledata/google-political-ads-top-keywords-history.csv',
     type: 'bar'
   },
   bar: {
       width: {
           ratio: 0.5
       }
   },
  axis: {rotated : true}
});
}

function buildTable(){

}
