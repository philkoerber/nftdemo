import React from 'react';


const fetchCollections = async () => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
};

    const res = await fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
    const data = await res.json();
    return data;
}

async function Collections() {

    const data = await fetchCollections();
    console.log(data.collections)

    return (
        <div>
            {data.collections.map((result) => {
                if (result.slug) {
                    return <h1>{result.slug}</h1>     
                }
            else{return null}})}
        </div>
    );
}

export default Collections;