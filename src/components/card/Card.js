const Card = ({ titulo, descricao, Icone }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
        {Icone && <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{<Icone />}</div>}
     
          </div>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
         
        </div>
      </div>
    );
  };