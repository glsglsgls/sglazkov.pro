const skills = [
    {sqlalchemy: 7}, 
    {pandas: 7}, 
    {fastapi: 8}, 
    {asyncio: 6}, 
    {celery: 4}, 
    {postgresql: 8}, 
    {docker: 7}, 
    {kubernetes: 5}, 
    {linux: 9}, 
    {dask: 8}, 
    {'dask ml': 5}, 
    {'scikit learn': 4}, 
    {cython: 5},
    {django: 4},
];
let shuffled_skills = skills
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const ctx = document.getElementById('myChart');
const data = {
    labels: shuffled_skills
        .map(value => (Object.keys(value)[0]))
        .map(f=>{ return f.toUpperCase(); }),
    datasets: [{
      label: '',
      data: shuffled_skills.map(value => (Object.values(value)[0])),
      fill: true,
      backgroundColor: 'rgba(45, 185, 164, 0.336)',
    //   borderColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(84, 38, 190, 0.63)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'}]
  };
const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
        line: {
            borderWidth: 3
        }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
               display: false
            },
            tooltip: {
                mode: 'nearest',
                intersect: false
            }
        }
    },
  };

new Chart(ctx, config);