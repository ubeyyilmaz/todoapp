import React from 'react'




    const TodoFooter = ({ todos, setTodos, status, setStatus }) => {
        const unCompleted = todos.filter((todo) => todo.completed === false); //completed olmayanları filtreleyip unCompleted değişkenine atama yaptık. İtemları sol kısmında göstermek için
        const completed = todos.filter((todo) => todo.completed === true); // completed olanları filtreleyip completed değişkenine atıyoruz. clear completed butonunda göstermek için. completed.length == 0 ise clear completed butonu gizleniyor

        const clearCompleted = (e) => {
            setTodos(todos.filter((todo) => todo.completed === false)); //  completed olanları filtreleyip setTodos ile todos değişkenine atıyoruz. Clear completed butonuna basınca completed olanlar siliniyor.
            e.preventDefault();
        }
        const clickStyle = (e) => {
            setStatus(e.target.id); // e.target.id = all, active, completed alıp status değişkenine atıyoruz. Ardından app.jsde swtich'e statusu atayıp case ile status değişkenini kontrol ediyoruz.
        }





        return (
            <div>
                <footer className='footer'>
                    <span className='todo-count' >
                        <strong>
                            {unCompleted.lenght}
                        </strong>
                    </span>

                    <ul className='filters' >
                        <li>
                            <span
                                onClick={clickStyle}
                                className={status === "all" ? "selected" : ""}
                                id='all'
                            >
                                Hepsi

                            </span>
                        </li>
                        <li>
                            <span
                                onClick={clickStyle}
                                className={status === "active" ? "selected" : ""}
                                id='active'
                            >
                                Aktif Görevler
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={clickStyle}
                                className={status === "completed" ? "selected" : ""}
                                id='completed'
                            >
                                Tamamlananlar
                            </span>
                        </li>

                    </ul>

                    <button
                        className={completed === 0 ? "hidden" : "clear-completed"}
                        onClick={clearCompleted}
                    >
                        Bitenleri sil
                    </button>

                </footer>

            </div>
        )
    }


export default TodoFooter;
