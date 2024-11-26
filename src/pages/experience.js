import React, { useRef, useState, useEffect } from 'react';
import '../css/experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const products = [
    { id: 1, name: 'Referencias', description: 'Comprar energia renovável traz diversos benefícios, incluindo a redução das emissões de carbono, ajudando a combater as mudanças climáticas.', image: 'wallpaper-black.png' },
    { id: 2, name: 'Experiencia', description: 'Comprar energia renovável traz diversos benefícios, incluindo a redução das emissões de carbono, ajudando a combater as mudanças climáticas.', image: 'wallpaper.png' },
    { id: 3, name: 'Beneficios', description: 'Comprar energia renovável traz diversos benefícios, incluindo a redução das emissões de carbono, ajudando a combater as mudanças climáticas. ', image: 'invista-futuro01.png' },
    //{ id: 3, name: 'Beneficios', description: 'Comprar energia renovável traz diversos benefícios, incluindo a redução das emissões de carbono, ajudando a combater as mudanças climáticas. Além disso, a energia renovável tende a ser mais econômica a longo prazo, devido à estabilidade de preços e menores custos operacionais.', image: 'invista-futuro01.png' },
    // Adicione mais produtos se necessário
];


function Experience() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0); // Começa com o terceiro cartão

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (direction === 'left') {
           // container.scrollBy({ left: -300, behavior: 'smooth' });
            setActiveIndex(activeIndex == 0 ? products.length-1: activeIndex-1)
        } else {
            //container.scrollBy({ left: 300, behavior: 'smooth' });
            setActiveIndex(activeIndex == products.length-1 ? 0 : activeIndex+1)
        }
    };

    const select = (index) => {
        setActiveIndex(index);
    }

    const centralizarCard = (index) => {
        const cardWidth = scrollContainerRef.current.offsetWidth / 3; // Tamanho do card dividido por 3 para melhor ajuste
        const scrollLeft = cardWidth * index - (scrollContainerRef.current.offsetWidth / 2) + (cardWidth / 2);
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setActiveIndex(index);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        const handleScroll = () => {
        /*     const center = container.scrollLeft + container.offsetWidth / 2;
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

//            setActiveIndex(activeIndex);
            setActiveIndex(closestIndex); */
        };

        // Função para mover o card clicado para o centro
       

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
                            onClick={() => centralizarCard(index)}
                            key={product.id}
                            className={`card ${index === activeIndex ? 'active' : ''}`}
                            id={`card${product.id}`}
                        >
                            {/*  <img src={require(`./../assets/${product.image}`)} alt={product.name} /> */}
                            <img src={`/assets/${product.image}`} alt={product.name} />
                            <h2 className="titulo">{product.name}</h2>
                            {index == activeIndex  &&  <p>{product.description}</p>}
                          {/*   { index == activeIndex ?  => (
                                <p>{product.description}</p>
                                : null )
                            }  */}
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