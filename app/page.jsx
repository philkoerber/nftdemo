import Collections from "./Collections"

const fetchAllCollections = async () => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
};

    const res = await fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=100', options)
    const data = await res.json();
    return data;
}

const fetchByCollection = async (collection) => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
};

    const res = await fetch(`https://api.opensea.io/v2/collection/${collection}/nfts?limit=20`, options)
    const data = await res.json();
    return data;
}

export default async function Home() {

  let collections = [];

  await fetchAllCollections().then(async (data) => {
    const fetchCollectionPromises = data.collections.map(async (collection) => {
      const collectionNfts = await fetchByCollection(collection.slug);
      return {
        slug: collection.slug,
        nfts: collectionNfts.nfts,
      };
    });

    collections = await Promise.all(fetchCollectionPromises);
  });
 
  return (
    <div>
      <Collections collections={collections}/>
    </div>
  )
}