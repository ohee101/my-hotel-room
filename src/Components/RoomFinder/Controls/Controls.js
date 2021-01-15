import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';

const controls = [
    { label: 'Single', type: 'single' },
    { label: 'Double', type: 'double' },
    { label: 'Suite', type: 'suite' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-5" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Single</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>Multiple</button>
        </div>
    )
}


const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#E27D60",
                    color: "white"
                }}><h4>Add Decorations</h4></CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={() => props.decorationAdded(item.type)}
                                removed={() => props.decorationRemoved(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter><h5>Price: <strong>{props.price}</strong> BDT</h5></CardFooter>
                <Button style={{ backgroundColor: "#E27D60" }} disabled={!props.purchasable} onClick={props.toggleModal}>Book Now</Button>
            </Card>
        </div>
    )
}

export default Controls;