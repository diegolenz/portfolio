import React, { useRef, useState, useEffect } from 'react';
import '../css/experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const products = [
    { id: 1, name: 'Produto 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produto 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Produto 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Produto 5', price: '$50', image: 'https://via.placeholder.com/150' },
    // Adicione mais produtos se necessário
];


function Experience() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2); // Começa com o terceiro cartão

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (direction === 'left') {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        const handleScroll = () => {
            const center = container.scrollLeft + container.offsetWidth / 2;
            const cardElements = container.querySelectorAll('.card');
            let closestIndex = 0;
            let minDistance = Infinity;

            cardElements.forEach((card, index) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = Math.abs(cardCenter - center);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <h1>Produtos</h1>
            <div className="scroll-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div ref={scrollContainerRef} className="card-container">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`card ${index === activeIndex ? 'active' : ''}`}
                        >
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
export default Experience;