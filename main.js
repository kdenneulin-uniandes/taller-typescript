import { series } from './data.js';
const tableBody = document.getElementById('contenidoTabla');
function loadSeriesData() {
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.getId()}</td>
      <td>${serie.getName}</td>
      <td>${serie.getChannel}</td>
      <td>${serie.getSeasons}</td>
    `;
        tableBody.appendChild(row);
    });
    console.log("fait, fonction exécutée");
    console.log(`${tableBody.innerHTML}`);
}
loadSeriesData;
document.getElementsByTagName("tbody")[0].innerHTML = tableBody.innerHTML;
// window.onload = loadSeriesData;
