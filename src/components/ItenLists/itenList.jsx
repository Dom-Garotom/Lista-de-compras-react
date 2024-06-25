import "./index.css";

export default function ItenList(prop) {
  return (
    <div className="container">
      {prop.conclude === true ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <button className="buttonDone" onClick={prop.onClick}></button>
      )}

      <div className="conteinerInfo">
        <div>
          <p className={prop.conclude === true ? "concludeIten" : ""}>
            {prop.itenName}
          </p>
          <span>{prop.quantidade}</span>
        </div>
        
          <button className="buttonExlcude" onClick={prop.clickRemove}>
            <i className="fa-solid fa-trash"></i>
          </button>
        
      </div>
    </div>
  );
}
