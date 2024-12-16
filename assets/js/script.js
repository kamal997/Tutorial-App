function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}

console.log("Die Viewport-Bereit beträgt: " + getViewportWidth() + " Pixel")