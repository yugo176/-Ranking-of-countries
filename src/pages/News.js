import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import Article from '../components/Article';


const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);


    useEffect(()=> {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:3003/article')
            .then( (res) => setNewsData(res.data) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // GESTION D'ERREUR ET AJOUT DE DONNEES DANS LA BASE 
        
        if (content.length < 140 ) {
            setError(true);
        } else {

            axios.post('http://localhost:3003/article', {
                author,
                content,
                date: Date.now()
            }).then(()=> {
                setError(false);
                setAuthor("");
                setContent("");
                getData();
            })
        }
    }
    
    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1> News </h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Noms' 
                    onChange={(e) => setAuthor (e.target.value)}
                    value={author}
                />
                <textarea
                    style={{border: error ? "1px solid red" : '2px solid #63dbff' }}
                    onChange={(e) => setContent (e.target.value)} 
                    placeholder='Message' 
                    value={content} >

                </textarea>
                { error && <p>Veuillez insérer 140 caractère au minimum</p>}
                <input id='envoyer' type="submit" value="Envoyer" />
            </form>
            <ul> {newsData
                .sort((a,b) => b.date - a.date)
                .map((article) => (
                <Article key = {article.id} article = {article} />
            ))}  </ul>
        </div>

    );
};

export default News;