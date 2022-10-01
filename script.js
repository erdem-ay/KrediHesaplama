function KrediHesapla() {
  let aylıkTaksit, odenecekToplamTutar;

  let cekilecekTutar = document.querySelector("#cekilecekTutar").value;
  let liste = document.querySelector("#TaksitSayısı");
  let taksitSayısı = liste.options[liste.selectedIndex].value;

  if (taksitSayısı == 12) {
    odenecekToplamTutar = cekilecekTutar * 1.1;
  } else if (taksitSayısı == 24) {
    odenecekToplamTutar = cekilecekTutar * 1.2;
  } else if (taksitSayısı == 36) {
    odenecekToplamTutar = cekilecekTutar * 1.3;
  } else if (taksitSayısı == 48) {
    odenecekToplamTutar = cekilecekTutar * 1.4;
  }

  aylıkTaksit=odenecekToplamTutar/taksitSayısı;

  document.querySelector('#result').innerHTML="Geri ödenecek tutar: " + odenecekToplamTutar + "<br>"
  "Aylık Taksit tutarı: " + aylıkTaksit;

}
