"use client"

import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

function Slideshow({ collection }) {
    const contentArray = collection.nfts;
    const [focusedPicIndex, setFocusedPicIndex] = useState(0);

    const handleNavClick = () => {
        if (focusedPicIndex === contentArray.length - 1) { setFocusedPicIndex(0) }
      else {setFocusedPicIndex(focusedPicIndex+1)}
    }
    
    useEffect(() => {
        const delay = Math.floor(Math.random() * 1000) + 3000
        setTimeout(() => {
            if (focusedPicIndex === contentArray.length - 1) { setFocusedPicIndex(0) }
            else {setFocusedPicIndex(focusedPicIndex+1)}
        },delay)
        
    }, [focusedPicIndex])
    
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                position: "relative"
            }}
            onClick={()=>{handleNavClick()}}>
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
                    borderRadius: "10px"
                }}
            
                animate={
                    isFocused || isWaitingPicture ?
                    
                        {
                            scale: 1,
                            zIndex: isWaitingPicture ? 5 : 10,
                            width: "100%",
                            height: "100%"
                        }
                        :
                        {
                            scale: 0.2,
                            zIndex: shiftedIndex + 20,
                            x: shiftedIndex * 25 + "%",
                            right: "0%",
                            top: "40%",
                            width: "100%",
                            height: "100%",
                            transition: isLastPicture ? { duration: 0 } : { duration: 2, ease: "easeInOut" }
                        }
                }
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />
        );
    })}
        </div>
    )
    
}

export default Slideshow;