
export default function ProductComment({ comment }) {
    return (
        <>
            <div className='rounded border p-3 m-1'>
                <span><span className='fw-bold'>Author: </span>{comment.author}<span className='fw-bold'> Time: </span>{new Date(comment.createdAt).toLocaleString()}</span>
                <hr className="border-2 border-top border-secondary mt-2 md-2" />
                <p>
                    {comment.content}
                </p>
            </div>
        </>
    );
}