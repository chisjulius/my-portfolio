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

    const url = 'https://chisomjulius.com/'
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
    <div>  
        <div className="container">
            <div className="col s12 l10 offset-l1 postwrap">
                <img  className="responsive-img img2" src={post.mainImage.asset.url} alt={post.mainImage.alt}/> 
                <h5 className="indigo-text center">{post.title}</h5> 
            </div>
        </div>
        <div className="my-content">
            <div className="col s12">
                <div className="blockcontent"><BlockContent blocks ={post.body} projectId="qup41ce2" dataset="production" serializers={serializers}/></div>
            </div>
        </div>
     </div>

    ) :(<div className="center">Loading....</div>)


    
    return (
        <React.Fragment>
            <Navbar/>
                <div className="row">
                    {postToRender}
                </div>
                <div className="disqus" id="disqus_thread"></div>
        </React.Fragment>

    )
}

export default Post
