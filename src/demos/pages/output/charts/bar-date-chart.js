var d = [ [1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636]];

$('#barDate').chart(
  {
    data: [
      {
        bars: {show: true},
        data: d
      }
    ],
    xaxis:{mode:'time'},
    yaxis: {axisLabel: 'Motor vehicles per 1000 people'},
    ytype: 'number',
    xtype: 'date',
    charttype: 'bar'
  }

);
