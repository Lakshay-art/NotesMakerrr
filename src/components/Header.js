import { Navbar, Button } from 'react-bootstrap';
import $ from 'jquery';
import { useEffect } from 'react';



const Header = (props) => {
   
    const ToggleSlider = () => {
        if ($('.Slider').width() > 0) {
            $('.Slider').animate({ width: '0px' }, 500);
            $('.slidebtn1').animate({ top: '147px' }, 500);
			$('.slidebtn2').animate({ top: '180px' }, 500);
			$('.slidebtn3').animate({ top: '213px' }, 500);
          //  $('.slidebtn').css("padding","0px 12px");
          //$('.slidebtn').css("border","1px solid grey")
        }
        else {
           // var wid = $(window).width();
            // var per = 0;

            // if (wid <= 544)
            //     per = 10;
            // else if (wid <= 768)
            //     per = 6
            // else if (wid <= 992)
            //     per = 6
            // else
            //     per = 6


            $('.Slider').animate({ width: 65 }, 500);
           // $('.slidebtn').animate({ width:"0px"}, 500);
			$('.slidebtn1').animate({ top:"100px"}, 500);
			$('.slidebtn2').animate({ top:"100px"}, 500);
			$('.slidebtn3').animate({ top:"100px"}, 500);
            // $('.slidebtn').css("padding","6px 0px");
            // $('.slidebtn').css("border","none")
           
        }
    }
    useEffect(()=>{
		let threeorfou = JSON.parse(localStorage.getItem("3or4"))
        if(threeorfou==true)
		threeorfour();
	},[])
	const threeorfour = () => {
        if(document.getElementById('addednotes').classList.contains("card-columns2")){
        document.getElementById('addednotes').classList.remove("card-columns2")
		document.getElementsByClassName('card-columns')[1].classList.remove("card-columns2")
        // document.body.style.zoom="100%";
	    localStorage.setItem('3or4',"false")
	}
        else{
        document.getElementById('addednotes').classList.add("card-columns2")
		document.getElementsByClassName('card-columns')[1].classList.add("card-columns2")
        // document.body.style.zoom="80%";
		localStorage.setItem('3or4',"true")
		}
    }
	useEffect(()=>{
		let initialIsDark = JSON.parse(localStorage.getItem("isDark"))
        if(initialIsDark==true)
		dayornight();
	},[])
	const dayornight = () => {
		document.getElementById('goto').classList.toggle("dark")
		document.getElementsByClassName('Main')[0].classList.toggle("halfblack")
		document.getElementsByClassName('notes')[0].classList.toggle("dark")
		document.getElementsByTagName('body')[0].classList.toggle("dark")
		document.getElementsByClassName('n1')[0].classList.toggle("halfblack")
		document.getElementsByClassName('jumbotron')[0].classList.toggle("halfblack")
		document.getElementsByClassName('jumbotron')[1].classList.toggle("halfblack")
		document.getElementsByClassName('jumbotron3')[0].classList.toggle("halfblack")
		document.getElementById('m1').classList.toggle("border")
		document.getElementById('m1').classList.toggle("border-primary")
		//document.getElementsByTagName('Button')[6].classList.toggle("dark")
      for(let i=0;i<4;i++){
		document.getElementsByClassName('slide')[i].classList.toggle("bg-secondary")
		document.getElementsByClassName('slide')[i].classList.toggle("bg-light")
		document.getElementsByClassName('slide')[i].classList.toggle("text-secondary")}
		document.getElementById('searchf').classList.toggle("inputbackgdark")
		document.getElementById('titlef').classList.toggle("inputbackgdark")
		document.getElementById('autoheight').classList.toggle("inputbackgdark")
		document.getElementById('imgf').classList.toggle("inputbackgdark")
		document.getElementById('m2').classList.toggle("backdrop")
        document.getElementById('m2').classList.toggle("backdropdark")
		var arr=[];
		arr=document.getElementsByClassName('halfb')
		let i=0;
		//	console.log(arr.length)
		for(;i<arr.length;i++)
		arr[i].classList.toggle("halfblack")
		let isDark=document.getElementById('goto').classList.contains("dark")
		if(isDark===true){
			localStorage.setItem('isDark','true')}
			else
			localStorage.setItem('isDark','false')

    }
		//let isDark=false;
		useEffect(()=>{

			console.log("inside useffect ")
         let isDark=document.getElementById('goto').classList.contains("dark")
		let arr=[];
		arr=document.getElementsByClassName('halfb')
		let i=0;
		if(isDark===true){
	    //localStorage.setItem('isDark','true')
			console.log(arr.length)
		for(;i<arr.length;i++)
		arr[i].classList.add("halfblack")
        // var arr=[];
		// arr= document.getElementsByTagName('div')
		// for(var i in arr){
		// 	console.log(i);
		// arr[i].classList.add("dark")}
		} 
		else{
		//	localStorage.setItem('isDark','false')
			for(;i<arr.length;i++)
			arr[i].classList.remove("halfblack")
		}
})

const getbackdeleted = () => {
	let alldeleted=JSON.parse(localStorage.getItem("del"))
	if(alldeleted!=null){
    let lastdeleted=alldeleted.pop();
	localStorage.setItem("del",JSON.stringify(alldeleted))
	props.setdeletednote(lastdeleted)}
}

    return (
        <div>
            <Navbar style={{  position: 'absolute' }}>
                <Button className='slide bg-light text-secondary border-secondary shadow-sm' style={{ fontSize: '20px', position: 'fixed',top:'100px', zIndex: '102', borderRadius: "20px", outline: "none",opacity:"95%" }} onClick={ToggleSlider} >About Us</Button>
                
                <Button className='slide slidebtn1 bg-light text-secondary border-secondary shadow-sm' style={{ fontSize: '12px', position: 'fixed',top:'147px',left:'40px' ,zIndex: '102',padding:"5px 10px", borderRadius: "20px", outline: "none",overflowX:"hidden" ,opacity:"75%"}} onClick={dayornight} > Dark</Button>
                <Button className='slide slidebtn2 bg-light text-secondary border-secondary shadow-sm' style={{ fontSize: '12px', position: 'fixed',overflowX:"hidden",top:'180px',left:'37px' , zIndex: '102',padding:"5px 10px", borderRadius: "20px", outline: "none",opacity:"75%" }} onClick={threeorfour} >3/four</Button>
				<Button className='slide slidebtn3 bg-light text-secondary border-secondary shadow-sm' style={{ fontSize: '12px', position: 'fixed',overflowX:"hidden",top:'213px',left:'27px' , zIndex: '102',padding:"5px 10px", borderRadius: "20px", outline: "none" ,opacity:"75%"}} onClick={getbackdeleted} >Get it back</Button>
                
            </Navbar>

        </div>

    );
}

export default Header;