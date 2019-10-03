import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export class PostPage extends Component {
    state = {
        post: {},
        isLoaded: false
    }


    componentDidMount(){
        //hämtar res från id i router via props
        // id är i Route paramater och vi kan nå den med props
        axios.get(`http://www.maliganisinj.com/wp-json/wp/v2/posts/${this.props.match.params.id}`)
        .then(res => this.setState({
            post: res.data,
            isLoaded: true

        }))
        .catch(err => console.log(err));
    }

    render() {
        //destructuring a state 
        const { post, isLoaded } = this.state
        if(isLoaded){

            return (
                <Fragment>
                    <Link to="/">Go Back</Link>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                </Fragment>
            )
        }
        return <h3>Loading....</h3>
    }
    
}

export default PostPage
