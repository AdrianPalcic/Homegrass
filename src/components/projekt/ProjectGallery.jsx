import { useState } from "react";
import "../../css/project-gallery.css"

const ProjectGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="project-gallery">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img.url}
                        alt={img.alt}
                        className="gallery-thumbnail"
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage.url} alt={selectedImage.alt} />
                </div>
            )}
        </>
    );
};

export default ProjectGallery;
