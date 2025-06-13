
import ProjektCard from '../cards/ProjektCard';
import ButtonMain from '../buttons/ButtonMain';

const projekti = ({ listing }) => {


    return (
        <div className="projekti-container" >
            {
                !listing ? (
                    <div className='section-title'>
                        <h2>Naši najnoviji projekti</h2>
                        <h3>Umjetna trava gdje god poželite</h3>
                    </div>
                ) :
                    <div className="section-title2">
                        <h2>Inspiracija za vaš vrt</h2>
                        <h3>Pogledajte kako izgleda umjetna trava HomeGrass u stvarnim vrtovima, na terasama i igralištima diljem Hrvatske.</h3>
                    </div>

            }
            <div className="projekti">
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />

            </div>
            {
                !listing && <ButtonMain text="Pregledajte sve projekte" link={"projekti"} />
            }
        </div>
    )
}

export default projekti