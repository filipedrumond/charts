var app = new Vue({
<<<<<<< HEAD
  el: "#apkkp",
  data: {
    message: "Hello Vue!",
    items: []
=======
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      items: [{}],
      temp:[
        "",
        0.00
      ],
    }
>>>>>>> master
  },
  methods: {
    adicionarItem: function(item){
      this.items.push([parseFloat(item[0]),parseFloat(item[1])]);
    },
    generateChart: function(items){
      Highcharts.chart("grafico", {
        title: {
          text: "Gráfico gerado à partir da tabela"
        },
      
        subtitle: {
          text: "Source: FilipeDrumond@code"
        },
      
        yAxis: {
          title: {
            text: "Valor das vendas"
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
      
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 0
          }
        },
        series: [
          {
            name: "Vendas",
            data: [["A",1],["B",2],["C",2]]
          },          
        ],
      
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      });
      
    }
  }
});
