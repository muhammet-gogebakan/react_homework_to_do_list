import { useState } from "react"; // State oluşturabilmek için react kütüphanesi altından 'useState' modülünü import ediyoruz.

// 15.işlem_2 : Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function Footer({ todos_görevler_footer, setTodos_görevler_footer, setHide_footer }) {
  // 16.işlem : işaretlenme durumuna göre filtre oluşturuyoruz.
  const unCompleted = todos_görevler_footer.filter((check) => check.checked === false);

  // 17.işlem : Footer altında oluşturulan butonların seçilme durumu için array bir state oluşturuyoruz.
  const [select, setSelect] = useState("selected", "", "");

  // 19.işlem : işaretlenmiş olanları sildirmek için yine filtre kullanıyoruz.
  const clearCompleted = (e) => {
    setTodos_görevler_footer(todos_görevler_footer.filter((todo) => todo.checked === false));
  };

  // 18.işlem : Footer altındaki butonlar tıklandığında selected clasını atayabilmek için hide_footer state'ine butonun id'sini atıyoruz.
  // Tıklanan butona göre hide_footer state'ine de değer atıyoruz.
  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide_footer("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide_footer("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide_footer("Completed");
        break;
      default:
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}
        {/* Tamamlanmamış todoların sayısını alabilmek için filtre ile oluşturdumuz array'in eleman sayısını kullanıyoruz. */}
      </span>

      {/* Yukarıda oluştuğumuz select state'inin değerine göre butonların classlarını belirliyoruz. */}
      <ul className="filters">
        <li>
          <a className={select[0]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton}>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
