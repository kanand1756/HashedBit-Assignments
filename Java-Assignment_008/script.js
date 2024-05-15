document.addEventListener('DOMContentLoaded', () => {
  fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
    .then(response => response.json())
    .then(data => {
      // Sort data by NRR in ascending order
      data.sort((a, b) => a.NRR - b.NRR);

      // Get table body element
      const tbody = document.querySelector('tbody');

      // Loop through the sorted data and create table rows
      data.forEach((team, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${team.team}</td>
          <td>${team.matches}</td>
          <td>${team.won}</td>
          <td>${team.lost}</td>
          <td>${team.tied}</td>
          <td>${team.NRR}</td>
          <td>${team.points}</td>
        `;

        // Append row to table body
        tbody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
