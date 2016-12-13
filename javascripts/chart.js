$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        colors: ['#fff5cb', '#eaeeb1', '#aae387', '#4BC361', '#71a994', '#657271'],
        title: {
            text: 'Yearly expenses of land owning families'
        },
        xAxis: {
            categories: ['Pramila', 'Najibai', 'Lalita', 'Suman', 'Nima', 'Pushpa']
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
            data: [33600, 33600, 28800, 48000, 24000, 24000]
        }, {
            name: 'Education',
            data: [0, 20000, 15000, 2000, 6000, 8000]
        }, {
            name: 'Loans',
            data: [72000, 32400, 26400, 42000, 26400, 26400]
        }, {
            name: 'Health',
            data: [18000, 18000, 24000, 24000, 12000, 12000]
        }, {
            name: 'Weddings',
            data: [10000, 20000, 20000, 10000, 8000, 15000]
        }, {
            name: 'Festivals',
            data: [25000, 16000, 15000, 20000, 5500, 20000] 
        }, {
            name: 'Utilities',
            data: [10600, 5100, 8230, 9350, 5100, 10050]
        }, {
            name: 'Farms',
            data: [40000, 50000, 50000, 20000, 20000, 50000]
        }]
    });
});
