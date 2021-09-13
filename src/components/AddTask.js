import { Form, Jumbotron, Button, Row, Col, Container } from 'react-bootstrap';
import $ from 'jquery';
import { useState } from 'react';



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
			img: "3.png",
            c :note1.c,
		});
	}
	const X3 = () => {
		$('.n1 #m2').toggle();

		$('.n1 #m1').toggle();


		setNote({
			title: "",
			description: "",
			img: "2.png",
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
        countit((counter+1)%10)
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

			<Container id="m2" style={{
				display: "none", marginBottom: "0px", paddingLeft: "10px", paddingTop: "5px", paddingBottom: "0px", paddingRight: "2px", width: "90%", zIndex: "100", opacity: "100%",
				position: "fixed",
				bottom: "0",
				left: "0%", right: '2%', backdropFilter: "blur(4px) brightness(0.9)", borderRadius: "45px"
			}}>
				<Form id="addTask" style={{ padding: "2px" }}>
					<Row>

						<Col xs={3} style={{ paddingLeft: "15px", paddingRight: "1px" }}>

							<Form.Control as="textarea"  placeholder="Title Here" name="title" value={note1.title} onChange={InputEvent} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",height:"auto",minHeight:"70px",maxHeight:"200px" }} />
						</Col>
						<Col xs={4} style={{ paddingLeft: "1px", paddingRight: "1px" }} >
							<Form.Control as="textarea" id="autoheight" placeholder="Description Here" name="description" htmlFor="addTask" value={note1.description} onChange={InputEvent} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",maxHeight:"200px" }} />
						</Col>
						<Col xs={2} style={{ paddingLeft: "1px", paddingRight: "1px" }}>
							<Form.Control as="textarea"  placeholder="Image URL" name="img" value={note1.img} onChange={InputEvent} onFocus={RemoveImg} rows={autoheight} style={{ margin: "0px", borderRadius: "25px",maxHeight:"200px" }} />
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