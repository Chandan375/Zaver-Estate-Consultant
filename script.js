fetch('properties.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('property-list');
    data.listings.forEach(listing => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${listing.image}" alt="${listing.title}" style="width:100%; border-radius:5px;">
        <h3>${listing.title}</h3>
        <p><strong>Location:</strong> ${listing.location}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Area:</strong> ${listing.area}</p>
        <p><strong>Furnishing:</strong> ${listing.furnishing}</p>
        <a href="contact.html" class="btn">Get Owner Details</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading listings:', err));