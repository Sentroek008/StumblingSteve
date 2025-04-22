document.querySelector('.stream-play-btn').addEventListener('click', function() {
    const streamContainer = document.querySelector('.live-stream');
    streamContainer.innerHTML = `
        <iframe 
            src="https://kick.com/stumblingsteve/embed" 
            class="stream-iframe"
            allowfullscreen
            autoplay
        ></iframe>
    `;
});