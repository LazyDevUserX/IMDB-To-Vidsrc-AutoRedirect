document.getElementById('findMovie').addEventListener('click', async () => {
  // Retrieve the IMDb ID from Chrome storage
  chrome.storage.local.get(['imdbId'], function(result) {
    const imdbId = result.imdbId;
    if (imdbId) {
      const embedUrl = `https://vidsrc.xyz/embed/movie?imdb=${imdbId}`;
      document.getElementById('result').innerHTML = `
        <p>Watch here: <a href="${embedUrl}" target="_blank">Stream Movie</a></p>
        <iframe src="${embedUrl}" width="600" height="400" allowfullscreen></iframe>
      `;
    } else {
      document.getElementById('result').innerHTML = 'IMDb ID not found.';
    }
  });
});
