import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actionCreators';

import Book from './Book/Book';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => {
    return {
        books: state.books,
        bookLoading: state.bookLoading,
        bookErr: state.bookErr,
        token: state.token,
        userId: state.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (token, userId) => dispatch(fetchBooks(token, userId)),
    }
}

class Books extends Component {
    componentDidMount() {
        this.props.fetchBooks(this.props.token, this.props.userId);
    }
    render() {
        let books = null;
        if (this.props.bookErr) {
            books = <p style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
                marginBottom: "10px",
            }}>Sorry Failed to Load Bookings!</p>
        } else {
            if (this.props.books.length === 0) {
                books = <p style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px",
                }}>You have no Bookings!</p>
            } else {
                books = this.props.books.map(book => {
                    return <Book book={book} key={book.id} />
                })
            }

        }
        return (
            <div>
                {this.props.bookLoading ? <Spinner /> : books}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);