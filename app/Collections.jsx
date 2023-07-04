"use client"

import { Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import Slideshow from './Slideshow';


function Collections({ collections }) {
    

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {collections.map((collection) => {
          if(collection.nfts?.length>4){
              return(
              <GridItem
                      key={collection.slug}
                      w={"200px"}
                      h={"200px"}
                      bg={"blue.500"}
                    overflow={"hidden"}>
                      <Slideshow collection={collection}/>
                      
                  </GridItem>)
              }
            else return null
      })}
    </Grid>
  );
}

export default Collections;