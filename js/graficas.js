

var grafica1 = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { date: '2008', value: 0 },
    { date: '2009', value: 10 },
    { date: '2010', value: -7.5 },
    { date: '2011', value: 5 },
    { date: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'date',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value'],
  resize: true
});


$("#btnAceptar").on("click", function(){
    //console.log(grafica1);

    var newData = [
        { date: '2008', value: 0 },
        { date: '2009', value: 1 },
        { date: '2010', value: 0 },
        { date: '2011', value: 0 },
        { date: '2012', value: 1 }
      ];

      grafica1.setData(newData);
      var hi = prueba();
      
});

//console.log(Logic.prueba());
