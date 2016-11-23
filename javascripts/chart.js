$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'column',
            color: ['#fff000', '#7FCB99', '#73DOB37', '#666666' ]
        },
        title: {
            text: 'Expenses per year by families'
        },
        xAxis: {
            categories: ['Vijaya', 'Tara', 'Sulekha', 'Kanti', 'Varsha']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total yearly expenditure (in Rupees)'
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
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Household',
            data: [33600, 28800, 38400, 33600, 28800]
        }, {
            name: 'Education',
            data: [4800, 0, 4000, 14000, 6000]
        }, {
            name: 'Loans',
            data: [12000, 0, 26400, 0, 0]
        }, {
            name: 'Health',
            data: [12000, 18000, 18000, 18000, 19200]
        }]
    });
});
