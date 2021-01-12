import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from './Navbar/Navbar'
import serializers from './serializers'

const Post =() =>{
     const [post, setPost] = useState(null)
    const {slug} = useParams();

    useEffect(() =>{
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then(data =>{
            setPost(data[0])
        })
        .catch(console.error);
    }, [slug])
  

    const postToRender = post ?(
        <div className="col s12 l10 offset-l1">
          <div className="card">
              <div className="card-image">
                  <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
              </div>
             <div className="card-content">
                <h5 className="title indigo-text">{post.title}</h5>
                <div className="blockcontent"><BlockContent blocks ={post.body} projectId="qup41ce2" dataset="production" serializers={serializers}/></div>
             </div>
        </div>
        </div>

    ) :(<div className="center">Loading....</div>)
    
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container  my-content">
                <div className="row">
                    {postToRender}
                </div>
            </div>
        </React.Fragment>

    )
}

export default Post
