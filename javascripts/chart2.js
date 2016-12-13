        
        },
        title: {
            text: 'Yearly expenses of landless families'
        },
        xAxis: {
            categories: ['Varsha', 'Anita', 'Lalita', 'Sangeeta', 'Surekha', 'Kantabai']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total yearly expenditure in Rupees'
                
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -10,
            verticalAlign: 'top',
            y: 25,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Household',
            data: [28800, 12000, 48000, 28800, 38400, 33600]
        }, {
            name: 'Education',
            data: [6000, 6000, 0, 8000, 8000, 14000]
        }, {
            name: 'Loans',
            data: [0, 0, 0, 0, 26400, 0]
        }, {
            name: 'Health',
            data: [18000, 24000, 21600, 12000, 18000, 18000]
        }, {
            name: 'Weddings',
            data: [4000, 15000, 10000, 4000, 15000, 7000]
        }, {
            name: 'Festivals',
            data: [5000, 10000, 10000, 4000, 13000, 12000] 
        }, {
            name: 'Utilities',
            data: [5800, 8840, 8850, 5100, 8150, 3500]
        }, {
            name: 'Farms',
            data: [0, 0, 0, 0, 0, 0]
        }]
    });
});
