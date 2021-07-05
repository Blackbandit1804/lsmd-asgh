// Select all fonksiyonu
function selectAllForm() {
	document.execCommand('selectAll',false,null);
}

// index.html ara-input temizleme fonksiyonu
function indexFormReset() {
	document.getElementById("indexAramaForm").reset();
}

// Hasta Kayıt Yazdırma ve Yönlendirme
function hastaKayitYeniKonuAc() {
	window.open('https://goatroleplay.com/forum/index.php?action=post;board=154.0','_blank');
}

function hastaKayitVerileriYazdir() {
	var hasta_kayit_hastanin_vatandaslik_no = document.getElementById("hastaKayitVatandaslikNo").value;
	document.getElementById("span_hastaKayitVatandaslikNo").innerHTML = hasta_kayit_hastanin_vatandaslik_no;

	var hasta_kayit_hastanin_ad_soyad = document.getElementById("hastaKayitAdSoyad").value;
	document.getElementById("span_hastaKayitAdSoyad").innerHTML = hasta_kayit_hastanin_ad_soyad;

	var hasta_kayit_hastanin_dogum_tarihi = document.getElementById("hastaKayitDogumTarihi").value;
	document.getElementById("span_hastaKayitDogumTarihi").innerHTML = hasta_kayit_hastanin_dogum_tarihi;

	var hasta_kayit_hastanin_uyruk = document.getElementById("hastaKayitUyruk").value;
	document.getElementById("span_hastaKayitUyruk").innerHTML = hasta_kayit_hastanin_uyruk;

	var hasta_kayit_hastanin_cinsiyet = document.getElementById("hastaKayitCinsiyet").value;
	document.getElementById("span_hastaKayitCinsiyet").innerHTML = hasta_kayit_hastanin_cinsiyet;

	var hasta_kayit_hastanin_tel_no = document.getElementById("hastaKayitTelNo").value;
	document.getElementById("span_hastaKayitTelNo").innerHTML = hasta_kayit_hastanin_tel_no;

	var hasta_kayit_hastanin_vaka = document.getElementById("hastaKayitVaka").value;
	document.getElementById("span_hastaKayitVaka").innerHTML = hasta_kayit_hastanin_vaka;

	var hasta_kayit_hastanin_teshis = document.getElementById("hastaKayitTeshis").value;
	document.getElementById("span_hastaKayitTeshis").innerHTML = hasta_kayit_hastanin_teshis;

	var hasta_kayit_hastanin_hastaneye_ulasim = document.getElementById("hastaKayitHastaneyeUlasim").value;
	document.getElementById("span_hastaKayitHastaneyeUlasim").innerHTML = hasta_kayit_hastanin_hastaneye_ulasim;

	var hasta_kayit_hastanin_hastaneye_ulastiran = document.getElementById("hastaKayitHastaneyeUlastiran").value;
	document.getElementById("span_hastaKayitHastaneyeUlastiran").innerHTML = hasta_kayit_hastanin_hastaneye_ulastiran;

	var hasta_kayit_hastanin_tedavi_baslangic_tarih = document.getElementById("hastaKayitTedaviBaslangicTarih").value;
	document.getElementById("span_hastaKayitTedaviBaslangicTarih").innerHTML = hasta_kayit_hastanin_tedavi_baslangic_tarih;

	var hasta_kayit_hastanin_tedavi_baslangic_saat = document.getElementById("hastaKayitTedaviBaslangicSaat").value;
	document.getElementById("span_hastaKayitTedaviBaslangicSaat").innerHTML = hasta_kayit_hastanin_tedavi_baslangic_saat;

	var hasta_kayit_hastanin_taburcu_sevk_tarih = document.getElementById("hastaKayitTaburcuSevkTarih").value;
	document.getElementById("span_hastaKayitTaburcuSevkTarih").innerHTML = hasta_kayit_hastanin_taburcu_sevk_tarih;

	var hasta_kayit_hastanin_taburcu_sevk_saat = document.getElementById("hastaKayitTaburcuSevkSaat").value;
	document.getElementById("span_hastaKayitTaburcuSevkSaat").innerHTML = hasta_kayit_hastanin_taburcu_sevk_saat;

	var hasta_kayit_hastanin_durum = document.getElementById("hastaKayitHastaDurum").value;
	document.getElementById("span_hastaKayitHastaDurum").innerHTML = hasta_kayit_hastanin_durum;

	var hasta_kayit_personel_ad_soyad = document.getElementById("hastaKayitPersonelAdSoyad").value;
	document.getElementById("span_hastaKayitPersonelAdSoyad").innerHTML = hasta_kayit_personel_ad_soyad;

	var hasta_kayit_personel_unvan = document.getElementById("hastaKayitPersonelUnvan").value;
	document.getElementById("span_hastaKayitPersonelUnvan").innerHTML = hasta_kayit_personel_unvan;

	var hasta_kayit_personel_imza = document.getElementById("hastaKayitPersonelImza").value;
	document.getElementById("span_hastaKayitPersonelImza").innerHTML = hasta_kayit_personel_imza;

	var hasta_kayit_fatura = document.getElementById("hastaKayitFatura").value;
	document.getElementById("span_hastaKayitFatura").innerHTML = hasta_kayit_fatura;
}

