import { Layers, Ruler, Square, Weight } from 'lucide-react'
import React from 'react'

const SpecCard = ({ label, value }) => {

    const renderIcon = () => {
        switch (label.toLowerCase()) {
            case "visina":
                return <Ruler className="image" />;
            case "šavovi":
                return <Layers className="image" />;
            case "vlakna":
                return <Square className="image" />;
            case "težina":
                return <Weight className="image" />;
            default:
                return null;
        }
    };

    return (
        <div className="spec">
            {renderIcon()}
            <div className="content">
                <h4>{label}</h4>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default SpecCard