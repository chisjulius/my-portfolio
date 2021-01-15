import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from './Navbar/Navbar'
import serializers from './serializers'

const Post =(props) =>{
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

    const url = 'https://chisomjulius.netlify.app/'
    var disqus_config = function () {
        this.page.url = `${url + props.location.pathname}`;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = post.slug.current; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://chisomjulius.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
  

    const postToRender = post ?(
        <div className="col s12">
            <img  className="responsive-img" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>    
            <h5 className="indigo-text">{post.title}</h5>
            <div className="blockcontent"><BlockContent blocks ={post.body} projectId="qup41ce2" dataset="production" serializers={serializers}/></div>
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
            <div id="disqus_thread"></div>
        </React.Fragment>

    )
}

export default Post
