import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
            price: '$12.99',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        },
        {
            id: 2,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce, croutons, and Caesar dressing.',
            price: '$8.99',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Spaghetti Carbonara',
            description: 'Pasta with a creamy sauce made from eggs, cheese, pancetta, and pepper.',
            price: '$14.99',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Tiramisu',
            description: 'Coffee-flavored Italian dessert with layers of mascarpone cheese.',
            price: '$6.99',
            image: 'https://via.placeholder.com/150',
        },
        // Add more menu items as needed
    ];

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="menu-page">
            <h1>Menu</h1>
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
                        </div>
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
