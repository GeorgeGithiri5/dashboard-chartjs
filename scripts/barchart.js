new Chart(document.getElementById('barchart'),{
    type: 'bar',
    data: {
        labels: ["Bwm","Volvo","Subaru","Prado","Harrier","Mistubish","Probox","Audi","Range"],
        datasets: [
            {
                data: [4500000,800000,1400000,5000000,3400000,780000,500000,6000000,4000000],
                backgroundColor: ["#67bbdd","#45ffcc","#ccee22","#5489aa","#78ff34","#ddd","#45ffcc","#ccee22","#5489aa"]
            }
        ]
    },
    options: {
        legend:{
            display: false
        },
        title:{
            display: true,
            text: "Car Prices Distribution"
        }
    }
})