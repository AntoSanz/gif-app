import { useEffect, useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {
    useEffect(() => {
        document.title = 'GifExpertApp';
    }, []);

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //Detectar elementos repetidos
        if (hasDuplicates(categories, newCategory)) return;
        setCategories([newCategory, ...categories]); //Añade al principio de la lista una categoría
    };

    const hasDuplicates = (array, el) => {
        el = el.toLowerCase();
        const duplicates = array.map((e) => e.toLowerCase()).includes(el);
        console.log(`Hay duplicados: ${duplicates}`);
        return duplicates;
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/* Listado de GIFs */}
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
