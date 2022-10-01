
function krediHesapla() {
  let aylıkTaksit, odenecekToplamTutar;

  let cekilecekTutar = document.querySelector("#cekilecekTutar").value;
  let liste = document.querySelector("#TaksitSayısı");
  let taksitSayisi = liste.options[liste.selectedIndex].value;

  if (taksitSayisi == 12) {
    odenecekToplamTutar = cekilecekTutar * 1.1;
  } else if (taksitSayisi == 24) {
    odenecekToplamTutar = cekilecekTutar * 1.2;
  } else if (taksitSayisi == 36) {
    odenecekToplamTutar = cekilecekTutar * 1.3;
  } else if (taksitSayisi == 48) {
    odenecekToplamTutar = cekilecekTutar * 1.4;
  }

  aylıkTaksit=odenecekToplamTutar/taksitSayisi;

  document.querySelector('#result').innerHTML="Geri ödenecek tutar: " + odenecekToplamTutar + "<br>" +
  "Aylık Taksit tutarı: " + aylıkTaksit.toFixed(0);

}