// EMS Rapor Yazdırma ve Yönlendirme
function emsRaporYeniKonuAc() {
	window.open('https://goatroleplay.com/forum/index.php?action=post;topic=2439.0','_blank');
}

function emsRaporVerileriYazdir() {
	var ems_rapor_hastanin_ad_soyad = document.getElementById("emsRaporAdSoyad").value;
	document.getElementById("span_emsRaporAdSoyad").innerHTML = ems_rapor_hastanin_ad_soyad;

	var ems_rapor_hastanin_dogum_tarihi = document.getElementById("emsRaporDogumTarihi").value;
	document.getElementById("span_emsRaporDogumTarihi").innerHTML = ems_rapor_hastanin_dogum_tarihi;

	var ems_rapor_hastanin_tel_no = document.getElementById("emsRaporTelNo").value;
	document.getElementById("span_emsRaporTelNo").innerHTML = ems_rapor_hastanin_tel_no;

	var ems_rapor_vaka_lokasyonu = document.getElementById("emsRaporVakaLokasyonu").value;
	document.getElementById("span_emsRaporVakaLokasyonu").innerHTML = ems_rapor_vaka_lokasyonu;

	var ems_rapor_vaka = document.getElementById("emsRaporVaka").value;
	document.getElementById("span_emsRaporVaka").innerHTML = ems_rapor_vaka;

	var ems_rapor_vaka_diger = document.getElementById("emsRaporVakaDiger").value;
	document.getElementById("span_emsRaporVakaDiger").innerHTML = ems_rapor_vaka_diger;

	var ems_rapor_olayin_seyri = document.getElementById("emsRaporOlayinSeyri").value;
	document.getElementById("span_emsRaporOlayinSeyri").innerHTML = ems_rapor_olayin_seyri;

	var ems_rapor_olayin_tarih = document.getElementById("emsRaporOlayinTarih").value;
	document.getElementById("span_emsRaporOlayinTarih").innerHTML = ems_rapor_olayin_tarih;

	var ems_rapor_olayin_saat = document.getElementById("emsRaporOlayinSaat").value;
	document.getElementById("span_emsRaporOlayinSaat").innerHTML = ems_rapor_olayin_saat;

	var ems_rapor_personel_ad_soyad = document.getElementById("emsRaporPersonelAdSoyad").value;
	document.getElementById("span_emsRaporPersonelAdSoyad").innerHTML = ems_rapor_personel_ad_soyad;

	var ems_rapor_personel_rutbe = document.getElementById("emsRaporPersonelRutbe").value;
	document.getElementById("span_emsRaporPersonelRutbe").innerHTML = ems_rapor_personel_rutbe;

	var ems_rapor_personel_imza = document.getElementById("emsRaporPersonelImza").value;
	document.getElementById("span_emsRaporPersonelImza").innerHTML = ems_rapor_personel_imza;

}

