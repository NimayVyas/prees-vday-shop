import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'; 

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ( {cart, handleUpdateCardQty, handleRemoveFromCart, handleEmptyCart} ) => {
    const classes = useStyles();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">Pree! You have no items in your cart!
            <Link to="/" className={classes.link}>Add Items To Cart</Link>
        </Typography>
    );

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} onUpdateCartQty={handleUpdateCardQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <Typography variant="h4"> Remaining: ${100 - cart.subtotal.formatted}</Typography>
                <div>
                    {/* <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';
  
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Prees Shopping Cart</Typography>
            { !cart.line_items.length ? renderEmptyCart(): renderCart()}
        </Container>
    );
};

export default Cart
