import { useEffect, useState } from 'react';
import AddTask from './AddTask';
import Header from './Header';
import Notes from './Notes';
import Note2 from './Note2';
import Slider from './Slider';
import Slider2 from './Slider2';
import { Container, Form, CardGroup, FormControl, Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery';


const Main = (props) => {
	const [addItem, setAddItem] = useState([{
		id: 0,
		img: 'Open.png',
		title: 'Open',
		description: 'Visit the Website or Page',
	},
	// {id: 0,
	// 	img: 'Open.png',
	// 	title: 'Open',
	// 	description: 'Visit the Website or Page'},
	]);
    
	const add = (note1) => {
		setAddItem((prevData) => {
			return [...prevData, note1];
		});
	};
  // var h=0;
	const onDelete = (id) => {
		//console.log(id);
		//h++;
	//	console.log(h);
		setAddItem((olddata) =>
			olddata.filter((currdata, indx) => {
				return indx !== id;
			}));
	};
 //  console.log(addItem);
	const [searchTerm, setSearchTerm] = useState('');


	useEffect(()=>{
		setAddItem((prevData) => {
			var values=[];
		var keys=Object.keys(localStorage)
		var i=keys.length;
        while(i--){
			//console.log(localStorage.getItem(keys[i]).title)
		if(typeof(JSON.parse(localStorage.getItem(keys[i])))=="object")
        values.push(JSON.parse(localStorage.getItem(keys[i])))}
		//return [];
	//	console.log(JSON.parse(localStorage.getItem(keys[0])))
		//console.log(typeof(JSON.parse(localStorage.getItem(keys[0]))))
		 var countkeyval=localStorage.getItem('count');
		 var initialIsDark=localStorage.getItem('isDark');
		 var threeorfour=localStorage.getItem('3or4');
		 if(values.length!==0) 
		 localStorage.clear(); 
		 console.log(values)
		//  else{
		// 	while(i--){
		// 		//console.log(localStorage.getItem(keys[i]).title)
		// 	if(typeof(JSON.parse(localStorage.getItem(keys[i])))=="object")
		// 	values.push(JSON.parse(localStorage.getItem(keys[i])))}
		//  }
		  localStorage.setItem('count',countkeyval);
		  localStorage.setItem('isDark',initialIsDark);
		  localStorage.setItem('3or4',threeorfour);
		 return [...prevData,...values];
	});
	
	// if(values.length==0){

	// }
  
 //  countkeyval=countkeyval%10;
 
},[]) 

	
	// useEffect(()=>{
		
	// 	var values=[];
	// 	var keys=Object.keys(localStorage)
	// 	var i=keys.length;
    //     while(i--)
    //     values.push(JSON.parse(localStorage.getItem(keys[i])))
	//     console.log(values)
	// },[])

	const G2 = () => {
		$('.notes').slideToggle('slow');
		$('#no').toggle();
		$('#no1').toggle();
		$('#no3').toggle();
	}

	const G3 = () => {
		$('#no').slideToggle();
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
	    localStorage.setItem('3or4',"false")
	}
        else{
        document.getElementById('addednotes').classList.add("card-columns2")
		document.getElementsByClassName('card-columns')[1].classList.add("card-columns2")
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
		document.getElementsByTagName('Button')[6].classList.toggle("dark")
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

	return (<>
	     <div class="flex">
			 <div>
	    <Button className='bg-light text-primary border-primary shadow-sm' style={{borderRadius:'25px', outline: "none" }} onClick={threeorfour}>threeorfour</Button>
               </div> 
			   <div>
		<Jumbotron style={{ width: "100%", padding: "4px", margin: "0px", borderRadius: "30px", position: "relative", zIndex: "101" }}>
			<Form inline className='w-50 mx-auto' >
				<FormControl type='text' placeholder='search..' href="#" className='w-100' style={{ borderRadius: "25px" }} onChange={(e) => setSearchTerm(e.target.value)}></FormControl>
				<Button type='submit' className='invisible'></Button>
			</Form>
		</Jumbotron></div>
		<div>
        <Button className='bg-light text-primary border-primary shadow-sm' style={{borderRadius:'25px', outline: "none" }} onClick={dayornight}>Dark</Button>
		</div></div>
		<Header ></Header>


		<div className='Main'>

			<div className='Slider h-200 bg-secondary' style={{ position: 'fixed', width: '0', overflowX: 'hidden', zIndex: '101', bottom: '5px', height: '70%', borderRadius: '35px', margin: "5px" }}>
				<Slider></Slider>
			</div>

			<div className='Slider2 h-200' style={{ position: 'fixed', width: '0', overflowX: 'hidden', zIndex: '101', bottom: '95px', right: '5px', height: '67%', borderRadius: '35px', margin: "5px" }}>
				<Slider2></Slider2>
			</div>

			<Container fluid id="goto">

				<CardGroup className="m-5 d-block card-columns " id="addednotes">
					{addItem.filter((val) => {
						if (searchTerm === "") {
							return val
						}
						else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())
							|| val.title.toLowerCase().includes(searchTerm.toLowerCase())
							|| val.img.toLowerCase().includes(searchTerm.toLowerCase())) {
							return val
						}
					}).map((val, index) => {
                        

						return (
							<Note2 style={{ position: 'relative' }} notek={val} key={index} img={val.img} id={index} count={val.c} deleteItem={onDelete}>
                            {/* {console.log("i worked")} */}
							{/* {console.log("^")} */}
							{/* {         (val.title!="Open")&&
										localStorage.setItem(index,JSON.stringify(val)) */}
							{/* } */}
							</Note2>

						);

					})}

				</CardGroup>
			</Container>

			<div className="n1"  style={{
				}}>

				<Jumbotron onClick={G2} id="no" style={{
					borderRadius: "40px", padding: "0px", width: "30%", color: "#2D66AD",
					margin:"10px",
					position: "relative",
					left: "35%", display: "none"}}>
					<Container >
						<h3 style={{ textAlign: "center" }}>Hide Tutorial Notes</h3>
						<p class="lead"></p>
					</Container>
				</Jumbotron>


				<AddTask passNote={add}  ></AddTask>


				<Jumbotron onClick={G2} id="no1" style={{
					borderRadius: "40px", padding: "0px", width: "30%", color: "#2D66AD",
					position: "relative",
					left: "35%", display: "none"}}>
					<Container >
						<h3 style={{ textAlign: "center" }}>Show Tutorial Notes</h3>
						<p class="lead"></p>
					</Container>
				</Jumbotron>

				<Jumbotron id="no3" style={{
					borderRadius: "40px", padding: "0px", width: "30%", color: "#2D66AD",
					position: "relative",
					left: "35%", visibility: 'hidden', display: 'none'}}>
					<Container >
						<h3 style={{ textAlign: "center" }}>Open Tutorial Notes</h3>
						<p class="lead"></p>
					</Container>
				</Jumbotron>

			</div>


			<div onClick={G3}>
				<div className='notes' style={{ position: 'relative' }} >
					<Notes notes={props.notes} sendData={searchTerm}  ></Notes>
				</div>
			</div>

		</div>
     
     {/* adding blank space after tutorials are hidden */}
		{/* <div className='AddTask' style={{
			paddingTop: "10px",
			backgroundColor:"blue",
			position: "fixed",
			bottom: '0',
			display: "block",
			width: "100%",
			backdropFilter: "blur(6px)"}}>
		</div> */}
    
	</>
	);
}

export default Main;