// Reçete Yazdırma ve Yönlendirme
function receteVerileriYazdir() {
	var recete_hastanin_vatandaslik_no = document.getElementById("receteVatandaslikNo").value;
	document.getElementById("span_receteVatandaslikNo").innerHTML = recete_hastanin_vatandaslik_no;

	var recete_hastanin_ad_soyad = document.getElementById("receteAdSoyad").value;
	document.getElementById("span_receteAdSoyad").innerHTML = recete_hastanin_ad_soyad;

	var recete_tarih = document.getElementById("receteTarih").value;
	document.getElementById("span_receteTarih").innerHTML = recete_tarih;

	var recete_tani = document.getElementById("receteTani").value;
	document.getElementById("span_receteTani").innerHTML = recete_tani;

	var recete_personel_ad_soyad = document.getElementById("recetePersonelAdSoyad").value;
	document.getElementById("span_recetePersonelAdSoyad").innerHTML = recete_personel_ad_soyad;

	var recete_personel_imza = document.getElementById("recetePersonelImza").value;
	document.getElementById("span_recetePersonelImza").innerHTML = recete_personel_imza;

	var recete_ilaclar = document.getElementById("receteIlaclar").value;
	document.getElementById("span_receteIlaclar").innerHTML = recete_ilaclar;
}

// Ameliyat Raporu Yazdırma ve Yönlendirme
function ameliyatRaporuVerileriYazdir() {
	var ameliyat_raporu_hastanin_ad_soyad = document.getElementById("ameliyatRaporuAdSoyad").value;
	document.getElementById("span_ameliyatRaporuAdSoyad").innerHTML = ameliyat_raporu_hastanin_ad_soyad;

	var ameliyat_raporu_hastanin_dogum_tarihi = document.getElementById("ameliyatRaporuDogumTarihi").value;
	document.getElementById("span_ameliyatRaporuDogumTarihi").innerHTML = ameliyat_raporu_hastanin_dogum_tarihi;

	var ameliyat_raporu_birim = document.getElementById("ameliyatRaporuBirim").value;
	document.getElementById("span_ameliyatRaporuBirim").innerHTML = ameliyat_raporu_birim;

	var ameliyat_raporu_doktoru = document.getElementById("ameliyatRaporuDoktoru").value;
	document.getElementById("span_ameliyatRaporuDoktoru").innerHTML = ameliyat_raporu_doktoru;

	var ameliyat_raporu_yattigi_tarih = document.getElementById("ameliyatRaporuYattigiTarih").value;
	document.getElementById("span_ameliyatRaporuYattigiTarih").innerHTML = ameliyat_raporu_yattigi_tarih;

	var ameliyat_raporu_taburcu_tarih = document.getElementById("ameliyatRaporuTaburcuTarih").value;
	document.getElementById("span_ameliyatRaporuTaburcuTarih").innerHTML = ameliyat_raporu_taburcu_tarih;

	var ameliyat_raporu_ameliyat = document.getElementById("ameliyatRaporuAmeliyat").value;
	document.getElementById("span_ameliyatRaporuAmeliyat").innerHTML = ameliyat_raporu_ameliyat;

	var ameliyat_raporu_anestezi = document.getElementById("ameliyatRaporuAnestezi").value;
	document.getElementById("span_ameliyatRaporuAnestezi").innerHTML = ameliyat_raporu_anestezi;

	var ameliyat_raporu_ameliyat_tarih = document.getElementById("ameliyatRaporuAmeliyatTarih").value;
	document.getElementById("span_ameliyatRaporuAmeliyatTarih").innerHTML = ameliyat_raporu_ameliyat_tarih;

	var ameliyat_raporu_ameliyat_saat = document.getElementById("ameliyatRaporuAmeliyatSaat").value;
	document.getElementById("span_ameliyatRaporuAmeliyatSaat").innerHTML = ameliyat_raporu_ameliyat_saat;

	var ameliyat_raporu_operasyon_seyri = document.getElementById("ameliyatRaporuOperasyonSeyri").value;
	document.getElementById("span_ameliyatRaporuOperasyonSeyri").innerHTML = ameliyat_raporu_operasyon_seyri;

	var ameliyat_raporu_personel_ad_soyad = document.getElementById("ameliyatRaporuPersonelAdSoyad").value;
	document.getElementById("span_ameliyatRaporuPersonelAdSoyad").innerHTML = ameliyat_raporu_personel_ad_soyad;

	var ameliyat_raporu_personel_imza = document.getElementById("ameliyatRaporuPersonelImza").value;
	document.getElementById("span_ameliyatRaporuPersonelImza").innerHTML = ameliyat_raporu_personel_imza;
}

