import React, { Component } from 'react'
import background from '../assets/background.jpg'
import '../css/experience.scss'
//import perfil from '../../assets/perfil.jpeg'
import perfil from '../assets/perfil-nb.png'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


class Experience extends Component {

    constructor() {
        super();
        const experiences = [
            {
                function: 'desenvolvedor JAVA',
                company: 'JL informatica',
                text: 'Soluções ERPS para clubes'
            },
            {
                function: 'desenvolvedor JAVA 2',
                company: 'JL informatica',
                text: 'Soluções ERPS para clubes'
            },
            {
                function: 'desenvolvedor JAVA 3',
                company: 'JL informatica',
                text: 'Soluções ERPS para clubes'
            },
            {
                function: 'desenvolvedor JAVA 5',
                company: 'JL informatica',
                text: 'Soluções ERPS para clubes'
            },
            {
                function: 'desenvolvedor FrontEND',
                company: 'FOTON',
                text: 'Desenvolimenor de HOST de micro front End para aclopar diferentes sistemas CAIXA'
            }
        ]
        this.state = {
            experiences: experiences,
            currentIndex: 0,
            sliderEle: null,
            innerEle: null
        }
        this.rightScroll = this.rightScroll.bind(this);
        this.leftScroll = this.leftScroll.bind(this);
        console.log('init')
        /*     const totItens = experiences.length;*/
    }

    componentDidMount(prevProps) {
        // Typical usage (don't forget to compare props):
        console.log('compdid')
        const sliderEle = document.getElementById('slider');
        this.setState({
            sliderEle: sliderEle,
            innerEle: sliderEle.querySelector('.slider__inner')
        });
       
    }


    rightScroll(e) {
        e.preventDefault();
        console.log('rightScroll')
        console.log(this.state);
        if (this.state.currentIndex < this.state.experiences.length - 1) {
            this.jump(this.state.currentIndex + 1);
        }
    }

    leftScroll(e) {
        e.preventDefault();
        console.log('leftScroll')
        console.log(this.state)
        if (this.state.currentIndex > 0) {
            this.jump(this.state.currentIndex - 1);
        }
    }

    /* jump(index) {
        this.innerEle.style.transform = `translateX(${-100 * index}%)`;
    } */

    jump = (index) => {
        console.log('jump')
        console.log( this.state.innerEle)
        if (this.state.innerEle && this.state.innerEle.style)
            this.state.innerEle.style.transform = `translateX(${-100 * index}%)`;
    };

    /*  const jump = (index) => {
         innerEle.style.transform = `translateX(${-100 * index}%)`;
     }; */


    render() {
        return (
            <section className="projects slider" id="slider">
                {/* <div className="box-effect" /> */}
                <button className="button btn-left" onClick={this.leftScroll}>
                    <AiFillCaretLeft />
                </button>
                <div className='slider__inner'>
                    <div className="card card1">

                    </div>
                    <div className="card card2">
                        <a>a</a>
                        <a>a</a>

                    </div>
                    <div className="card card3">

                    </div>

                    {/* {this.state.experiences.map((exp, i) => (
                        <div className="card">
                            <a>{exp.function}</a>
                            <a>{exp.company}</a>

                        </div>
                    ))} */}
                </div>
                <button className="button btn-right" onClick={this.rightScroll}>
                    <AiFillCaretRight />
                </button>

            </section>
        )
    }
}
export default Experience;