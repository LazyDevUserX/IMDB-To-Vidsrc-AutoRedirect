// Function to fetch the embed URL from VidSRC
function fetchEmbedURL(imdbId) {
  return `https://vidsrc.xyz/embed/movie/${imdbId}`;
}

// Function to add the embed link to the IMDb page
function addEmbedLinkToPage(embedUrl) {
  const body = document.querySelector('body');
  if (!body) {
    console.error('Body element not found. Retrying in 500ms...');
    setTimeout(() => {
      addEmbedLinkToPage(embedUrl); // Retry after a delay
    }, 500);
    return;
  }

  const infoContainer = document.createElement('div');
  infoContainer.innerHTML = `
    <h3>Watch this movie</h3>
    <iframe src="${embedUrl}" width="600" height="400" allowfullscreen></iframe>
  `;
  body.appendChild(infoContainer);
}

// Function to extract IMDb ID from the IMDb URL
function extractImdbIdFromUrl(url) {
  const match = url.match(/\/title\/(tt\d+)/);
  return match ? match[1] : null;
}

// Main function to execute the extension's functionality
function main() {
  const imdbId = extractImdbIdFromUrl(window.location.href);
  if (imdbId) {
    const embedUrl = fetchEmbedURL(imdbId);
    addEmbedLinkToPage(embedUrl);
  } else {
    console.error('IMDb ID not found.');
  }
}

// Wait for the IMDb page to load completely before executing
window.addEventListener('load', main);
