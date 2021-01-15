import React, { Component } from 'react';
import Room from './Room/Room';
import Controls from './Controls/Controls';
import Summary from '../Summary/Summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addDecoration, removeDecoration, updatePurchasable } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        decorations: state.decorations,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDecoration: (igtype) => dispatch(addDecoration(igtype)),
        removeDecoration: (igtype) => dispatch(removeDecoration(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
}

class RoomFinder extends Component {
    state = {
        modalOpen: false,
    }

    addDecorationHandle = type => {
        this.props.addDecoration(type);
        this.props.updatePurchasable();
    }

    removeDecorationHandle = type => {
        this.props.removeDecoration(type);
        this.props.updatePurchasable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleCheckout = () => {
        this.props.history.push("/checkout");
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger decorations={this.props.decorations} />
                    <Controls
                        decorationAdded={this.addDecorationHandle}
                        decorationRemoved={this.removeDecorationHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Booking Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary decorations={this.props.decorations} />
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#E27D60" }} onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomFinder);