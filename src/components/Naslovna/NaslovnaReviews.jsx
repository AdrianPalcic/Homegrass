import React from 'react'

const NaslovnaReviews = ({ listing }) => {
    return (
        <div className="naslovna-reviews">
            {
                !listing ? (
                    <h2>Povjerenje koje traje</h2>
                ) : <h2>Klijenti zadovoljni svojim vrtom</h2>
            }
            <div className="reviews-container">
                <div className="review">
                    <div className='quote'>
                    </div>
                    <p className='text'>"Nakon godina borbe s održavanjem travnjaka, odlučili smo ugraditi HomeGrass umjetnu travu i nismo požalili ni sekunde. Izgleda nevjerojatno prirodno, a vrt nam konačno izgleda uredno kroz cijelu godinu. Postavljanje je bilo brzo i profesionalno. Preporučujem svima!"</p>
                    <p className='name'> <strong>Marija K.,</strong> Zagreb</p>
                </div>
                <div className="review">
                    <div className='quote'>
                    </div>
                    <p className='text'>"Imamo dvoje male djece i psa koji obožavaju biti vani. S HomeGrass travom nemamo više problema s blatom i suhim travnjakom. Meka je, sigurna i ne zahtijeva gotovo nikakvo održavanje. Svaka čast ekipi na kvaliteti i usluzi!"</p>
                    <p className='name'> <strong>Ivan M.,</strong> Zagreb</p>
                </div>
                <div className="review">
                    <div className='quote'>
                    </div>
                    <p className='text'>"Stan u gradu s betonskom terasom pretvorili smo u pravo malo zeleno utočište zahvaljujući HomeGrass umjetnoj travi. Gosti stalno pitaju gdje smo je nabavili jer izgleda toliko stvarno. Veliko hvala na savjetovanju i brzoj montaži."</p>
                    <p className='name'> <strong>Ana P.,</strong> Split</p>
                </div>
            </div>
        </div>
    )
}

export default NaslovnaReviews