"use client"

import { Grid, GridItem, Text, Box } from '@chakra-ui/react';
import React from 'react';
import Slideshow from './Slideshow';


function Collections({ collections }) {
    

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {collections.map((collection) => {
          if(collection.nfts?.length>2){
            return (
              
              <Box
                      key={collection.slug}
                      w={"300px"}
                      h={"300px"}
                      rounded={'10px'}
                      overflow={"hidden"}
                  shadow={"xl"}
                  zIndex={200}
                  
                >
                  <Box
                    position={"absolute"}
                    w={"300px"}
                    zIndex={100}
                    bgGradient='linear(to-b, gray.800, transparent)'
                  roundedTop={"10px"}
                    p={"2"}>
                  <Text
                    color={"white"}>
                    {collection.slug}
                  </Text>
                    </Box>
                      <Slideshow collection={collection}/>
                      
                  </Box>)
              }
            else return null
      })}
    </Grid>
  );
}

export default Collections;