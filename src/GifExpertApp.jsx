import { useState } from "react"
import { AddCategory, GifGrid } from "./components"; // cuando hay un index basta con que apunte a la carpeta, por defecto va al index.js



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Java development']);

    const onAddCategory = (newCategory) => {

        // aqui estamos validando que lo que ingreses en el input no sea igual a lo que ya esta en la lista
        if( categories.includes(newCategory) ) return;


        //console.log('valoran');
        setCategories([ newCategory, ...categories]);
        // otra forma de agregar una categoria:
        //setCategories( cat => [...cat, 'Valorant']);
    
    }
    
    
    
    return (
        <>
            {/* titulo */}
            <h1>Buscador de gifs</h1>
            
            
            {/* input */}
            <AddCategory 
            //llamoAsetCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value)} // onNewCategory={ onAddCategory }
            />
            {/* Listado de Gif */}
            {
                categories.map(categorys => (
                <GifGrid key={categorys} categorys={categorys}/>
                ))
            };

            {/* Gif Item */}
        </>
    )
}