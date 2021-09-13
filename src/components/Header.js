import { Navbar, Button } from 'react-bootstrap';
import $ from 'jquery';



const Header = () => {
   
    const ToggleSlider = () => {
        if ($('.Slider').width() > 0) {
            $('.Slider').animate({ width: '0px' }, 500);
        }
        else {
            var wid = $(window).width();
            var per = 0;

            if (wid <= 544)
                per = 10;
            else if (wid <= 768)
                per = 6
            else if (wid <= 992)
                per = 6
            else
                per = 6


            $('.Slider').animate({ width: 65 }, 500);
        }
    }



    return (
        <div>
            <Navbar>
                <Button className='bg-light text-secondary border-secondary shadow-sm' style={{ fontSize: '20px', position: 'fixed',top:'100px', zIndex: '1', borderRadius: "20px", outline: "none" }} onClick={ToggleSlider} >About Us</Button>
                
            </Navbar>

        </div>

    );
}

export default Header;