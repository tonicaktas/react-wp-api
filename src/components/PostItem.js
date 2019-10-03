import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios';


export class PostItem extends Component {
    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    componentDidMount(){
        //hämtar bild och author
        const { featured_media, author } = this.props.post; // props från posts.js
        const getImageUrl = axios.get(`http://www.maliganisinj.com/wp-json/wp/v2/media/${featured_media}`);
        const getAuthor = axios.get(`http://www.maliganisinj.com/wp-json/wp/v2/users/${author}`)
    
        Promise.all([getImageUrl, getAuthor]).then(res => {
            
           //lägegr in allt respons i state
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true
                
            })
        })
    }

    render() {
        // använder propen post som har post från loppen i Posts.js 
        const { id, title , excerpt} = this.props.post;
        const { author, imgUrl, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h2 style={{marginBottom: '0'}}>{title.rendered}</h2>
                    <small>Review by <strong>{ author }</strong></small>
                    
                    <div>
                        <img style={{width:'50%', float:'left'}} src={ imgUrl } alt={title.rendered} />
                        <div  dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
                        {
                            // hämtar id som vi använder i route och sedan i api 
                        }
                        <Link to={`/post/${id}`} >Post inlägg</Link>
                    </div>
                    
                </div>
            )
        }
        return null;
        
    }
}

export default PostItem
