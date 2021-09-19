import { Form, Jumbotron, Button, Row, Col, Container } from 'react-bootstrap';
import $ from 'jquery';
import { useEffect, useState } from 'react';



const AddTask = (props) => {
const [counter,countit]=useState(JSON.parse(localStorage.getItem("count"))||0);
	const [note1, setNote] = useState({
		title: "",
		description: "",
		img: "",
        c: 1,
	});
	const[autoheight,increaserow]=useState(3);

	const InputEvent = (event) => {

		const { name, value, src } = event.target;

		setNote((old) => {
	
			return {
				...old,
				[name]: value, src,c:counter,

			};

		})
		//console.log("counter"+counter)
		// if($('#autoheight').hasScrollBar())
		//  console.log("scrooooool");
		var aaaaaa=document.getElementById('autoheight')
		if(scrollbarVisible(aaaaaa)){
			increaserow(autoheight+1);
		}
		if(scrollnoneeded(aaaaaa)){
			increaserow(autoheight-1);
		}

	}




	const G = () => {
		$('.n1 #m2').fadeIn();

		$('.n1 #m1').toggle();
	}

	const X2 = () => {


		setNote({
			title: "",
			description: "",
			img: "",
            c :note1.c,
		});
	}
useEffect(()=>{
	var currnote=JSON.parse(localStorage.getItem("current"))
	setNote({
			title: props.premade.title||currnote.title||"",
			description: props.premade.description||currnote.description||"",
			img: props.premade.img||currnote.img||`${counter}.png`,
            c :props.premade.c||"",
		});
},[props.premade])
	// const editingnotes = (premadenote)=>{
    useEffect(()=>{
    localStorage.setItem("current",JSON.stringify(note1))
	},[note1])
		
	// }
	const X3 = () => {
		$('.n1 #m2').toggle();

		$('.n1 #m1').toggle();


		setNote({
			title: "",
			description: "",
			img: "",
			c :note1.c,

		});
	}

	const RemoveImg = () => {

		setNote({
			title: note1.title,
			description: note1.description,
			img: "",
			c :note1.c,

		});
	}


	const X = () => {
        countit((counter+1)%20)
		console.log("counter"+counter)
		props.passNote(note1);
        localStorage.setItem("count",JSON.stringify(counter))
		setNote({
			title: "",
			description: "",
			img: "",
			c :counter,

		});
		
		
		$('.n1 #m1').fadeIn();

		$('.n1 #m2').toggle();

	}
	
	// (function($) {
	// 	$.fn.hasScrollBar = function() {
	// 		return this.get(0).scrollHeight > this.height();
	// 	}
	// })($);

	function scrollbarVisible(element) {
		return element.scrollHeight > element.clientHeight;
	  }
	  function scrollnoneeded(element) {
		  
		 
		var lines=element.value.split('');
		 console.log((lines.length*13)/element.clientWidth+"left")
		console.log(lines.length+"lines")
		console.log(autoheight+"right")
		console.log((lines.length*13)/element.clientWidth<autoheight-2 &&autoheight>3)
		return(autoheight>3&&(lines.length*10)/element.clientWidth<(autoheight-3))
		//return ;&&element.scrollHeight > element.clientHeight
	  }
     
	return (
		<>

			<Container id="m2" className="backdrop" style={{
				display: "none", marginBottom: "0px", paddingLeft: "10px", paddingTop: "5px", paddingBottom: "0px", paddingRight: "2px", width: "90%", zIndex: "102", opacity: "100%",
				position: "fixed",
				bottom: "0",
				left: "0%", right: '2%', borderRadius: "45px"
			}}>
				<Form id="addTask" style={{ padding: "2px" }}>
					<Row>

						<Col xs={3} style={{ paddingLeft: "15px", paddingRight: "1px" }}>

							<Form.Control id="titlef" as="textarea"  placeholder="Title Here" name="title" value={note1.title} onChange={InputEvent} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",height:"auto",minHeight:"70px",maxHeight:"200px" }} />
						</Col>
						<Col xs={4} style={{ paddingLeft: "1px", paddingRight: "1px" }} >
							<Form.Control  as="textarea" id="autoheight" placeholder="Description Here" name="description" htmlFor="addTask" value={note1.description} onChange={InputEvent} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",maxHeight:"200px" }} />
						</Col>
						<Col xs={2} style={{ paddingLeft: "1px", paddingRight: "1px" }}>
							<Form.Control id="imgf" as="textarea"  placeholder="Image URL" name="img" value={note1.img} onChange={InputEvent} onFocus={RemoveImg} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",maxHeight:"200px",minWidth:"65px" }} />
						</Col>
						<Col xs={2}><Button onClick={X} style={{ borderRadius: "35px" }} >Save</Button>
							<Button onClick={X2} onDoubleClick={X3} style={{ borderRadius: "35px" }} variant="secondary">Reset</Button>{''}
						</Col>

					</Row>
				</Form>
				<br />

			</Container>

			<Jumbotron onClick={G} className="jumbotron3" id="m1" style={{
				borderRadius: "40px", padding: "5px", width: "40%", color: "#4183BB",
				marginBottom: "5px",
				left: "30%", zIndex: "100", opacity: "90%",
				position: "fixed",
				bottom: "0",
			}}>
				<Container>
					<h3 class="display-4" style={{ textAlign: "center" }}>Take Notes</h3>
					<p class="lead"></p>
				</Container>
			</Jumbotron>

		</>

	);
}

export default AddTask;