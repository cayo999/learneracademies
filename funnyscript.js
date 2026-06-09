document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    if(event.key="``"){
        window.location.replace("https://www.google.com")
    }
});
