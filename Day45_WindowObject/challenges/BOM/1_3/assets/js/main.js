const button = document.querySelector('[data-js="button"]');
const output = document.querySelector('[data-js="out"]');

button.addEventListener("click", () => {
  output.innerHTML = `
<p>Browsername--> ${window.navigator.appName}</p>
<p>Betriebssystem-Architektur--> ${window.navigator.userAgentData.platform}</p>
<p>Browser-Version--> ${window.navigator.appVersion}</p>
<p>Window Auflösung--> ${window.screen.width} x ${window.screen.height}</p>
<p>Innenhöhe des Dokuments--> ${window.innerHeight}</p>
<p>Innenbreite des Dokuments--> ${window.innerHeight}</p>
<p>colorDept--> ${window.screen.colorDepth}</p>
<p>pixelDepth--> ${window.screen.pixelDepth}</p>


`;
});

console.log(window);
