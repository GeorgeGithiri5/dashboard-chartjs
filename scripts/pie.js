new Chart(document.getElementById('piechart'),{
    type: 'pie',
    data: {
        labels: ["Kenya","Tanzania","Rwanda","Uganda"],
        datasets: [{
            data: [4000,6000,5444,2000],
            backgroundColor: ["#343456","#dadc45","#9bbdde","a23ffb"]
        }]
    },
    option:{
        title: {
            display: true,
            text: "Pie-Chart Car Imports East Africa"
        }
    }
})