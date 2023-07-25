let artists_container = document.getElementById("artists");
    api();
    async function api() {
        const response = await fetch('https://artist.myanmarlocalartists.com/api/artists');
        const artists = await response.json();
        showArtists(artists);
    }
    function showArtists(artists) {
        for (const artist of artists) {
            let card = document.createElement("div");
            card.classList.add("artist");
            let inner_html = `
        <img src="${artist.artist_pp}" alt="">
        <div class="info">
            <label class="name">${artist.artist_name}</label>
            <p class="bio">${artist.artist_bio}</p>
        </div>
        `;
            card.innerHTML = inner_html;
            artists_container.appendChild(card);

        }
    }