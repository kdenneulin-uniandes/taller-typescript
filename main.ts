import { Serie } from './Serie.js';
import { series } from './data.js';

let tableBody: HTMLElement = document.getElementById('contenidoTabla')! ;
let average: HTMLElement = document.getElementById('average')! ;

let linkCard: HTMLElement = document.getElementById('showcard')!;
let myCard: HTMLElement = document.getElementById('myCard')!;

renderSeriesInTable(series);
afficheAverage(series); 

function renderSeriesInTable(serie: Serie[]): void {
  series.forEach((serie: Serie) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.getId()}</td>
      <td><a href=# class="bouton" data-id="${serie.getId()}">${serie.getName()}</a></td>
      <td>${serie.getChannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
    tableBody.appendChild(row);
    // let box = document.getElementById("bouton")!;
    // box.addEventListener("click", (e:Event) => afficheCard(e));
  });

  let links = document.getElementsByClassName('bouton')!;
  Array.from(links).forEach(link => {
  link.addEventListener("click", (e:Event) => afficheCard(e));
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

// document.addEventListener('DOMContentLoaded', () => {
  // const myCard = document.getElementById('card');

export function afficheCard(e:Event): void {
  let serie: Serie = series[0]; 
  let optionId = (e.target as HTMLElement).getAttribute('data-id');
  series.forEach((serieFor: Serie) => {
    if(serieFor.getId() == optionId) {
      serie = serieFor; 
    }
  }); 
  let div: HTMLElement = document.getElementById('cardContent')!;

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
  </div>`
  // div.innerHTML = optionId!;  
  // myCard.appendChild(div); 
  // if (linkCard && myCard) {
      // Ajoute un gestionnaire d'événement pour le clic sur le lien
      // linkCard.addEventListener('click', (event) => {
          // event.preventDefault(); // Empêche le comportement par défaut du lien

          // Affiche la carte en modifiant son style
  myCard.style.display = "block";
      //});
  // }
};



