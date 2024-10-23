import React, { useState, useEffect } from 'react';
import './MenuPage.css';

const MenuPage = () => {
    const [foodCat, setFoodCat] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState([]);
    const [totalPrice, setTotalPrice] = useState('')

    const images = [
        'pizza.jpg',
        'desert.jpg',
        'pizza.jpg',
        '494243.jpg',
    ];

    const menuItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/foodList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFoodList(data[0]);
            setFoodCat(data[1]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        menuItems();
    }, []);

    // Filter items based on the search term
    const filteredItems = foodList.filter(item =>
        item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="menu-page">
            <div className="slider">
                <button onClick={prevSlide} className="slider-button">◀</button>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
                <button onClick={nextSlide} className="slider-button">▶</button>
            </div>

            <input
                type="text"
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            {error && <p className="error-message">{error}</p>}

            <div className="item-list">
                <div className="card">
                    {foodCat.length > 0 ? (
                        foodCat.map((data) => (
                            <div key={data.id} className="card-item">
                                <h2>{data.CategoryName}</h2>
                                <hr />
                                <div className="food-item-card">
                                    {filteredItems.length > 0 ? (
                                        filteredItems.filter(item => item.CategoryName === data.CategoryName)
                                            .map((item) => (
                                                <div key={item.id} className="menu-item">
                                                    <img src={item.img} alt={item.name} className="menu-item-image" />
                                                    <h2>{item.name}</h2>

                                                    <select>
                                                        <option value="one" onChange={setQuantity}>1</option>
                                                        <option value="two" onChange={setQuantity}>2</option>
                                                        <option value="three" onChange={setQuantity}>3</option>
                                                    </select>
                                                    {item.options && (
                                                        <select>
                                                            {Object.keys(item.options[0]).map((key, index) => (
                                                                <option key={index} value={key}>
                                                                    {key}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}

                                                    <span className="price">{item.price}</span>
                                                    <p>{quantity}</p>
                                                </div>
                                            ))
                                    ) : (
                                        <p>No items found for this category.</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card-item">
                            <h2>No Categories Available</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
