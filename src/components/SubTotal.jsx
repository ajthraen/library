import React from 'react';

const SubTotal = ({salePrice, originalPrice, quantity}) => {
    let newPrice = 0;
    function subPrice(newPrice) {
        newPrice = salePrice * quantity;
        console.log(newPrice);
        return newPrice;
    }
    // console.log(newPrice);
    return (
        <div>
            <div className="book__price">
                {/* <h3>${subPrice(newPrice).toFixed(2)}</h3> */}
                {salePrice ? (
                    <>
                        <h3>${subPrice(newPrice).toFixed(2)}</h3>
                    </>
                ):(
                    <>${originalPrice.toFixed(2)}</>
                    )}
            </div>
        </div>
    );
}

export default SubTotal;
