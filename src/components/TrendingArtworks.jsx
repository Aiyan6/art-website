import LeftArrow from '../assets/icons/left-arrow.png'
import RightArrow from '../assets/icons/right-arrow-mirrored.png'
import '../styles/TrendingArtworks.css'
import { useState } from 'react'
import trendingArtworks from '../assets/TrendingArtworks/assortment'
import thickLine from '../assets/icons/thick-horizontal-line.png'
import thinLine from '../assets/icons/thin-horizontal-line.png'

export default function TrendingArtworks ({title}) {

    const [slideIndex, setSlideIndex] = useState(0);

    function prevSlide() {
        setSlideIndex ( index => {
            return (index === 0) ? trendingArtworks.length - 1 : index - 1;
            }
        )
    }

    function nextSlide() {
        setSlideIndex ( index => {
            return (index === trendingArtworks.length - 1) ? 0 : index + 1;
            }
        )
    }


    return (
        <>
            <section className='trending-artworks'>

                <p className='trending-artworks-title'>{title}</p>

                <button className='trending-artworks-left-button'><img src={LeftArrow} alt="Left arrow" onClick={prevSlide} /></button>
                <button  className='trending-artworks-right-button'><img src={RightArrow} alt="Right arrow" onClick={nextSlide} /></button>

                <div className='trending-artworks-slides'>
                    {
                        trendingArtworks.map(grid =>
                            <div className='trending-artworks-slide' style={{translate : `${-100 * slideIndex}%`}}>
                                {
                                    grid.map(item => (
                                        <div className='artwork'>
                                            <img src={item.image} alt="" />
                                            <p className='artist'>{item.artist}</p>
                                            <p className='art-title'>{item.title}</p>
                                            <p className='price'>{item.price}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>

                <div className='trending-artworks-nav-buttons-container'>
                        {
                            trendingArtworks.map((_, index) => (
                                <button className='trending-artworks-nav-buttons' onClick={ () => setSlideIndex(index)}><img className="line-icon" src={(index === slideIndex) ? thinLine : thickLine}/></button>
                            ))
                        }
                </div>

            </section>

        </>
    )
}