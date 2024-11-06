import React from 'react';
import axios from 'axios';


const DeleteArticle = ( {id} ) => {

    const handleDelete = () => {
        axios.delete('http://localhost:3003/article/' + id)
        window.location.reload();
    };

    return (
        <button
            onClick={()=> {
                if (window.confirm('Voulez vous vraiment supprimer cet article ?')) {
                    handleDelete();
                }
            }}
        
        >Supprimer</button>
    );
};

export default DeleteArticle;