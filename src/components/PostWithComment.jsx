import CommentList from "./CommentList"

export default function PostWithComment ({post}) {
    return (
        <div className="post-with-comment">
            <h4 className="title">{post.title}</h4>
            <p className="post-by">by userId: {post.userId}</p>
            <p className="post-body">
                {post.body}
            </p>
            <h6 className="comments-header">Comments:</h6>
            <CommentList comments={post.relatedComments}/>            
        </div>
    )
}