let componentData = {};

// Load component data from JSON file
fetch('components.json')
  .then(response => response.json())
  .then(data => {
    componentData = data;
  });

const markers = document.querySelectorAll('.marker');
const infoBox = document.getElementById('component-info');

markers.forEach(marker => {
  marker.addEventListener('mouseenter', () => {
    const id = marker.dataset.id;
    const info = componentData[id];

    if (info) {
      infoBox.innerHTML = `
        <strong>${info.Component}</strong><br>
        ${info.Description}<br>
        <em>Material:</em> ${info.Material}<br>
        <em>Weight:</em> ${info.Weight}
      `;

      const rect = marker.getBoundingClientRect();
      const containerRect = document.querySelector('.container').getBoundingClientRect();

      // Position the info box near the marker
      infoBox.style.top = `${marker.style.top}`;
      infoBox.style.left = `${marker.style.left}`;
      infoBox.style.display = 'block';
    }
  });

  marker.addEventListener('mouseleave', () => {
    infoBox.style.display = 'none';
  });
});
