import {useState} from 'react'
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddNewCategory = (newCategory) =>{
        if(  categories.includes( newCategory )  ) return;
        setCategories(  [  newCategory,... categories   ] );
    }

  return (
    <>
        <h1>GifExpertApp</h1> 
        <AddCategory onAddNewCategory={onAddNewCategory}  />
    
        { categories.map(  category => ( 
                    <GifGrid  key={category}  
                            category={category}  />    
            )   ) }


   
    </>
  )
}


