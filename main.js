import { series } from './data.js';
let tableBody = document.getElementById('contenidoTabla');
let average = document.getElementById('average');
renderSeriesInTable(series);
afficheAverage(series);
function renderSeriesInTable(serie) {
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.getId()}</td>
      <td><a href="${serie.getUrl()}"> ${serie.getName()}</a></td>
      <td>${serie.getChannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
        tableBody.appendChild(row);
    });
}
function afficheAverage(series) {
    let averageNumber = getAverageSeasons(series);
    average.innerHTML = `Seasons average: ${averageNumber}`;
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    let average = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    average = totalSeasons / series.length;
    return average;
}
// loadSeriesData; 
// document.getElementsByTagName("tbody")[0].innerHTML = tableBody.innerHTML;
