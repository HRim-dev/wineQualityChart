$(function () {
	let data;
	let error;
	let url = "/highchart_pilot/restex3";	
	$('#btn1').click(function(){
		//ajax 통신
		$.ajax({
			url: "/highchart_pilot/restex3",
			dataType:'json',
			success:function(data){
				//$.each(data,function(index,item){
				//	alert(item.key+":"+item.value);
				//});
				for(key in data){
					console.log(data[key].maximum);
					console.log(data[key].count);
				}
				chart(data);
			},
			error: function(e){
				//에러
				error=e;
				alert('ajax 통신 오류')
			}
		});
	});
});

function chart(data) {
	
	Highcharts.chart('container', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: '알코올 도수별 분석차트'
	    },
	    subtitle: {
	        text: '각 도수 범위을 클릭하시면 해당 도수범위에 대한 와인 등급 비율 비교차트를 보실 수 있습니다.'
	    },
	    accessibility: {
	        announceNewData: {
	            enabled: true
	        }
	    },
	    xAxis: {
	        type: 'category'
	    },
	    yAxis: {
	        title: {
	            text: 'Total percent wine count'
	        }

	    },
	    legend: {
	        enabled: false
	    },
	    plotOptions: {
	        series: {
	            borderWidth: 0,
	            dataLabels: {
	                enabled: true,
	                format: '{point.y:.1f}%'
	            }
	        }
	    },

	    tooltip: {
	        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
	    },

	    series: [
	        {
	            name: "alcohol",
	            colorByPoint: true,
	            data: [
	                {
	                    name: data[0].maximum,
	                    y: data[0].count,
	                    drilldown: "nine"
	                },
	                {
	                	name: data[1].maximum,
	                    y: data[1].count,
	                    drilldown: "nineFive"
	                },
	                {
	                	name: data[2].maximum,
	                    y: data[2].count,
	                    drilldown: "ten"
	                },
	                {
	                	name: data[3].maximum,
	                    y: data[3].count,
	                    drilldown: "elev"
	                },
	                {
	                	name: data[4].maximum,
	                    y: data[4].count,
	                    drilldown: "twelv"
	                }
	            ]
	        }
	    ],
	    drilldown: {
	        series: [
	            {
	                name: "알코올 9.5도 미만",
	                id: "nine",
	                data: [
	                    [
	                        "3등급",
	                        0.7
	                    ],
	                    [
	                        "4등급",
	                        4.0
	                    ],
	                    [
	                        "5등급",
	                        67.7
	                    ],
	                    [
	                        "6등급",
	                        26.9
	                    ],
	                    [
	                        "7등급",
	                        0.7
	                    ],
	                    [
	                        "8등급",
	                        0
	                    ]
	                ]
	            },
	            {
	                name: "9.5도~10도 미만",
	                id: "nineFive",
	                data: [
	                	[
	                        "3등급",
	                        1.0
	                    ],
	                    [
	                        "4등급",
	                        3.1
	                    ],
	                    [
	                        "5등급",
	                        64.0
	                    ],
	                    [
	                        "6등급",
	                        29.2
	                    ],
	                    [
	                        "7등급",
	                        2.3
	                    ],
	                    [
	                        "8등급",
	                        0.3
	                    ]
	                ]
	            },
	            {
	                name: "10도 이상 11도 미만",
	                id: "ten",
	                data: [
	                	[
	                        "3등급",
	                        0.7
	                    ],
	                    [
	                        "4등급",
	                        2.9
	                    ],
	                    [
	                        "5등급",
	                        36.7
	                    ],
	                    [
	                        "6등급",
	                        48.5
	                    ],
	                    [
	                        "7등급",
	                        11.1
	                    ],
	                    [
	                        "8등급",
	                        0.2
	                    ]
	                ]
	            },
	            {
	                name: "11도 이상 12도 미만",
	                id: "elev",
	                data: [
	                	[
	                        "3등급",
	                        0.3
	                    ],
	                    [
	                        "4등급",
	                        4.6
	                    ],
	                    [
	                        "5등급",
	                        18.7
	                    ],
	                    [
	                        "6등급",
	                        50.5
	                    ],
	                    [
	                        "7등급",
	                        23.6
	                    ],
	                    [
	                        "8등급",
	                        2.3
	                    ]
	                ]
	            },
	            {
	                name: "12도 이상",
	                id: "twelv",
	                data: [
	                	[
	                        "3등급",
	                        0
	                    ],
	                    [
	                        "4등급",
	                        1.2
	                    ],
	                    [
	                        "5등급",
	                        7.4
	                    ],
	                    [
	                        "6등급",
	                        45.1
	                    ],
	                    [
	                        "7등급",
	                        40.7
	                    ],
	                    [
	                        "8등급",
	                        5.6
	                    ]
	                ]
	            }
	        ]
	    }
	});
}