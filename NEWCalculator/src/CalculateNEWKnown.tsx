import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CalculateNEWKnownForm( { calculateNEW } ){
    const [quantity, setQuanity] = useState(0)
    const [weight, setWeight] = useState(0)

    function handleSubmit(e: any)
    {
        e.preventDefault()
        if(quantity === 0 || weight === 0) return
        console.log("Quanitity is " + quantity)
        console.log("Weight is " + weight)
        calculateNEW(quantity, weight)
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="quantityInput" label="Quantity" className="mb-3">
                    <Form.Control type="text" placeholder="Quantity" onChange={e => setQuanity(+e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel controlId="weightInput" label="Weight" className="mb-3">
                    <Form.Control type="text" placeholder="Weight" onChange={e => setWeight(+e.target.value)} />
                    <Form.Text className="text-muted">
                        Enter the weight in pounds
                    </Form.Text>
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>

        </>
    )
}

export default CalculateNEWKnownForm