import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import sanityClient from '../client'


const HOme =() =>{
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then(data =>{
            console.log(data)
            setPosts(data)
        })
        .catch(console.error);
    }, []);

    const postList = posts.length ?(
        posts.map(post =>(
            <div className="col s12 l6">
                <div className="card" key={post.slug.current}>
                    <div className="card-image">
                        <img className="img" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                    </div>
                    <div className="card-content">
                        <Link to={'/' + post.slug.current}>
                           <p className="truncate">{post.title}</p>
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
        <div className="container">
            <div className="row">
                <h3 className="center">My blog posts</h3>
                    {postList} 
            </div>
           
        </div>
    )
}

export default HOme
