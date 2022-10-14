import React from 'react';

const SubTotal = ({salePrice, originalPrice, quantity}) => {
    let newPrice = 0;
    function subPrice(newPrice) {
        newPrice = salePrice * quantity;
    }
    //subPrice(newPrice);
    console.log(subPrice(newPrice));
    return (
        <div>
            <div className="book__price">
                <>
                    {quantity}
                </>
            </div>
            <div className="book__price">
                {salePrice ? (
                    <>
                        ${salePrice.toFixed(2)}
                    </>
                ):(
                    <>${originalPrice.toFixed(2)}</>
                    )}
            </div>
        </div>
    );
}

export default SubTotal;
