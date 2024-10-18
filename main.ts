import { Serie } from './Serie.js';
import { series } from './data.js';

let tableBody: HTMLElement = document.getElementById('contenidoTabla')! ;
let average: HTMLElement = document.getElementById('average')! ;

renderSeriesInTable(series);
afficheAverage(series); 

function renderSeriesInTable(serie: Serie[]): void {
  series.forEach((serie: Serie) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.getId()}</td>
      <td><a href="${serie.getUrl()}">${serie.getName()}</a></td>
      <td>${serie.getChannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
    tableBody.appendChild(row);
  });
}

function afficheAverage(series: Serie[]): void {
  let averageNumber: number = getAverageSeasons(series); 
  average.innerHTML = `Seasons average: ${averageNumber}`; 
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  let average: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  average = totalSeasons / series.length ; 
  return average;
}


