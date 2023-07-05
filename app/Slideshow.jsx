"use client"

import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

function Slideshow({ collection }) {
    const contentArray = collection.nfts;
    const [focusedPicIndex, setFocusedPicIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false)

    
    useEffect(() => {
  let timeoutId;

  if (isHovered) {
    const delay = 2000;

    timeoutId = setTimeout(() => {
      if (focusedPicIndex === contentArray.length - 1) {
        setFocusedPicIndex(0);
      } else {
        setFocusedPicIndex(focusedPicIndex + 1);
      }
    }, delay);
  }

  return () => {
    clearTimeout(timeoutId);
  };
}, [focusedPicIndex, isHovered]);

    
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer"
            }}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={()=>{ setIsHovered(false) }}>
            

            {contentArray.map((entry, index) => {
        const isFocused = focusedPicIndex === index;
        const shiftedIndex = (index + (contentArray.length - 1) - focusedPicIndex) % contentArray.length;
        const isWaitingPicture = focusedPicIndex === (index + 1) % (contentArray.length);
        const isLastPicture = index === (focusedPicIndex + contentArray.length - 2) % (contentArray.length)
        
        return (
            <motion.div
                key={index}
                style={{
                    position: "absolute",
                    backgroundImage: `url(${entry.image_url})`,
                    width: "100%",
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            
                animate={
                    isFocused || isWaitingPicture ?
                    
                        {
                            scale: 1,
                            zIndex: isWaitingPicture ? 5 : 10,
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px"
                        }
                        :
                        {
                            scale: 0.2,
                            zIndex: shiftedIndex + 20,
                            x: shiftedIndex * 25 + "%",
                            right: "-25%",
                            top: "40%",
                            width: "100%",
                            height: "100%",
                            borderRadius: "100px",
                            transition: isLastPicture ? { duration: 0 } : { duration: 1.2, ease: "easeInOut" },
                            borderWidth: "10px"
                            
                        }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
        );
    })}
        </div>
    )
    
}

export default Slideshow;