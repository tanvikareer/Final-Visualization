$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        colors: ['#C8E2A7', '#A8D581', '#4BC387', '#3BB060', '#2F8E53', '#267341', '#1B5036', '#0D2616'],
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

     //$(function () {
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        colors: ['#C8E2A7', '#A8D581', '#4BC387', '#3BB060', '#2F8E53', '#267341', '#1B5036', '#0D2616'],   
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

$(function () {

    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('container4', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Land ownership in the village'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                
                    name: 'Own farm land',
                    y: 4.77
                }, {
                    name: 'Do not own farm land',
                    y: 0.91

                }]
            }]
        });
    });
});