// Ameliyat Raporu Yazdırma ve Yönlendirme
function psikolojiRaporuVerileriYazdir() {
	var psikoloji_raporu_hastanin_ad_soyad = document.getElementById("psikolojiRaporuAdSoyad").value;
	document.getElementById("span_psikolojiRaporuAdSoyad").innerHTML = psikoloji_raporu_hastanin_ad_soyad;

	var psikoloji_raporu_hastanin_dogum_tarihi = document.getElementById("psikolojiRaporuDogumTarihi").value;
	document.getElementById("span_psikolojiRaporuDogumTarihi").innerHTML = psikoloji_raporu_hastanin_dogum_tarihi;

	var psikoloji_raporu_cinsiyet = document.getElementById("psikolojiRaporuCinsiyet").value;
	document.getElementById("span_psikolojiRaporuCinsiyet").innerHTML = psikoloji_raporu_cinsiyet;

	var psikoloji_raporu_tarih = document.getElementById("psikolojiRaporuTarih").value;
	document.getElementById("span_psikolojiRaporuTarih").innerHTML = psikoloji_raporu_tarih;

	var psikoloji_raporu_tetkik = document.getElementById("psikolojiRaporuTetkik").value;
	document.getElementById("span_psikolojiRaporuTetkik").innerHTML = psikoloji_raporu_tetkik;

	var psikoloji_raporu_sonuc = document.getElementById("psikolojiRaporuSonuc").value;
	document.getElementById("span_psikolojiRaporuSonuc").innerHTML = psikoloji_raporu_sonuc;

	var psikoloji_raporu_personel_ad_soyad = document.getElementById("psikolojiRaporuPersonelAdSoyad").value;
	document.getElementById("span_psikolojiRaporuPersonelAdSoyad").innerHTML = psikoloji_raporu_personel_ad_soyad;
	
	var psikoloji_raporu_personel_imza = document.getElementById("psikolojiRaporuPersonelImza").value;
	document.getElementById("span_psikolojiRaporuPersonelImza").innerHTML = psikoloji_raporu_personel_imza;
}

