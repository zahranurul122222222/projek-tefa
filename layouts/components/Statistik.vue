<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';

const labels=[
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
];

const data= {
    labels : labels,
    datasets: [{
        label: 'Pengunjung',
        backgroundColor: 'rgb(222,39,225 )',
        backgroundColor: [
        'rgb(217, 217, 217)',
        'rgb(217, 217, 217)',
        'rgb(217, 217, 217)',
        'rgb(217, 217, 217)',
        'rgb(217, 217, 217)',
        'rgb(217, 217, 217)',
        ],
        borderColor: 'rgb(144, 142, 248)',
        data: [8, 10, 15, 20, 15, 10, 45],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

onMounted(()=>{
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
})
</script>