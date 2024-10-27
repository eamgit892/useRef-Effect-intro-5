import "./CommentList.css"
import Comment from "./Comment"

export default function CommentList( {comments} ) {
    return (
        <>
            <div className="comment-list">
                {comments.map( c => (<Comment comm={c}/>) )}
            </div>
        </>
    )
}