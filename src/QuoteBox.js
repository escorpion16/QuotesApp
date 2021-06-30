import React, { Fragment, useState } from 'react';
import Color from './Colors.json';
import Data from './Quotes.json';

export const QuoteBox = () => {
    const [indexQuote, setIndexQuote] = useState(Math.floor(Math.random() * 102))
    const [indexColor, setIndexColor] = useState(Math.floor(Math.random() * 20))

    return (
        <Fragment>
            <div style={Color[indexColor]} className="container">
                <div className="quoteBox">
                    {/* Adding quote and author */}
                    <h3><i className="fas fa-quote-left"></i> {Data[indexQuote].quote} <i className="fas fa-quote-right"></i></h3>
                    <h4 className="author">{Data[indexQuote].author}</h4>

                    {/* Adding twitter button */}
                    <div className="containerButtons">
                        <div className="twitterContainer">
                            <button style={Color[indexColor]} className='twitterBtn'><i className="fab fa-twitter-square"></i></button>
                        </div>

                        {/* Adding button new Quote */}
                        <button style={Color[indexColor]} className="newQuoteBtn" type="button" onClick={() => {
                                setIndexQuote(Math.floor(Math.random() * 102))
                                setIndexColor(Math.floor(Math.random() * 20))
                            }}>
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
