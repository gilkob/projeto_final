const links = document.querySelectorAll("#nav-principal a");
function loghref(ativarlink) {
  const extraid = ativarlink.href;
  const urlatual = document.location.href;
  console.log(extraid);
  if (extraid === urlatual) {
    ativarlink.style.color = "red"; // Aplica ao 'ativarlink', não a 'links'
    ativarlink.style.fontWeight = "bold"; // Aplica ao 'ativarlink'
    ativarlink.style.textDecoration = "underline";
  }
}

links.forEach(loghref);
