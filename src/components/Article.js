import React, {useState} from 'react';
import axios from 'axios';
import DeleteArticle from './DeleteArticle';


const Article = ({ article }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR",{
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: 'numeric',
            minute:'numeric'
        })
        return newDate
    }

    const data = {
        author: article.author,
        content: editedContent ? editedContent : article.content,
        date: article.date,

    }

    const handleEdit = () => {
        axios.put('http://localhost:3003/article/' + article.id , data); 
        setIsEditing(false);
    };

    return (
        <div 
            className="article"
            style={{background: isEditing ? "#f3feff" : 'white'}}
        >
            <div className="card-header">
                <h3> {article.author} </h3>
                <em> Posté le {dateParser(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea onChange={(e) => setEditedContent(e.target.value)} autoFocus defaultValue={editedContent ? editedContent : article.content}></textarea>
            ):
            (<p> {editedContent ? editedContent : article.content} </p>
            )}

            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}> Valider </button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <DeleteArticle id={article.id} />

            </div>
        </div>
    ); 
};

export default Article;