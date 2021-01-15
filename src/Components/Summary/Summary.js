import React from 'react';

const Summary = props => {
    const decorationSummary = props.decorations.map(item => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: "capitalize" }}>{item.type}</span>: {item.amount}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {decorationSummary}
            </ul>
        </div>
    )
}

export default Summary;