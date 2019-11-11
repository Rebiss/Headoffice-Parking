
export const CAR_CAUNT_D = 360;
export const CAR_CAUNT_T = 130;

export const BAR = {
    labels: ['Running', 'Swimming', 'Eating', '13','11','12'],
    datasets: [{
        data: [20, 10, 4, 2]
    }],
    options: [{
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 15,
                suggestedMax: 360
            }
        }
    }],
    backgroundColor:[
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)' 
        ]
}

export const LINE = {
    type: 'line',
    data: [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};