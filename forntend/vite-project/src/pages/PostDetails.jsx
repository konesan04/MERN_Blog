import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PostDetails = () => {


const [post, setPost] = useState()
const {id} = useParams()


const fetchPost =  async () => {
    try {

        const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
        setPost(response.data)
    }
    catch(error){
        console.error("error in fetching: ", error)

    }
}

useEffect(() => {
    fetchPost()
},[])




if(!post) {
    return <h1>Loading...</h1>

}
const formatedDate = Intl.DateTimeFormat("en-us", {
    month:"long",
    day: "numeric",
    year:"numeric"
}).format(new Date(post.createdAt))



return (
    <div><main class="container my-4">
    <div class="row">
        <article class="col-lg-8">
            <h2 class="blog-post-title">{post.title}</h2>
            <p class="blog-post-meta">{formatedDate}<a href="#">{post.author}</a></p>
            {/* <p>
  {post?.createdAt
    ? new Intl.DateTimeFormat("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date(post.createdAt))
    : "Loading..."}
    <a href="#">{post.author}</a>
</p> */}


            <img class="mb-3 img-fluid" src={post.image} alt="" />
            {/* <!-- Blog post content --> */}
            <div class="blog-post-content">
                <p>{post.content}</p>
                
            </div>
        </article>

        
    </div>
</main></div>
  )
}

export default PostDetails