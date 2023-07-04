"use client"

import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

function Slideshow({ collection }) {
    const contentArray = collection.nfts
    const [focusedPicIndex, setFocusedPicIndex] = useState(0);

    useEffect(() => {
        setTimeout(()=>{setFocusedPicIndex(focusedPicIndex+1)},1000)
    },[focusedPicIndex])
    
    return (
        <div
            style={{
                height: "100%",
                width: "100%"
        }}>
            {contentArray.map((entry, index) => {
        const isFocused = focusedPicIndex === index;
        const shiftedIndex = (index + (contentArray.length - 1) - focusedPicIndex) % contentArray.length;

        const isWaitingPicture = focusedPicIndex === (index + 1) % (contentArray.length);
        
        const isLastPicture = index === (focusedPicIndex + contentArray.length - 2) % (contentArray.length)
        
        return (
            <motion.div
                key={index}
                style={{
                
                    backgroundImage: `url(${entry.image_url})`,
                    width: "100%",
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            
                animate={
                    isFocused || isWaitingPicture ?
                    
                        {
                      
                            zIndex: isWaitingPicture ? 5 : 10,
                            width: "100%",
                            height: "100%"
                        }
                    
                        :

                        {
                            scale: 0.2,
                            zIndex: shiftedIndex + 20,
                            x: shiftedIndex * 5 + "%",
                            y: shiftedIndex * 5 + "%",
                            right: "-30vw",
                            top: "0vh",
                            width: "1000px",
                            height: "1200px",
                            borderRadius: "20px",
                            transition: isLastPicture ? { duration: 0 } : { duration: 0.5, ease: "anticipate" }
                  
                        
                        }
                }
                transition={{ duration: 0.5, ease: "anticipate" }}
            />
        );
    })}
        </div>
    )
    
}

export default Slideshow;