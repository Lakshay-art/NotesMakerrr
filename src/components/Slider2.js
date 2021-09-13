
import $ from 'jquery';


const Slider2 = ()=>{

    const HideSlider2 = ()=>{
        $('.Slider2').animate({width: '0%'}, 500);
    }

    return (
        <>
       
    <div class="page5">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="circle1"></div>
					<div class="circle"></div>
                    <header class="myhed text-center">
                        <i class="far fa-user"></i>
                        <p >LOGIN</p>
                    </header>
                    <form class="main-form text-center">
                        <div class="form group my-0">
                            <label class="my-0">
                                <i class="fas fa-user"></i>
                                <input type="text" class="myInput" placeholder="Enter Your Username"/>
                            </label>
                        </div>
                        <div class="form group my-0">
                            <label class="my-0">
                                <i class="fas fa-lock"></i>
                                <input type="password" class="myInput" placeholder="Enter Password"/>
                            </label>
							</div>
                            <div class="form group my-0">
                               
                        </div>
                        
                        <label class="check_1">
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <div class="form group">
                            <label>
                                
                                <input type="button" class="form-control button" value="LOG IN" onClick={HideSlider2}/>
                            </label>
                        </div>
                      
                    </form>
                </div>
            </div>
        </div>
</div>

 </>
    );
}


export default Slider2;