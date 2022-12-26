import React from "react";

// 10.işlem_2 :Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function List({ todos_görevler_list, setTodos_görevler_list, hide_list }) {

  const checkTodo_checkbox = (e) => {
    let newtodos = todos_görevler_list.map((todo) => {      //12.işlem : checkbox tıklandığı anda, .map ile yeni görevler listesi oluşturma. 
      if (parseInt(todo.id) === parseInt(e.target.id)) {    //checkbox tıklanan görevin, id uyum kontrolü ile belirlenmesi (id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik) 
        return { ...todo, checked: !todo.checked };         //Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked:false/true) değiştiriyoruz.
      }
      return todo;
    });
    setTodos_görevler_list(newtodos); // yeni görevler listesi, setTodos_görevler_components ile todos_görevler_components'e set ediliyor.
  };

  const deleteTodo = (e) => {
    setTodos_görevler_list(
      todos_görevler_list.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))  //13.işlem : istenen sonuç id'lerin eşit olmaması (!==). id'ler eşit değilse true, eşitse false verir. Burada delete tıklanan id karşılaştırması eşit çıkacağı için false verir ve .filter ile silinmiş olur.
    //console.log(Boolean(parseInt(todo.id) !== parseInt(e.target.id)))
    );
    
    //.filter çalışan farklı metot (self study)
    //let newtodosdelete = todos_görevler_list.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    //setTodos_görevler_list(newtodosdelete)

  };

  const isComplated = (e) => {
    //14.işlem : sadece gizlenmesi gereken seçim için işlem yapılıyor.
    // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
    // hidden classı atandığında dom listede görünmüyor.
    if (e.checked === true && hide_list === "All") {  //görev tamamlanmış ve filtre hepsi seçili ise className="completed"
      return "completed";
    } else if (e.checked === true && hide_list === "Active") {    //görev tamamlanmış ve filtre tamamlanmayanlar seçili ise tamamlananları gizle
      return "completed hidden";                                        //görev tamamlanmış ve filtre tamamlananlar seçili ise gizle tanımlamasına ihtiyaç yok
    } else if (e.checked === false && hide_list === "Completed") {    //görev tamamlanmamış ve filtre tamamlananlar seçili ise tamamlanmayanları gizle. 
      return "hidden";                                                      //görev tamamlanmamış ve filtre diğer seçimler için gizle tanımlamasına ihtiyaç yok
    }
  };

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos_görevler_list.map((todo) => (
          // 11.işlem : todos_görevler_list map ederek gelen veriler ile liste elemanlarımızı oluşturuyoruz.
          <li key={todo.id} id={todo.id} className={isComplated(todo)}>
            {/* isComplated ile state elemanımızı göndererek classlarımızı belirliyoruz. */}
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkTodo_checkbox}
                // işaretlenme durumu değiştiğinde id kullanarak veriyi state'e set ediyoruz.
              />
              <label>{todo.todo}</label>    {/* görevleri görüntüleme */}
              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
                // Silmek için butona basıldığında id yardımı ile state'den veriyi sildiriyoruz.
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
