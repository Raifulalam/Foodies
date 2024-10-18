import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        'pizza.jpg',
        'desert.jpg',
        'pizza.jpg',
        '494243.jpg',

    ];

    const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
            price: '$12.99',
            image: 'pizza.jpg',
        },
        {
            id: 2,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce, croutons, and Caesar dressing.',
            price: '$8.99',
            image: 'desert.jpg',
        },
        {
            id: 3,
            name: 'Spaghetti Carbonara',
            description: 'Pasta with a creamy sauce made from eggs, cheese, pancetta, and pepper.',
            price: '$14.99',
            image: '494243.jpg',
        },
        {
            id: 4,
            name: 'Tiramisu',
            description: 'Coffee-flavored Italian dessert with layers of mascarpone cheese.',
            price: '$6.99',
            image: 'desert.jpg',
        },
    ];

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + images.length) % images.length
        );
    };

    return (
        <div className="menu-page">
            <div className="slider">
                <button onClick={prevSlide} className="slider-button"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg></button>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
                <button onClick={nextSlide} className="slider-button"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg></button>
            </div>

            <input
                type="text"
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            <div className="menu-items">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <div key={item.id} className="menu-item">
                            <img src={item.image} alt={item.name} className="menu-item-image" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <span className="price">{item.price}</span>
                            <select name="" id="">
                                <option value="one">1</option>
                                <option value="one">1</option>
                                <option value="one">1</option>
                                <option value="one">1</option>
                            </select>
                            <select name="" id="">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                                <option value="one">1</option>
                                <option value="one">1</option>
                            </select>
                        </div>
                    ))
                ) : (
                    <p>No items found. Please try another search.</p>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
