import React, { useEffect, useState } from 'react';

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

    // const onClickMenu(()=>{})

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>커피 메뉴</h1>
            <ul>
                {coffees.map((coffee) => (
                    <li
                        key={coffee.id}
                        onClick={() => addToCart(coffee)}  
                        style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
                    >
                        {coffee.name} - {coffee.type} - ₩{coffee.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Coffee;