// Darp Raporu Yazdırma ve Yönlendirme
function darpRaporuVerileriYazdir() { 
	var darp_raporu_tarih = document.getElementById("darpRaporuTarih").value;
	document.getElementById("span_darpRaporuTarih").innerHTML = darp_raporu_tarih;

	var darp_raporu_saat = document.getElementById("darpRaporuSaat").value;
	document.getElementById("span_darpRaporuSaat").innerHTML = darp_raporu_saat;

	var darp_raporu_hastanin_vatandaslik_no = document.getElementById("darpRaporuVatandaslikNo").value;
	document.getElementById("span_darpRaporuVatandaslikNo").innerHTML = darp_raporu_hastanin_vatandaslik_no;

	var darp_raporu_hastanin_ad_soyad = document.getElementById("darpRaporuAdSoyad").value;
	document.getElementById("span_darpRaporuAdSoyad").innerHTML = darp_raporu_hastanin_ad_soyad;

	var darp_raporu_hastanin_dogum_tarihi = document.getElementById("darpRaporuDogumTarihi").value;
	document.getElementById("span_darpRaporuDogumTarihi").innerHTML = darp_raporu_hastanin_dogum_tarihi;

	var darp_raporu_cinsiyet = document.getElementById("darpRaporuCinsiyet").value;
	document.getElementById("span_darpRaporuCinsiyet").innerHTML = darp_raporu_cinsiyet;

	var darp_raporu_oyku = document.getElementById("darpRaporuOyku").value;
	document.getElementById("span_darpRaporuOyku").innerHTML = darp_raporu_oyku;

	var darp_raporu_sikayet = document.getElementById("darpRaporuSikayet").value;
	document.getElementById("span_darpRaporuSikayet").innerHTML = darp_raporu_sikayet;

	var darp_raporu_ozgecmis = document.getElementById("darpRaporuOzgecmis").value;
	document.getElementById("span_darpRaporuOzgecmis").innerHTML = darp_raporu_ozgecmis;

	var darp_raporu_bulgular = document.getElementById("darpRaporuBulgular").value;
	document.getElementById("span_darpRaporuBulgular").innerHTML = darp_raporu_bulgular;

	var darp_raporu_personel_ad_soyad = document.getElementById("darpRaporuPersonelAdSoyad").value;
	document.getElementById("span_darpRaporuPersonelAdSoyad").innerHTML = darp_raporu_personel_ad_soyad;

	var darp_raporu_personel_imza = document.getElementById("darpRaporuPersonelImza").value;
	document.getElementById("span_darpRaporuPersonelImza").innerHTML = darp_raporu_personel_imza;

}

// Sağlık Raporu Yazdırma ve Yönlendirme
function saglikRaporuVerileriYazdir() { 
	var saglik_raporu_verilme_nedeni = document.getElementById("saglikRaporuVerilmeNedeni").value;
	document.getElementById("span_saglikRaporuVerilmeNedeni").innerHTML = saglik_raporu_verilme_nedeni;

	var saglik_raporu_hastanin_vatandaslik_no = document.getElementById("saglikRaporuVatandaslikNo").value;
	document.getElementById("span_saglikRaporuVatandaslikNo").innerHTML = saglik_raporu_hastanin_vatandaslik_no;

	var saglik_raporu_hastanin_ad_soyad = document.getElementById("saglikRaporuAdSoyad").value;
	document.getElementById("span_saglikRaporuAdSoyad").innerHTML = saglik_raporu_hastanin_ad_soyad;

	var saglik_raporu_hastanin_dogum_tarihi = document.getElementById("saglikRaporuDogumTarihi").value;
	document.getElementById("span_saglikRaporuDogumTarihi").innerHTML = saglik_raporu_hastanin_dogum_tarihi;

	var saglik_raporu_hastanin_cinsiyet = document.getElementById("saglikRaporuCinsiyet").value;
	document.getElementById("span_saglikRaporuCinsiyet").innerHTML = saglik_raporu_hastanin_cinsiyet;

	var saglik_raporu_tanimlar = document.getElementById("saglikRaporuTanimlar").value;
	document.getElementById("span_saglikRaporuTanimlar").innerHTML = saglik_raporu_tanimlar;

	var saglik_raporu_aciklama = document.getElementById("saglikRaporuAciklama").value;
	document.getElementById("span_saglikRaporuAciklama").innerHTML = saglik_raporu_aciklama;

	var saglik_raporu_karar = document.getElementById("saglikRaporuKarar").value;
	document.getElementById("span_saglikRaporuKarar").innerHTML = saglik_raporu_karar;

	var saglik_raporu_personel_ad_soyad = document.getElementById("saglikRaporuPersonelAdSoyad").value;
	document.getElementById("span_saglikRaporuPersonelAdSoyad").innerHTML = saglik_raporu_personel_ad_soyad;

	var saglik_raporu_personel_imza = document.getElementById("saglikRaporuPersonelImza").value;
	document.getElementById("span_saglikRaporuPersonelImza").innerHTML = saglik_raporu_personel_imza;
}

