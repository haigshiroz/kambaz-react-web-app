import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (index: number) => {
        setArray(array.filter((_, i) => i !== index));
    };

    return (
        <div id="wd-array-state-variables" >
            <h2>Array State Variable</h2>

            <Button className="btn-success m1" onClick={addElement}>Add Element</Button>

            <div className="border d-flex flex-shrink m-1">
                <ListGroup>
                    {array.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <span>{item}</span>
                            <Button className="btn-danger ms-5 float-end" onClick={() => deleteElement(index)}>
                                Delete
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <hr />
        </div>
    );
}