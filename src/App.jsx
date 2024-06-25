import { useRef } from "react";
import "./App.css";
import InputAddItem from "./components/inputAdd/InputAddItem";
import ItenList from "./components/ItenLists/itenList";
import { useState } from "react";

function App() {
  var inputQuantidade = useRef();
  var inputIten = useRef();
  const [listItens, setListItens] = useState([]);
  const [listDone, setListDone] = useState([]);

  function addIten(event) {
    event.preventDefault();

    if (
      inputQuantidade.current.value === "" ||
      inputIten.current.value === ""
    ) {
      ("");
    } else {
      var iten = {
        id: listItens.length + 1,
        nome: inputIten.current.value,
        quantidade: inputQuantidade.current.value,
      };

      setListItens((previeList) => [...previeList, iten]);

      inputIten.current.value = "";
      inputQuantidade.current.value = "";
    }
  }

  function completeIten(index) {
    setListDone([...listDone, listItens[index]]);

    let newArray = listItens.filter((item) => item !== listItens[index]);
    setListItens(newArray);
  }

  function removeIten(index) {
    let newArray = listItens.filter((item) => item !== listItens[index]);
    setListItens(newArray);
  }

  function removeItenDone(index) {
    let newArray = listDone.filter((item) => item !== listDone[index]);
    setListDone(newArray);
  }


  return (
    <section>
      <div className="Card">
        <div className="containerHero">
          <div className="containerIcon">
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
          <h1>Lista de compras</h1>
          <span>Facilite sua ida ao supermercado!</span>
        </div>

        <InputAddItem
          Inputitem={inputIten}
          InputQuantidade={inputQuantidade}
          click={addIten}
        />

        {listItens.length > 0 ? (
          <ul className="listItens">
            {listItens.map((item, index) => (
              <ItenList
                key={item.id}
                itenName={item.nome}
                onClick={() => completeIten(index)}
                quantidade={item.quantidade}
                clickRemove={() => removeIten(index)}
              />
            ))}
          </ul>
        ) : (
          ""
        )}

        {listDone.length <= 0 ? "" : <h2>Itens já comprados</h2>}

        <ul className="listComplete">
          {listDone.map((item, index) => (
            <ItenList
              key={item.id}
              itenName={item.nome}
              onClick={() => completeIten(index)}
              quantidade={item.quantidade}
              conclude={true}
              clickRemove={() => removeItenDone(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
