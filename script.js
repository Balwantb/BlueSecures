var colors = ['#00AAFF', '#00000026', "#CCEBFD", "#222222", "#222222"];

var chBar = document.getElementById("chBar");
if (chBar) {
    new Chart(chBar, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"],
            datasets: [{
                data: [82, 65, 78, 100, 90, 70, 90, 80, 45, 100],
                backgroundColor: colors[0]
            },
            {
                data: [30, 45, 50, 42, 60, 50, 50, 50, 20, 110],
                backgroundColor: colors[1]
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    categoryPercentage: 0.5
                }]
            }
        }
    });

}

var color = ['#A5A0A0', '#CCEBFD', "#222222", "#00AAFF", "#00AAFF"];

var donutOptions = {
    cutoutPercentage: 80,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};

var chDonutData1 = {
    labels: ['Suppliers', 'Consultants', 'Others', 'Customers', 'Partners'],
    datasets: [
        {
            backgroundColor: color.slice(0, 4),
            borderWidth: 0,
            data: [20, 5, 10, 10, 10]
        }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions,
    });
}

