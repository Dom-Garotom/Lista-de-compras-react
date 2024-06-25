import "./index.css";

export default function InputAddItem(prop) {
  return (
    <form onSubmit={prop.click}>
      <span>
        <label htmlFor="InputItem">Item</label>
        <input type="text" ref={prop.Inputitem} required />
      </span>

      <span>
        <label htmlFor="InputQuantidade">Quantidade</label>
        <input
          id="inputQuantidade"
          type="text"
          ref={prop.InputQuantidade}
          required
        />
      </span>

      <button type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}
