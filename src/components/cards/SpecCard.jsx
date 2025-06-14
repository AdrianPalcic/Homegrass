import { Ruler } from 'lucide-react'
import React from 'react'

const SpecCard = () => {
    return (
        <div className="spec">
            <Ruler className='image' />
            <div className="content">
                <h4>Visina vlasi</h4>
                <p>35 mm</p>
            </div>
        </div>
    )
}

export default SpecCard