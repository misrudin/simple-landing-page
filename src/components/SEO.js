import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({ title, desc, image = '/favicon.png', alt }) => {
    const formatTile = `${title} | Toko Pa Andhi`;

    const config = {
        title: formatTile,
        description: desc,

        openGraph: {
            title: formatTile,
            description: desc,
            images: [
                {
                    url: image,
                },
            ],
        },
    };

    return <NextSeo {...config} />;
};

export default SEO;
