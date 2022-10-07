import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../components/Price';
import Rating from '../components/Rating';

const BookInfo = ({books}) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" /> Books
                            </Link>
                            {/* <Link to="/book" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link> */}
                            <div className="book__selected">
                                <figure className="book__selected--figure">
                                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                                </figure>
                                <div className="book__selected--description">
                                    <h2 className="book__selected--title">Crack</h2>
                                    <Rating rating="4.5" />
                                    <div className="book_selected--price">
                                        <Price originalPrice={13} salePrice={10} />
                                    </div>
                                    <div className="book__summary">
                                        <div className="book_summary--title">
                                            <h2>Summary</h2>
                                        </div>
                                        <div className="book__summary--para">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam error molestias sunt at recusandae iusto omnis dolor ad dolorum? Praesentium nihil ratione maxime? Voluptatem molestias ea praesentium vitae recusandae!</p>
                                        </div>
                                        <div className="book__summary--para">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam error molestias sunt at recusandae iusto omnis dolor ad dolorum? Praesentium nihil ratione maxime? Voluptatem molestias ea praesentium vitae recusandae!</p>
                                        </div>
                                        <button className="btn">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
