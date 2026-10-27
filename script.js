function resize() {
    let site = document.querySelector('.site');
    site.style.zoom = document.documentElement.clientWidth / 1440;
}

resize();
window.addEventListener('resize', resize);
