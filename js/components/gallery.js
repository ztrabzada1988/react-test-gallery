import React from 'react';
import Image from './image';

export default function Gallery (props) {
    const images = props.images.map(function(image, index) {
        return <Image url={image.url} description={image.description}
    });

    return (
        <div className="gallery">{images}</div>
    );
};
