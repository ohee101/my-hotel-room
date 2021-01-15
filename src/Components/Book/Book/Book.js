import React from 'react';

const Book = props => {
    const roomSummary = props.book.decorations.map(item => {
        return (
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
            }} key={item.type}>{item.amount}x <span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",
        }}>
            <p>Booking Number: {props.book.id}</p>
            <p>Delivery Address: {props.book.customer.deliveryAddress}</p>
            <hr />
            {roomSummary}
            <hr />
            <p>Total: {props.book.price} BDT</p>
        </div>
    )
}

export default Book;
