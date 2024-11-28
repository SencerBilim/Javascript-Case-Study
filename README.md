Koltuk Rezervasyon Sistemi - README
Bu uygulama, bir koltuk rezervasyon sisteminin temel işlevselliğini simüle etmek üzere tasarlanmıştır. Website sunumu; https://sencerbilim-case-study.vercel.app/

Kullanıcı dostu bir arayüzle birlikte aşağıdaki özellikler ve işlevler bulunmaktadır:

1. İlk 10 Koltuk Dolu Durumda
Uygulama başlangıcında, ilk 10 koltuk dolu olarak ayarlanmıştır ve kullanıcı tarafından seçilemez.
Dolu koltuklar, diğer koltuklardan farklı bir renkle gösterilmektedir.

2. Dolu Koltuklar için Tooltip
Dolu koltukların üzerine gelindiğinde, ilgili koltuk sahibinin isim ve soyisim bilgisi bir tooltip olarak gösterilir.
Bu veriler, aşağıdaki API bağlantısından çekilmektedir:
https://jsonplaceholder.typicode.com/users

3. Maksimum Koltuk Seçimi
Kullanıcı, en fazla 3 koltuk seçebilir.
3 koltuktan fazla seçim yapmaya çalışıldığında, kullanıcıya bir uyarı mesajı gösterilir.

4. Anlık Ücret Hesaplama
Her bir koltuk seçimi yapıldığında, koltuk başı 1.000 TL ücreti, ekranın yan tarafında bulunan bölümde anlık olarak hesaplanır.
Örneğin:
1 koltuk: 1.000 TL
2 koltuk: 2.000 TL
3 koltuk: 3.000 TL

5. Dolu Koltuk Seçimi Engelleme
Dolu koltuk seçilmeye çalışıldığında, kullanıcıya "Bu koltuk doludur, seçim yapılamaz!" şeklinde bir uyarı mesajı gösterilir.

6. Sayfa Yenilendiğinde Seçimler Sabit Kalır
Kullanıcı, seçmiş olduğu koltukları kaybetmez. Sayfa yenilense bile yerel depolama (localStorage) kullanılarak seçimler korunur.

7. İşlem Süresi Uyarısı
Kullanıcı, ilk koltuk seçimini yaptıktan sonra 30 saniye boyunca işlem yapmazsa, şu uyarı gösterilir:
“İşleme devam etmek istiyor musunuz?”
Kullanıcı bu uyarıya tepki vermezse, sayfa yenilenir ve yapılan seçimler temizlenir.

8. Form Kontrolü
Rezervasyon formundaki Ad Soyad ve E-posta alanları boş geçilemez.
Kullanıcı, eksik veya hatalı bilgi girdiğinde, hataya ilişkin bir mesaj ile bilgilendirilir.

9. Rezervasyon İşleminin Tamamlanması
Kullanıcı, tüm işlemleri tamamladıktan sonra "İşlemleri Tamamla" butonuna tıklamalıdır.
İşlem başarılı olduğunda, kullanıcıya şu uyarı mesajı gösterilir:
"Rezervasyon işleminiz başarıyla tamamlanmıştır!"

Kullanılan Teknolojiler
HTML, CSS, JavaScript ile geliştirilmiştir.
Veriler için JSON Placeholder API kullanılmıştır.
Yerel depolama (localStorage) ile kullanıcı seçimleri saklanmaktadır.

Nasıl Kullanılır?
Koltuk seçimini yaparak yan tarafta ücreti kontrol edin.
En fazla 3 koltuk seçebileceğinizi unutmayın.
Form alanlarını eksiksiz doldurun.
"İşlemleri Tamamla" butonuna basarak rezervasyonunuzu tamamlayın!

Bu özelliklerle kullanıcıya pratik ve şeffaf bir rezervasyon deneyimi sunulmaktadır.
