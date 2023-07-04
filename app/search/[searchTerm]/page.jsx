import React from 'react';

const fetchByCollection = async (collection) => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
};

    const res = await fetch(`https://api.opensea.io/v2/collection/${collection}/nfts?limit=20`, options)
    const data = await res.json();
    return data;
}



async function SearchResults({params: {searchTerm}}) {

    const searchResults = await fetchByCollection(searchTerm)
    
    return (
        <div>
            You searched for: {searchTerm}
            {searchResults.nfts?.map((result) => {
                return (
                    <>
                        <img key={result.identifier} src={result.image_url} />
                    </>
                    )
            })}
        </div>
    );
}

export default SearchResults;