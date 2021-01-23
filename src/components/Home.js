import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import sanityClient from '../client'
import Header from './Header/Header'


const HOme =() =>{
     const [posts, setPosts] = useState([])

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "post"] | order(publishedAt  desc){
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            publishedAt   
        }`)
        .then(data =>{
            console.log(data)
            setPosts(data)
        })
        .catch(console.error);
    }, []);

    const postList = posts.length ?(
        posts.map(post =>(
            <div className="col s12 l6" key={post.slug.current}>
                <div className="card ">
                    <div className="card-image">
                        <img className="img" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                    </div>
                    <div className="card-content">
                        <Link to={'/' + post.slug.current}>
                           <p className="title truncate">{post.title}</p>
                           <p className="indigo-text text-darken-4">{post.publishedAt}</p>
                        </Link>
                    </div>
                </div>
            </div>
        ))
    ) :(
        <div className="col s12">
          <h4 className="center white-text">No posts yet</h4>
       </div>
    )

    return (
        <React.Fragment>
            <Header/>
            <div className="container">
               <div className="row cardspacing">
                  <h4 className="center">My posts</h4>
                      {postList} 
               </div>  
            </div>
        </React.Fragment>

    )
}

export default HOme