// İstirahat Raporu Yazdırma ve Yönlendirme
function istirahatRaporuVerileriYazdir() { 
	var istirahat_raporu_hastanin_vatandaslik_no = document.getElementById("istirahatRaporuVatandaslikNo").value;
	document.getElementById("span_istirahatRaporuVatandaslikNo").innerHTML = istirahat_raporu_hastanin_vatandaslik_no;

	var istirahat_raporu_hastanin_ad_soyad = document.getElementById("istirahatRaporuAdSoyad").value;
	document.getElementById("span_istirahatRaporuAdSoyad").innerHTML = istirahat_raporu_hastanin_ad_soyad;

	var istirahat_raporu_hastanin_dogum_tarihi = document.getElementById("istirahatRaporuDogumTarihi").value;
	document.getElementById("span_istirahatRaporuDogumTarihi").innerHTML = istirahat_raporu_hastanin_dogum_tarihi;

	var istirahat_raporu_hastanin_meslek = document.getElementById("istirahatRaporuMeslek").value;
	document.getElementById("span_istirahatRaporuMeslek").innerHTML = istirahat_raporu_hastanin_meslek;

	var istirahat_raporu_klinik = document.getElementById("istirahatRaporuKlinik").value;
	document.getElementById("span_istirahatRaporuKlinik").innerHTML = istirahat_raporu_klinik;

	var istirahat_raporu_teshis = document.getElementById("istirahatRaporuTeshis").value;
	document.getElementById("span_istirahatRaporuTeshis").innerHTML = istirahat_raporu_teshis;

	var istirahat_raporu_muayene_tarih = document.getElementById("istirahatRaporuMuayeneTarih").value;
	document.getElementById("span_istirahatRaporuMuayeneTarih").innerHTML = istirahat_raporu_muayene_tarih;

	var istirahat_raporu_isbasi_tarih = document.getElementById("istirahatRaporuIsbasiTarih").value;
	document.getElementById("span_istirahatRaporuIsbasiTarih").innerHTML = istirahat_raporu_isbasi_tarih;

	var istirahat_raporu_karar = document.getElementById("istirahatRaporuKarar").value;
	document.getElementById("span_istirahatRaporuKarar").innerHTML = istirahat_raporu_karar;

	var istirahat_raporu_personel_ad_soyad = document.getElementById("istirahatRaporuPersonelAdSoyad").value;
	document.getElementById("span_istirahatRaporuPersonelAdSoyad").innerHTML = istirahat_raporu_personel_ad_soyad;
	
	var istirahat_raporu_personel_imza = document.getElementById("istirahatRaporuPersonelImza").value;
	document.getElementById("span_istirahatRaporuPersonelImza").innerHTML = istirahat_raporu_personel_imza;
}

// Doğum Raporu Yazdırma ve Yönlendirme
function dogumRaporSablonaGit() {
	window.open('https://goatroleplay.com/forum/index.php?board=154.0','_blank');
}

