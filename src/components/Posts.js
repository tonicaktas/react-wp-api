import React, { Component } from 'react'
import axios from 'axios';
import PostItem from './PostItem';

export class Posts extends Component {
    state = {
        posts:[],
        isLoaded:false
    }

    componentDidMount(){
        axios.get('http://www.maliganisinj.com/wp-json/wp/v2/posts')
        .then(responese => {
            this.setState({
                posts:responese.data, 
                isLoaded: true})
        })
        .catch(err => console.log(err));
    }
    
    render() {
        const {posts, isLoaded } = this.state;
        console.log(this.state);

        if(isLoaded){
            return (
                <div>
                   {//loopar igenom alal posts
                    }
                    { posts.map(post => (
                        // Lägger in prop post som används i PostItem.js och hätar PostItem
                        <PostItem key={post.id} post={post} />
                        )
                    ) }
                </div>
            );
        }  
        return <h3>Loading...</h3>    
    } 
}

export default Posts
