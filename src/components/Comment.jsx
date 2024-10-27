import "./Comment.css"

export default function Comment( {comm} ) {
    return (
        <>
            <div className="comment">
                <b>name:</b> {comm.name} <br />
                <b>email:</b> {comm.email} 
                <p>
                    {comm.body}
                </p>
            </div>
        </>
    )
}