import '../../css/stats.css'
function StatsSection() {

    return (
        <div className="stats-container">
            <div className="stats-card">


                {/* Main heading */}
                <h2 className="main-heading">
                    Rezultati kojima smo ponosni
                </h2>

                {/* Stats grid */}
                <div className="stats-grid">
                    {/* Stat 1 */}
                    <div className="stat-item">
                        <div className="stat-number">120+</div>
                        <div className="stat-label">Uspješnih projekata</div>
                    </div>

                    {/* Stat 2 */}
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Godina iskustva</div>
                    </div>

                    {/* Stat 3 */}
                    <div className="stat-item">
                        <div className="stat-number">200+</div>
                        <div className="stat-label">Zadovoljnih klijenata</div>
                    </div>

                    {/* Stat 4 */}
                    <div className="stat-item">
                        <div className="stat-number">1000+m2</div>
                        <div className="stat-label">Postavljene umjetne trave</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsSection