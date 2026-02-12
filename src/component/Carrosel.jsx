import { useRef } from 'react';
import '../css/carrosel.css'
import Carousel from "react-elastic-carousel";
import brastemp from '../img/marcas/brastemp.png'
import colormaq from '../img/marcas/colormaq.png'
import electrolux from '../img/marcas/electrolux.png'
import consul from '../img/marcas/consul.png'
import lg from '../img/marcas/lg.png'
import samsung from '../img/marcas/samsung.png'
import midea from '../img/marcas/midea.png'







function Carrosel() {

    const carouselRef = useRef(null);
    let resetTimeout;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];



    return (
        <div className='Ap'>
            <Carousel breakPoints={breakPoints}
            ref={carouselRef}
                                pagination={false}
                                enableAutoPlay={true}
                                showArrows={false}
                                autoPlaySpeed={2000}
                                isRTL={false}
                                onNextEnd={({ index }) => {
                                    clearTimeout(resetTimeout);
                                    resetTimeout = setTimeout(() => {
                                        carouselRef?.current?.goTo(0);
                                    }, 4000); // same time
                                }}>
                <img className='marcas' alt="logo brastemp" src={brastemp}/>
                <img className='marcas' alt="logo electrolux" src={electrolux}/>
                <img className='marcas' alt="logo consul" src={consul}/>
                <img className='marcas' alt="logo lg" src={lg}/>
                <img className='marcas' alt="logo midea" src={midea}/>
                <img className='marcas' alt="logo samsung" src={samsung}/>
                <img className='marcas' alt="logo colormaq" src={colormaq}/>
            </Carousel>            
        </div>

    )
  
}

export default Carrosel