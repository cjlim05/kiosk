import React from 'react';

const Cart = ({ cart, setCart }) => {
    const handleQuantityChange = (coffeeId, newQuantity) => {
        setCart((prevCart) => {
            const newCart = new Map(prevCart);
            if (newCart.has(coffeeId)) {
                const coffee = newCart.get(coffeeId);
                if (newQuantity > 0) {
                    coffee.quantity = newQuantity;
                } else {
                    coffee.quantity = 1;
                }
            }
            return newCart;
        });
    };

    let totalCost = 0;
    
    return (
        <div>
            <h2>장바구니</h2>
            <ul>
                {Array.from(cart.values()).map((coffee) => {
                        const cost = coffee.price * coffee.quantity; // 상품별 cost 계산
                        totalCost += cost; 
                        return (
                            <li key={coffee.id}>
                                {coffee.name} - ₩{coffee.price} x {coffee.quantity} 
                                <button onClick={() => handleQuantityChange(coffee.id, coffee.quantity + 1)}>+</button>
                                <button onClick={() => handleQuantityChange(coffee.id, coffee.quantity - 1)}>-</button>
                                <span>  ₩{cost}</span> {/* 상품별 cost 출력 */}
                            </li>
                        );
                    })}
            </ul>
            <div>
                <p>-------------------------------------------------------------------</p>
                <p> 총액 {totalCost}</p>
            </div>
            <div className='order'>
                <button>X</button>
                <button>주문하기</button>
            </div>
        </div>
    );
};

export default Cart;
