import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";


var deleted = [];

const Note2 = (props) => {
  const deleteNote = (id) => {
    var localdel = JSON.parse(localStorage.getItem("del"));
    //deleted.push(JSON.parse(localStorage.getItem("del")))
    if (localdel != null) deleted = localdel;
    else deleted = [];
    // deleted=[...deleted,props.notek]
    if (deleted != null && deleted.length === 21) {
      deleted.shift();
    }
    localStorage.removeItem(props.id);
    var keys = Object.keys(localStorage);
    var i = keys.length - 3;
    //console.log(i);
    localStorage.removeItem(i);
    if (props.id !== 0 && props.id!=1 &&props.id!=2) {
      console.log(`id ${props.id}`);
      props.deleteItem(props.id);
      deleted.push(props.notek);
      localStorage.setItem(`del`, JSON.stringify(deleted));
      //console.log(props.id);
    }
  };

  const sendData = () => {
    props.editingnotes(props.notek);
  };
  const [description, setdis] = useState(props.notek.description);
  const [finalimage, test] = useState(props.notek.img);
  const [website, test1] = useState(props.notek.img);
  // const [post,setPost]=useState(null);
  // useEffect(()=>{ localStorage.setItem(`del`,null)},[])
  useEffect(() => {
    //  axios.get("logo.clearbit.com/ko-fi.com")
    //    .then((res)=>{
    //    setPost(res.data);
    //    console.log("ppp")
    //  });
    //const testImage=(img,id)=> {
      setdis((description) => {
      var g=props.notek.description;
      if((g.includes('<')||g.includes('>'))&&props.id!=0 && props.id!=1 &&props.id!=2){
        
        g=g.replaceAll('<','&lt;')
        console.log(g);
        g=`<code>${g}</code>`
        return g
      }
     
      return g;

      })

    test1((img) => {
      var f = props.img;
      if (f.length === 0) return `${props.count}.png`;
      // if(!f.includes(".png")&&f.includes("https://")&&f.includes("/www.")&&f.slice(f.length-3,f.length)==".com")
      // return f;
      if (f.includes("youtu.be")) {
        return f;
      }
      if (!f.includes("/www.") && !f.includes(".png")) {
        f = `www.${f}`;
      }
      if (!f.includes("http:") && !f.includes(".png")) {
        f = `https://${f}`;
      }
      return f;
    });

    test((img) => {
      var a = props.img;
      //console.log(props.count)
      if (a.length === 0) return `${props.count}.png`;
      if(a.length>60)
      return a;
       if(a.slice(a.length-4,a.length)=="=101")
       return a;
      var k = a;
      if (k.includes("youtu.be")) {
        k = "youtube.com";
      }
      var count = 0;
      if (k.includes(".com")) {
        k = k.split(".com")[0];
        k = `${k}.com`;
      }
      if (k.includes("://")) {
        k = k.split("://www.")[1];
      }

      if (a.slice(a.length - 3, a.length) !== "png") {
        k = `http://logo.clearbit.com/${k}?size=101`;

        if (k.includes("/")) {
          for (var i in k) {
            if (k[i] == "/") {
              count++;

              if (count == 4) {
                var h = i;
              }
            }
          }
          // console.log(k.slice(0,h))
        }
        k = k.slice(0, h);
        //   console.log(k);
        return k;
      }
      // console.log(post.icons[0].src);

      // console.log(a);

      return a;
    });
    // props.notek.img=finalimage;
    if (props.id != "0" && props.id != "1" && props.id != "2" ) {
      if (props.searchterm === "")
        localStorage.setItem(props.id, JSON.stringify(props.notek));
    }
  });
  // }
  //});
  //var b=document.getElementById("link")
  //b.addEventListner("click",testImage)

  return (
    // style={{padding:'5px'}} className m5
    <div className="m-5 p-2 bl " >
      <Card
        key={props.notek.id}
        className={`m-2 border-0 shadow ${props.new} halfb `}
        id=""
        style={{
          //backgroundColor: '#ffffff',
          borderRadius: 45,
          padding: "4rem",
          height: "100%",
        }}
        onDoubleClick={sendData}
      >
        {/* <div className="dot" style={{backgroundColor:"blue",borderRadius:"50%",height:"10px",width:"10px"}}>
            </div> */}
        {/* {4rem} */}
        <Row>
          <Col xs={12}>
            <Card.Img
              src={finalimage}
              alt=""
              style={{ objectFit: "cover", borderRadius: 45 }}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card.Body>
              
              <Card.Title
                as="h3"
                style={{
                  color: "#4183BB",
                  display: "inline",
                  boxSizing: "content-box",
                }}
                dangerouslySetInnerHTML={{ __html: props.notek.title }}
              ></Card.Title>
              
              
              <Card.Text
                as="h4"
                
                dangerouslySetInnerHTML={{__html: description} }
              ></Card.Text>
            </Card.Body>
            <Button
              id="link"
              variant="link"
              className="border border-secondary"
              style={{ borderRadius: "25px" }}
            >
              <a as="h4" rel="noreferrer" target="_blank" href={website}>
                <span className="glyphicon glyphicon-open"></span>
              </a>
            </Button>
            <Button
              className="btn float-right"
              style={{ borderRadius: "50px", outline: "none" }}
              onClick={deleteNote}
            >
              <span className="glyphicon glyphicon-trash"></span>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Note2;
