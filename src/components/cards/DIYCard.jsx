function DIYCard() {
  return (
    <div className="why-diy">
      <div className="section-title">
        <h2>Why DIY Section</h2>
      </div>

      <div className="card-container">
        <div className="material-card">
          <div className="card-content">
            <h3 className="card-title">Material 1</h3>
            <p className="card-description">Potential description of materials</p>
          </div>
        </div>

        <div className="material-card">
          <div className="card-content">
            <h3 className="card-title">Material 2</h3>
            <p className="card-description">Another material description</p>
          </div>
        </div>

        <div className="material-card">
          <div className="card-content">
            <h3 className="card-title">Material 3</h3>
            <p className="card-description">Third material description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DIYCard;