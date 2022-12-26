import {useState} from 'react'

import Form from './Form'
import List from './List'
import Footer from "./Footer";

function Components() {

    const [todos_görevler_components, setTodos_görevler_components] = useState( //4.işlem : [todos_görevler_components, setTodos_görevler_components] tanımı form/index.jsx dosyasında da tanımlanabilirdi ancak, todos_görevler_components listesi list/index.jsx dosyasında da kullanılacağı için burada tanımlanmalı.
        JSON.parse(localStorage.getItem("todos_localStorage_key")) //9.işlem : buradaki tanımlamanın amacı, sayfa yenilendiğinde önceden kaydedilen localstorage verilerinin silinmeden kullanılması, yeni girilen görevlerin todos_görevler_components değişkenine tanımlanması değil.
        || []   // "||" (or/veya) ilk doğru değeri arar (phyton and/or çalışma mantığı)
      );

        // Listelemede footerdan gelen bilgiyi alabilmek için hide adında string değer tutan bir state oluştuyoruz. Varsayılan değeri 'All'
  const [hide_components, setHide_components] = useState("All");

  return (
    <div className="todoapp">
    {/* import edilen componentleri tanımlama ("Form") */}
        <Form todos_görevler_form={todos_görevler_components} setTodos_görevler_form={setTodos_görevler_components}/>
        {/* 5.işlem_1 : components/index.jsx'de tanımlanan setTodos_görevler_components state'i, form/index.jsx dosyasına setTodos_görevler_form adında tanımlanıyor. Bu tanımlama ile, 
        setTodos_görevler_form state'i her çalıştığında aynı setTodos_görevler_components state'i çalışmış gibi components/index.jsx dosyasında tanımlı todos_görevler_components değişken değeri set edilmiş oluyor. 
        todos_görevler_components değişkeni, todos_görevler_form değişkenine tanımlı olduğu için, değer todos_görevler_form değişkenine de set ediliyor. 
        setTodos_görevler_components için her ne tanım yapılırsa, anında setTodos_görevler_form'a set edilmiş olur. */}
        <List todos_görevler_list={todos_görevler_components} setTodos_görevler_list={setTodos_görevler_components} hide_list={hide_components} />{" "}
        {/* 10.işlem_1 : todos_görevler_components ve setTodos_görevler_components tanımlarını List/index.jsx'e gönderme*/}
        <Footer todos_görevler_footer={todos_görevler_components} setTodos_görevler_footer={setTodos_görevler_components} setHide_footer={setHide_components} />{" "}
        {/* 15.işlem_1 : todos_görevler_components ve setTodos_görevler_components tanımlarını Footer/index.jsx'e gönderme*/}
    </div>
  )
}

export default Components