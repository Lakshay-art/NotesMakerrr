import React, { useEffect, useRef, useState } from 'react'
import {Jumbotron,Button,FormControl,Form,Row,Col} from 'react-bootstrap'
// import Propsreciever from './Propsreciever'
import axios from 'axios'
import $ from 'jquery'

export default function UseRefuseEffect() {
    
    const [state, setstate] = useState("^o^")
    // const [name, setname] = useState("^o^")
    
     const cityRef=useRef();//declaring an useRef;

    useEffect(() => {//this useEffect prints the state in console every time the state is changed automatically
        if(JSON.parse(localStorage.getItem("name"))!=null){ 
        setstate(JSON.parse(localStorage.getItem("name")));
        }
    })

    useEffect(() => {//this useEffect prints the state in console only first time(initial value) .it prints "undefined" because at start the input is null(empty)
        console.log(state);
    },[])

    useEffect(()=>{
        document.getElementById("ff").innerHTML= `<h6 style="padding:1px;margin:1px">${state}</h6>`
    })

    const submitt=(e)=>{
        e.preventDefault();
        if(cityRef.current.value!=""){
        setstate(cityRef.current.value.slice(0,2).toUpperCase())
        localStorage.setItem("name",JSON.stringify(cityRef.current.value.slice(0,2).toUpperCase()))}
        HideName();
        axios.post("http://localhost:8000/user/userdata",{
            uname:cityRef.current.value,
            upassword:" "
            
        }).then((res)=>{
            console.log(res.data)
        },(err)=>{
            //alert("Error while sending data")
            console.log(err)
        })
    }
    const HideName = ()=>{
      //  $('#useName').animate({left:"20%"}, 100);
        $('#useName').animate({left:"103%"}, 800);
      //  $('#useName').focus()
    }
    const ShowName = ()=>{
       // $('#useName').animate({left:"33%"}, 800);
        $('#useName').animate({left:"25%"}, 800);
    }
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("name"))==null){ 
        ShowName()}
    },[])
    return (
        <>
        <Jumbotron id="useName" className="shadow " style={{ width:"50%", padding: "4px", margin: "auto",marginBottom:"20px", borderRadius: "30px", position: "fixed",top:"50%",left:"-60%",height:"100px" ,zIndex: "201",minWidth:"150px",opacity:"90%",border:"solid 1px #4183BB"}}>
        <Form inline className=' mx-auto' style={{ width:"70%"}} onSubmit={submitt} >
            <FormControl id="namef" type='text' placeholder='..' href="#" className='w-100 ' style={{ borderRadius: "25px" }} ref={cityRef} />
            <Button type='submit' className='invisible w-100'></Button>
            <Row style={{margin:"auto"}}><Col style={{padding:"2px"}}> <h4 style={{textAlign:"center",margin:"2px",width:"40%",padding:"0px"}}>NAME</h4></Col>
            <Col  style={{padding:"2px"}}><Button type='submit'  style={{fontSize:"10px",padding:"4px"}}>;)</Button></Col>
            </Row>
           
            
        </Form>
    </Jumbotron>
    {/* <button id="ff" type="button" class="btn btn-secondary btn-sm rounded-pill ml-auto" onClick={ShowName}>
        
          </button> */}
    
    </>
    )
}
