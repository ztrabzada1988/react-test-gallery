require('babel-polyfill');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const Should = chai.should();

import Image from '../js/components/image';
describe('Image component', function() {
    it('Renders the image and description', function() {
        const url = "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";
        const description = "Piture of waterfall";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

import Gallery from '../js/components/gallery';
describe('Gallery component', function() {
    it('Renders the gallery', function() {
        const url1 = "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";
        const description1 = "Piture of waterfall";
        const url2 = "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";
        const description2 = "Piture of nature";

        const images = [<Image url={url1} description={description1} />,
                        <Image url={url2} description={description2} />]

        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
    });
});
