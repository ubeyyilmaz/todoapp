import React from 'react'



const Header = ({ InputText, setInputText, todos, setTodos }) => {
    // Propları burada alacağız
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (InputText === "") {
            alert("Lütfen veri girin")
            return;
        };
        setTodos([
            ...todos, // önceki todoları korumak için bunu yazdık
            { text: InputText, completed: false, id: Math.random() * 1000 } // burada obje oluşturuyoruz
        ]);
        setInputText("") // inputu temizlediğimiz yer
    };




    return (
        <div>
            <header className='header' >
                <h1>Görevler</h1>
                <form onSubmit={submitTodoHandler}>
                    <input
                        className='new-todo'
                        placeholder='Görev belirleyiniz'
                        autoFocus
                        value={InputText}
                        onChange={inputTextHandler}
                    />
                </form>
            </header>

        </div>
    )
}

export default Header;
