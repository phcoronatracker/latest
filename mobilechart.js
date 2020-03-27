var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
let date = (months[today.getMonth()]) + ' ' +today.getDate() + ' - ' + h + ":" + m + ":" + s;
let title = 'Confirmed COVID-19 Cases as of: ' + date;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
}

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['March 1', '8', '15', '22', '25', '26', '27'],
        datasets: [{
            label: 'Number of Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(255, 255, 255)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointRadius: 4,
            data: [3, 10, 140, 462, 636, 707, 803]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: title,
            fontColor: 'white',
            fontFamily: 'Arial',
            fontSize: 12
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white',
                    fontSize: 12
                },
                gridLines: {
                    display: true,
                    color: "#6d727a"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
                gridLines: {
                    display: true,
                    color: "#6d727a",
                    fontSize: 12
                }
            }]
        }
    }
});