// Ölüm Raporu Yazdırma ve Yönlendirme
function olumRaporuVerileriYazdir() {
	var olum_raporu_olumun_meydan_yeri = document.getElementById("olumRaporuMeydanYeri").value;
	document.getElementById("span_olumRaporuMeydanYeri").innerHTML = olum_raporu_olumun_meydan_yeri;

	var olum_raporu_tespit_kurum = document.getElementById("olumRaporuTespitKurum").value;
	document.getElementById("span_olumRaporuTespitKurum").innerHTML = olum_raporu_tespit_kurum;

	var olum_raporu_hastanin_vatandaslik_no = document.getElementById("olumRaporuVatandaslikNo").value;
	document.getElementById("span_olumRaporuVatandaslikNo").innerHTML = olum_raporu_hastanin_vatandaslik_no;

	var olum_raporu_hastanin_ad_soyad = document.getElementById("olumRaporuAdSoyad").value;
	document.getElementById("span_olumRaporuAdSoyad").innerHTML = olum_raporu_hastanin_ad_soyad;

	var olum_raporu_hastanin_dogum_tarih = document.getElementById("olumRaporDogumTarihi").value;
	document.getElementById("span_olumRaporDogumTarihi").innerHTML = olum_raporu_hastanin_dogum_tarih;

	var olum_raporu_hastanin_cinsiyet = document.getElementById("olumRaporuCinsiyet").value;
	document.getElementById("span_olumRaporuCinsiyet").innerHTML = olum_raporu_hastanin_cinsiyet;

	var olum_raporu_olum_sebep = document.getElementById("olumRaporuSebep").value;
	document.getElementById("span_olumRaporuSebep").innerHTML = olum_raporu_olum_sebep;

	var olum_raporu_olum_tarihi = document.getElementById("olumRaporOlumTarihi").value;
	document.getElementById("span_olumRaporOlumTarihi").innerHTML = olum_raporu_olum_tarihi;

	var olum_raporu_olum_yeri = document.getElementById("olumRaporuOlumYeri").value;
	document.getElementById("span_olumRaporuOlumYeri").innerHTML = olum_raporu_olum_yeri;

	var olum_raporu_olum_yeri_diger = document.getElementById("olumRaporuOlumYeriDiger").value;
	document.getElementById("span_olumRaporuOlumYeriDiger").innerHTML = olum_raporu_olum_yeri_diger;

	var olum_raporu_olum_sekli = document.getElementById("olumRaporuOlumSekli").value;
	document.getElementById("span_olumRaporuOlumSekli").innerHTML = olum_raporu_olum_sekli;

	var olum_raporu_olum_gerceklesme = document.getElementById("olumRaporuOlumGerceklesme").value;
	document.getElementById("span_olumRaporuOlumGerceklesme").innerHTML = olum_raporu_olum_gerceklesme;

	var olum_raporu_yaralanma_yeri = document.getElementById("olumRaporuYaralanmaYeri").value;
	document.getElementById("span_olumRaporuYaralanmaYeri").innerHTML = olum_raporu_yaralanma_yeri;

	var olum_raporu_yaralanma_yeri_diger = document.getElementById("olumRaporuYaralanmaYeriDiger").value;
	document.getElementById("span_olumRaporuYaralanmaYeriDiger").innerHTML = olum_raporu_yaralanma_yeri_diger;

	var olum_raporu_otopsisi_yapildi = document.getElementById("olumRaporuOtopsiYapildi").value;
	document.getElementById("span_olumRaporuOtopsiYapildi").innerHTML = olum_raporu_otopsisi_yapildi;

	var olum_raporu_personel_ad_soyad = document.getElementById("olumRaporuPersonelAdSoyad").value;
	document.getElementById("span_olumRaporuPersonelAdSoyad").innerHTML = olum_raporu_personel_ad_soyad;

	var olum_raporu_personel_imza = document.getElementById("olumRaporuPersonelImza").value;
	document.getElementById("span_olumRaporuPersonelImza").innerHTML = olum_raporu_personel_imza;
}

