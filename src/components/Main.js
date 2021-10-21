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
		img: 'superman.png',
		title: 'SuperMan Filter',
		description: '<p>Try this SuperMan Filter on Instagram</p> <a style="text-align:center" href="https://www.instagram.com/ar/192401956234724/"><b>Try Now</b></a>',
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
	console.log(addItem)
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
			//console.log("type"+typeof(keys[i]))
		if(typeof(JSON.parse(localStorage.getItem(keys[i])))=="object"&&keys[i]!=="del"&&keys[i]!=="isDark"&&keys[i]!=="3or4"&&keys[i]!=="current"&&keys[i]!=="name")
        values.push(JSON.parse(localStorage.getItem(keys[i])))}
		//return [];
	//	console.log(JSON.parse(localStorage.getItem(keys[0])))
		//console.log(typeof(JSON.parse(localStorage.getItem(keys[0]))))
		 var countkeyval=localStorage.getItem('count');
		 var initialIsDark=localStorage.getItem('isDark');
		 var threeorfour=localStorage.getItem('3or4');
		 var dele=localStorage.getItem('del');
		 var currentnote=localStorage.getItem('current');
		 var name=localStorage.getItem('name');
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
		  localStorage.setItem('del',dele);
		  localStorage.setItem('current',currentnote);
		  localStorage.setItem('name',name);
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
	
const [premade ,sendtoadd]=useState({})
const editingnotes = (premadenote)=>{
	sendtoadd(premadenote)
}
const setdeletednote = (deletednote)=>{
	setAddItem((prevData) => {
		return [...prevData, deletednote];
	});
}
// const[height,setheight]=useState(0)
// useEffect(() => {
// 	var a=document.getElementById('addednotes').clientHeight+50;
// 	setheight(a);
// }, [addItem])

	return (<>
	     {/* <div class="flex"> */}
			 {/* <div>
	    <Button className='bg-light text-primary border-primary shadow-sm' style={{borderRadius:'25px', outline: "none" }} >threeorfour</Button>
               </div>  */}
			   
		<Jumbotron id="searchj" style={{ width:"30%", padding: "4px", margin: "auto",marginBottom:"20px", borderRadius: "30px", position: "relative", zIndex: "101",minWidth:"150px"  }}>
			<Form inline className='w-50 mx-auto' >
				<FormControl id="searchf" type='text' placeholder='search..' href="#" className='w-100 ' style={{ borderRadius: "25px" }} onChange={(e) => setSearchTerm(e.target.value)}></FormControl>
				<Button type='submit' className='invisible'></Button>
			</Form>
		</Jumbotron>
		{/* <div>
        <Button className='bg-light text-primary border-primary shadow-sm' style={{borderRadius:'25px', outline: "none" }} >Dark</Button>
		</div> */}
		{/* </div> */}
		<div className=' h-200 ' style={{width:"0",overflowX:"hidden"}}>
		<Header setdeletednote={setdeletednote}></Header>
         </div>

		<div className='Main'>

			<div className='Slider h-200 bg-secondary' style={{ position: 'fixed', width: '0', overflowX: 'hidden', zIndex: '101', bottom: '5px', height: '70%', borderRadius: '35px', margin: "5px" }}>
				<Slider></Slider>
			</div>

			<div className='Slider2 h-200' style={{ position: 'fixed', width: '0', overflowX: 'hidden', zIndex: '101', bottom: '95px', right: '5px', height: '67%', borderRadius: '35px', margin: "0px" }}>
				<Slider2></Slider2>
			</div>

			<Container fluid id="goto">

				<CardGroup className=" p-2 d-block card-columns " id="addednotes" 
//	style={{minHeight:`${height}px`}}
				>
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
						
                          if(index<addItem.length-1)
						return (
							<Note2 style={{ position: 'relative' }}searchterm={searchTerm}  editingnotes={editingnotes} notek={val} key={index} img={val.img} id={index} count={val.c} new="" deleteItem={onDelete}>
                            {/* {console.log("i worked")} */}
							{/* {console.log("^")} */}
							{/* {         (val.title!="Open")&&
										localStorage.setItem(index,JSON.stringify(val)) */}
							{/* } */}
							</Note2>

						);
						else{
							return (
								<Note2 style={{ position: 'relative' }} searchterm={searchTerm}  editingnotes={editingnotes} notek={val} key={index} img={val.img} id={index} count={val.c} new="shadowblue" deleteItem={onDelete}>
								{/* {console.log("i worked")} */}
								{/* {console.log("^")} */}
								{/* {         (val.title!="Open")&&
											localStorage.setItem(index,JSON.stringify(val)) */}
								{/* } */}
								</Note2>
	
							);
						}

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


				<AddTask passNote={add} premade={premade}  ></AddTask>


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

<hr style={{margin:"1px",backgroundColor:"#4183BB"}}></hr>
			<div onClick={G3}>
				<div className='notes' style={{ position: 'relative' }} >
				<Container fluid >
				
					<Notes notes={props.notes} sendData={searchTerm}  ></Notes>
					
					</Container>
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