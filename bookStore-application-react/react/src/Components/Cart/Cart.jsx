import axios from 'axios';
import React, { Component, useContext, useEffect, useState } from 'react';
import AuthContext from '../Authentication/AuthContext';
import _ from "lodash";

const Cart = (props) => {

    const [state, setState] = useState({
        cartItems : []
    });

    const [refresh, setRefresh] = useState(true);

    const authContent = useContext(AuthContext);

    const credentials = authContent.state.auth;

    const removeItem = productId => { 
        //Create a api for delete the card value based on id.
        //Enter your code here ... 
    }

    const addOrder =  () => { 
        //Place the order for all cart items 
        //Remove the cart items once the order placed successfully.
        //Then Navigate to the orders page
        //Enter your code here ...
    }

    useEffect(() => {
        //Fetch all the cart item based on specific user and Store in the state{cartItems}
        //Enter your code here ...
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-borderless" style={{border : 'none'}}>
                        <thead className="bg-info">
                        <tr className="text-center">
                            <th scope="col">Book Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {state.cartItems.length === 0 && <h4 className="text-center px-2 py-4">No Items in cart</h4>}
                            {
                                state.cartItems.map(cart => {
                                    return (
                                        <tr >
                                            <td className="text-center">{cart.productName}</td>
                                            <td className="text-center">{cart.price}</td>
                                            <td className="text-center">{cart.quantity}</td>
                                            <td style={{marginRight : "10px"}} onClick={() => removeItem(cart.cartId)} className="text-center"><a className="btn btn-danger text-white"><i className="fas fa-trash"></i></a></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button data-testid="placeorder" className="btn btn-primary mt-3" onClick={addOrder}>Place order</button>
                    <div style={{height : "30px"}}></div>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;