// Otopsi Raporu Yazdırma ve Yönlendirme
function otopsiRaporuVerileriYazdir() {
	var otopsi_raporu_hastanin_vatandaslik_no = document.getElementById("otopsiRaporuVatandaslikNo").value;
	document.getElementById("span_otopsiRaporuVatandaslikNo").innerHTML = otopsi_raporu_hastanin_vatandaslik_no;

	var otopsi_raporu_hastanin_ad_soyad = document.getElementById("otopsiRaporuAdSoyad").value;
	document.getElementById("span_otopsiRaporuAdSoyad").innerHTML = otopsi_raporu_hastanin_ad_soyad;

	var otopsi_raporu_hastanin_dogum_tarihi = document.getElementById("otopsiRaporDogumTarihi").value;
	document.getElementById("span_otopsiRaporDogumTarihi").innerHTML = otopsi_raporu_hastanin_dogum_tarihi;

	var otopsi_raporu_hastanin_cinsiyet = document.getElementById("otopsiRaporuCinsiyet").value;
	document.getElementById("span_otopsiRaporuCinsiyet").innerHTML = otopsi_raporu_hastanin_cinsiyet;

	var otopsi_raporu_olum_tarihi = document.getElementById("otopsiRaporOlumTarihi").value;
	document.getElementById("span_otopsiRaporOlumTarihi").innerHTML = otopsi_raporu_olum_tarihi;

	var otopsi_raporu_otopsi_tarihi = document.getElementById("otopsiRaporOtopsiTarih").value;
	document.getElementById("span_otopsiRaporOtopsiTarih").innerHTML = otopsi_raporu_otopsi_tarihi;

	var otopsi_raporu_otopsi_saati = document.getElementById("otopsiRaporOtopsiSaat").value;
	document.getElementById("span_otopsiRaporOtopsiSaat").innerHTML = otopsi_raporu_otopsi_saati;

	var otopsi_raporu_olum_yeri = document.getElementById("otopsiRaporuOlumYeri").value;
	document.getElementById("span_otopsiRaporuOlumYeri").innerHTML = otopsi_raporu_olum_yeri;

	var otopsi_raporu_isteyen_kurum = document.getElementById("otopsiRaporuIsteyenKurum").value;
	document.getElementById("span_otopsiRaporuIsteyenKurum").innerHTML = otopsi_raporu_isteyen_kurum;

	var otopsi_raporu_yapildigi_yer = document.getElementById("otopsiRaporuYapildigiYer").value;
	document.getElementById("span_otopsiRaporuYapildigiYer").innerHTML = otopsi_raporu_yapildigi_yer;

	var otopsi_raporu_olum_nedeni = document.getElementById("otopsiRaporuOlumNedeni").value;
	document.getElementById("span_otopsiRaporuOlumNedeni").innerHTML = otopsi_raporu_olum_nedeni;

	var otopsi_raporu_otopsiyi_yapanlar = document.getElementById("otopsiRaporuOtopsiyiYapanlar").value;
	document.getElementById("span_otopsiRaporuOtopsiyiYapanlar").innerHTML = otopsi_raporu_otopsiyi_yapanlar;

	var otopsi_raporu_dis_muayene = document.getElementById("otopsiRaporuDisMuayene").value;
	document.getElementById("span_otopsiRaporuDisMuayene").innerHTML = otopsi_raporu_dis_muayene;

	var otopsi_raporu_ic_muayene = document.getElementById("otopsiRaporuIcMuayene").value;
	document.getElementById("span_otopsiRaporuIcMuayene").innerHTML = otopsi_raporu_ic_muayene;

	var otopsi_raporu_sonuc = document.getElementById("otopsiRaporuSonuc").value;
	document.getElementById("span_otopsiRaporuSonuc").innerHTML = otopsi_raporu_sonuc;

	var otopsi_raporu_personel_ad_soyad = document.getElementById("otopsiRaporuPersonelAdSoyad").value;
	document.getElementById("span_otopsiRaporuPersonelAdSoyad").innerHTML = otopsi_raporu_personel_ad_soyad;

	var otopsi_raporu_personel_imza = document.getElementById("otopsiRaporuPersonelImza").value;
	document.getElementById("span_otopsiRaporuPersonelImza").innerHTML = otopsi_raporu_personel_imza;
}