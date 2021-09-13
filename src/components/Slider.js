import {Button} from 'react-bootstrap';
import $ from 'jquery';


const Slider = ()=>{

    const HideSlider = ()=>{
        $('.Slider').animate({width: '0%'}, 500);
    }

    return (
        <>
            <Button className='text-light text-right bg-secondary border-0 w-100 m-1 p-3' onClick={HideSlider} style={{fontSize:'15px'}}>&times;</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}><a href="https://www.facebook.com/lakshay_the_gupta" rel="noreferrer" target="_blank"><img src="facebook.svg" width="40px"></img></a></Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}><a href="https://www.instagram.com/lakshay_the_gupta" rel="noreferrer" target="_blank"><img src="instagram.svg" width="40px"></img></a></Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}><a href="https://www.twitter.com/Lakshaythegupta" rel="noreferrer" target="_blank"><img src="twitter.svg" width="40px"></img></a></Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}><a href="https://www.pinterest.com/lakshay_the_gupta" rel="noreferrer" target="_blank"><img src="pinterest.svg" width="40px"></img></a></Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}><a href="https://www.youtube.com/channel/UC44y1jGEn6kAr9Tv_W_GQfQ" rel="noreferrer" target="_blank"><img src="youtube.svg" width="40px"></img></a></Button>
        </>
    );
}


export default Slider;