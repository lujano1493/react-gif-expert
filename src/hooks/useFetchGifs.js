import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = (category) => {
 
    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const getImages = async() => {
        const newImages= await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=>{
        getImages();
    }, [] ); 

    return {images,isLoading };


}
 
