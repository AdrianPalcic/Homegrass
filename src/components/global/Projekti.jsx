
import ProjektCard from '../cards/ProjektCard';
import ButtonMain from '../buttons/ButtonMain';

const projekti = () => {


    return (
        <div className="projekti-container" >
            <div className='section-title'>
                <h2>Naši najnoviji projekti</h2>
                <h3>Umjetna trava gdje god poželite</h3>
            </div>
            <div className="projekti">
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />

            </div>
            <ButtonMain text="Pregledajte sve projekte" link={"projekti"} />
        </div>
    )
}

export default projekti