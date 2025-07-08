import { useRef, useState } from "react";
import "../../css/project-gallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectGallery = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    if (!images || images.length === 0) return null;

    const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

    const goNext = () => {
        if (selectedIndex < images.length - 1) {
            setSelectedIndex((prev) => prev + 1);
        }
    };

    const goPrev = () => {
        if (selectedIndex > 0) {
            setSelectedIndex((prev) => prev - 1);
        }
    };



    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // swipe left
            goNext();
        } else if (touchEndX.current - touchStartX.current > 50) {
            // swipe right
            goPrev();
        }
    };

    return (
        <>
            <div className="project-gallery-wrapper">
                <div className="project-gallery">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.url}
                            alt={img.alt}
                            className="gallery-thumbnail"
                            onClick={() => setSelectedIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedIndex(null)}>
                    <img
                        src={selectedImage.url}
                        alt={selectedImage.alt}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    />

                    {selectedIndex > 0 && (
                        <button className="lightbox-nav left" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
                            <ChevronLeft size={40} />
                        </button>
                    )}

                    {selectedIndex < images.length - 1 && (
                        <button className="lightbox-nav right" onClick={(e) => { e.stopPropagation(); goNext(); }}>
                            <ChevronRight size={40} />
                        </button>
                    )}
                    <p className="swipe-instru">Povucite prstom lijevo ili desno </p>
                </div>
            )}
        </>
    );
};

export default ProjectGallery;
