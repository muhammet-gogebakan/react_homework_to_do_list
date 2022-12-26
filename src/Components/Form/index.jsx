import {useState, useEffect} from 'react'   //2.işlem_1 : useState import
                                              //useState/useEffect süslü parantez içinde kullanılmalı

function Form({todos_görevler_form, setTodos_görevler_form}) {  //5.işlem_2 : components/index.jsx'de yapılan tanımlamalar, burada Form/index.jsx dosyası için todos_görevler_form ve setTodos_görevler_form props'larına set edilmiş oluyor

    //console.log(setTodos_görevler_form)

    const [form_yeni_görev_ekleme, setForm_yeni_görev_ekleme] = useState(""); //2.işlem_2 : girilecek görevi tutmak için state tanımlama
    //console.log(form_yeni_görev_ekleme)

        const onSubmit_yeni_görev_ekleme_func = (e) => {  //6.işlem : submit fonksiyonunu tanımlama
          e.preventDefault(); // 6.işlem_1 : Submit yapıldığında sayfanın yenilenmesini durduruyoruz. "e" (event) parametresi kullanmadan preventDefault()'ı kullanamayız.
          
          if (form_yeni_görev_ekleme === "") {
            // 6.işlem_2 : Eğer form içeriği boşsa false döndürüyoruz. Böylece state içerisine boş eleman atamamış oluyoruz.
            return false;
          }
        
          // 6.işlem_3 : Form içerisinden gelen veriyi set ediyoruz/ekliyoruz.
          setTodos_görevler_form([  //buradaki tanımlama ile todos_görevler_components değeri set ediliyor. todos_görevler_components set edildiği için todos_görevler_form da set edilmiş oluyor.
            ...todos_görevler_form, // State içerisindeki verileri kaybetmemek için ...todos_görevler_form yazıyoruz.
            {
              id: todos_görevler_form.length > 0 ? todos_görevler_form[todos_görevler_form.length - 1].id + 1 : 0, // Id çakışması olmaması için todos_görevler_form'un son elemanının id'sine bakıp +1 ekliyoruz. Eğer eleman yoksa ilk id 0 oluyor.
              todo: form_yeni_görev_ekleme,
              checked: false, // Varsayılanı false yapıyoruz ki checkbox işaretsiz gelsin.
            },
          ]);
        };
    
      useEffect(() => { //8.işlem : setTodos_görevler_form ile todos_görevler_components değer ataması yapıldığı anda todos_görevler_form değişkeni de set edildiği için, useEffect tetikleniyor. 
        setForm_yeni_görev_ekleme("");  //form_yeni_görev_ekleme sıfırlanıyor, böylece input alan boşaltılıyor.
        localStorage.setItem("todos_localStorage_key", JSON.stringify(todos_görevler_form));  //todos_görevler_form verisi todos_localStorage_key'e ekleniyor.
      }, [todos_görevler_form]); //todos_görevler_form değişkeni set edilmesi ile useEffect'i tetikleme.

      

  return (
    <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit_yeni_görev_ekleme_func}> {/* //6.işlem : submit fonksiyonunu tanımlama */}
            <input  //1.işlem : görev girişi için input tanımlama
                className="new-todo"
                type="text" 
                placeholder='What needs to be done?'
                autoFocus   //sayfa yüklenir yüklenmez input kutusunun seçili olmasını sağlıyor
                value={form_yeni_görev_ekleme}  //useEffect ve setForm_yeni_görev_ekleme("") ile değeri sıfırlanan form_yeni_görev_ekleme değişkenini tanımlayarak input alanı boşaltma
                onChange={(e) => setForm_yeni_görev_ekleme(e.target.value)} //3.işlem : yeni bir görev girildiği anda bu görev form_yeni_görev_ekleme'ye set ediliyor
            />
        </form>
        </header>
  )
}

export default Form