import React,{useState}from 'react'

export default function Textform(props) {

    const handelupclick=()=>{
        console.log(" upper cadse was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upper case","success ");
    }

    const handellowclick=()=>{

      let newtext=text.toLowerCase();
      setText(newtext)
  }

  const handelFirstCapitalize = () => {
    let newtext = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newtext);
    
  }

  const handelclearclick=()=>{

    let newtext="";
    setText(newtext)
}

    
    const handelonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        //by using these events we can remove text or add text in text box
    }
    const [text,setText]=useState('enter text here ');
    //wrong way to set text text="jkjls sdjfksj"
    // right way settext("lj lkjfh kj")
  return (
    <div>
      <h2 style={{color:props.mode==='dark'?'white':'black'}}  >{props.Heading}</h2>
<div className="mb-3">
  <textarea className="form-control"value={text} onChange={handelonchange} style={{ backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black' }}  id="MY box" rows="8"></textarea>
</div>
<button className="btn btn-primary"onClick={handelupclick}>convert to upper case</button>
<button className="btn btn-primary mx-2"onClick={handellowclick}>convert to lower case</button>
<button className="btn btn-primary"onClick={handelclearclick}>Clear Text</button>
<button className="btn btn-primary mx-2"onClick={handelFirstCapitalize}  >First capitalize</button>

<div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}} >
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} Words,{text.length} characters </p>
  <p>{0.008 * text.split(" ").length} Minuts to read </p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"enter text for preview"}</p>
</div>
    </div>
  )
}
