import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';

function Search(props) {
    const [text, setText] = useState('')
    const getCard = () => {
        props.getCard(text)        
    }
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Search for Your Card" />
                </Col>
                <Col>
                    <Button onClick={() => getCard()} variant="primary">Primary</Button>

                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search