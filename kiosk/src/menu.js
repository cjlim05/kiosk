import React, { useState } from 'react';
import Coffee from './coffee';
import Dessert from './dessert';
import Cart from './cart';

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState('coffee'); // 기본값 설정
    const [cart, setCart] = useState([]); // 장바구니 설정

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    // Cart에 아이템 추가 함수
    const addToCart = (coffee) => {
        setCart((prevCart) => {
            const newCart = new Map(prevCart); // 기존 장바구니 복사
            const coffeeId = coffee.id; // 상품 고유 ID

            if (newCart.has(coffeeId)) {
                // 상품이 이미 장바구니에 있으면 수량 증가
                const existingCoffee = newCart.get(coffeeId);
                existingCoffee.quantity += 1; // 수량 증가
            } else {
                // 상품이 장바구니에 없으면 새로 추가
                newCart.set(coffeeId, { ...coffee, quantity: 1 });
            }
            return newCart;
        });
    };


    return (
        <div className="main">
            {/* 메뉴 보이는 창 */}
            <div className="menus">
                <div className="menus-click">
                    <p onClick={() => handleMenuClick('coffee')}>커피</p>
                    <p onClick={() => handleMenuClick('dessert')}>디저트</p>
                </div>
                <div className="menu-list">
                    <p>현재 선택된 메뉴: {selectedMenu}</p> {/* 상태 표시 */}
                    {selectedMenu === 'coffee' && <Coffee addToCart={addToCart} />}  {/*selectedMenu === 'coffee'가 true일 경우 <Coffee /> 컴포넌트를 렌더링*/}
                    {selectedMenu === 'dessert' && <Dessert addToCart={addToCart}/>}
                </div>
            </div>

            {/* 주문 내역 보이는 칸 */}
            <div className="cart">
                <Cart cart={cart} setCart={setCart}/>
            </div>
        </div>
    );
}
