import React from 'react';
import './Decoration.css';
import Room1 from '../../../assets/images/room1.jpg';
import Room2 from '../../../assets/images/room2.jpg';
import Room3 from '../../../assets/images/room3.jpg';
import Room4 from '../../../assets/images/room4.jpg';
import Room5 from '../../../assets/images/room5.jpg';


const Decoration = props => {
    let decoration = null;

    switch (props.type) {
        case 'room1':
            decoration = <div><img src={room1} alt="Room 1" /></div>;
            break;
        case 'room2':
            decoration = <div><img src={room2} alt="Room 2" /></div>;
            break;
        case 'room3':
            decoration = <div><img src={room3} alt="Room 3" /></div>;
            break;
        case 'room4':
            decoration = <div><img src={room4} alt="Room 4" /></div>;
            break;
        case 'room5':
            decoration = <div><img src={room5} alt="Room 5" /></div>;
            break;
        default:
            decoration = null;
    }
    return (
        <div className="Decoration">
            {decoration}
        </div>
    )
}

export default Decoration;