import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddCommentForm({ onNewComment }) {
    const [author, setAuthor] = useState();
    const [content, setContent] = useState();

    const createComment = (e, newAuthor, newContent) => {
        if (!newContent) {
            alert('You must enter some text to leave a new comment!')
            return
        }

        if (!newAuthor) {
            alert('You must enter your name to leave a new comment!')
            return
        }

        const newComment = ({
            author: newAuthor,
            content: newContent,
            createdAt: new Date(),
        })

        onNewComment(newComment)

        console.log(newContent)
        alert("Your comment has been successfully added! Text: " + newContent)

        e.target.reset()
        setAuthor('')
        setContent('')
        e.preventDefault()
    }

    return (
        <div className='rounded border p-3 m-1'>
            <Form onSubmit={(e)=> {createComment(e, author, content)}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => { setAuthor(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment on the product:</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => {  setContent(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
            </Form>
        </div>
    );
}