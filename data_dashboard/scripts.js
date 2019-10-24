// table.json
// chart.json

// if you wanted to load like 10 sets of data:
// var urlList["data/table.json", "data/chart.json"]
// then inside the doc ready -->  for var i=0;i<urlList.length;i++

$(document).ready(function(){
  // loadData("data/bicycle-crash-data-chapel-hill-region.csv");
  // loadData("data/chart.json");
  loadData();
});


function loadData() {
  $.ajax({
    type:"GET",
    url:"data.json",
    dataType:"json",
    success: parseData
  });
}

// function parseData() {
//
// }

function loadData() {
var chart1 = c3.generate({
  bindto: "#chart1",
    data: {
        // iris data from R
        columns: [
            ['Donald J Trump For President, Inc', 3338400],
            ['Make America Great Again Committee', 7461800],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
  });

  var chart2 = c3.generate({
      bindto: "#chart2",
      data: {
          xs: {
              setosa: 'setosa_x',
              versicolor: 'versicolor_x',
          },
          // iris data from R
          columns: [
              ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
              ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
              ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
              ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ],
          type: 'scatter'
      },
    });

    // var chart3 = c3.generate({
    //   bindto: "#chart3",
    //     data: {
    //         url: 'googledata/google-political-ads-advertiser-weekly-spend.csv',
    //         type: 'bar'
    //     }
    // });

    var chart = c3.generate({
      bindto: "#chart3",
        data: {
            json: {
                data1: [0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 5600, 600, 5800, 4900, 2700, 269100, 70400, 1900, 700, 700, 500, 700, 2100, 2900, 3800, 527800, 10700, 5500, 3800, 13100, 16000, 11400, 11800, 25400, 15200, 7000, 15300, 10500, 7600, 18700, 18000, 34800, 11700, 16200, 12800, 13000, 5600, 9400, 115200, 469200, 50600, 50000, 53000, 41400, 92000, 73900, 82200, 39700, 43000, 29200, 36800, 37500, 256500, 652900]
            }
        },
        axis: {
       x: {
           label: 'Weeks from May 2018 to October 2019'
       },
       y: {
           label: 'Money Spent in USD'
       }
   }
    });

}
