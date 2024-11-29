import React, { useEffect, useState } from 'react';
import './menu.css'; // 공통 CSS 임포트

const Dessert = ({ addToCart }) => {
    const [desserts, setDesserts] = useState([]); // 디저트 데이터 상태
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        fetch('http://localhost:8080/api/dessert') // 디저트 API 호출 (예시)
            .then((response) => response.json())
            .then((data) => {
                setDesserts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching dessert data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="menu-container">
            <h1>디저트 메뉴</h1>
            <ul className="menu-list">
                {desserts.map((dessert) => (
                    <li
                        key={dessert.id}
                        onClick={() => addToCart(dessert)}  
                    >
                        {dessert.name} - ₩{dessert.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dessert;
