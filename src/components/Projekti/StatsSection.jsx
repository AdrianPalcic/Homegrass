import '../../css/stats.css'
import Counter from './Counter'
import { useInView } from 'react-intersection-observer'

function StatsSection() {
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div className="stats-container" ref={ref}>
            <div className="stats-card">
                <h2 className="main-heading">Rezultati kojima smo ponosni</h2>

                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-number">
                            {inView ? <Counter target="50+" /> : 0}
                        </div>
                        <div className="stat-label">Uspješnih projekata</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-number">
                            {inView ? <Counter target="8+" /> : 0}
                        </div>
                        <div className="stat-label">Godina iskustva</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-number">
                            {inView ? <Counter target="80+" /> : 0}
                        </div>
                        <div className="stat-label">Zadovoljnih klijenata</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-number">
                            {inView ? <Counter target="6500+m2" /> : 0}
                        </div>
                        <div className="stat-label">Postavljene umjetne trave</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
