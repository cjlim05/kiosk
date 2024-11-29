import React, { useEffect, useState } from 'react';
import './menus.css'; // 공통 CSS 임포트

const Coffee = ({ addToCart }) => {
    const [coffees, setCoffees] = useState([]); // 커피 데이터 상태
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        fetch('http://localhost:8080/api/coffee') // Spring Boot API 호출
            .then((response) => response.json())
            .then((data) => {
                setCoffees(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching coffee data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    return (
        <div className="menu-container">
            <h1>커피 메뉴</h1>
            <ul className="menu-list">
                {coffees.map((coffee) => (
                    <li
                        key={coffee.id}
                        onClick={() => addToCart(coffee)}  
                    >
                        {coffee.name} - {coffee.type} - ₩{coffee.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Coffee;
