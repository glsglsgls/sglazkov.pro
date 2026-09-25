const skills = [
    {python: 9},
    {sql: 9},
    {postgresql: 9},
    {architecture: 8},
    {'system design': 8},
    {'distributed systems': 8},
    {microservices: 8},
    {mlops: 8},
    {'ci / cd': 9},
    {'docker / k8s': 8},
    {kafka: 7},
    {reliability: 8},
    {'team leadership': 8},
    {mentoring: 8},
    {'product thinking': 8},
    {'stakeholder communication': 7},
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