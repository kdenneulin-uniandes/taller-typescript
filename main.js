import { series } from './data.js';
let tableBody = document.getElementById('contenidoTabla');
let average = document.getElementById('average');
let linkCard = document.getElementById('showcard');
let myCard = document.getElementById('myCard');
renderSeriesInTable(series);
afficheAverage(series);
function renderSeriesInTable(serie) {
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.getId()}</td>
      <td><a href=# class="bouton" data-id="${serie.getId()}">${serie.getName()}</a></td>
      <td>${serie.getChannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
        tableBody.appendChild(row);
    });
    let links = document.getElementsByClassName('bouton');
    Array.from(links).forEach(link => {
        link.addEventListener("click", (e) => afficheCard(e));
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
export function afficheCard(e) {
    let serie = series[0];
    let optionId = e.target.getAttribute('data-id');
    series.forEach((serieFor) => {
        if (serieFor.getId() == optionId) {
            serie = serieFor;
        }
    });
    let div = document.getElementById('cardContent');
    div.innerHTML = "";
    div.innerHTML = `
  <img src="${serie.getPhoto()}" alt="logo Serie" class="img-fluid max-card-img">
  <div class="text">
  <div class="title">
    <h5>${serie.getName()}</h5>
  </div>
  <div class="description">
    ${serie.getDescription()}
  </div>
  <a class="url">
    ${serie.getUrl()}
  </a>
  </div>`;
    myCard.style.display = "block";
}
;
