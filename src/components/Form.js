import React from 'react'
import { useState } from 'react'

export default function Form(props) {

    const[text,setText]=useState("");
    const[countVowel,setcountVowel]=useState(0)
    let count=0;
  let i;
    //for convert the text into upper calse
    const handleclick1=(eve)=>
    {
        // console.log("hey you clicked me",text);
        let n=text.toUpperCase();
        setText(n);
    }
    //for convert the text into lower calse
    const handleclick2=(eve)=>
        {
            // console.log("hey you clicked me",text);
            let n=text.toLowerCase();
            setText(n);
        }
        //for clear the text
        const handleclick3=(eve)=>
            {
                // console.log("hey you clicked me",text);
                setText('');
            }
                    //for counting vowel in text
                    const handleclick4=(eve)=>
                        {
                            for ( i of text)    //using for of loop 
                                {
                                    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u")
                                    {
                                        count++;   
                                    }
                                    else if(i=="A"||i=="E"||i=="i"||i=="O"||i=="U")
                                    {
                                        count++;  
                                    }
                               
                                }
                                setcountVowel(count)
                         
                            
                        }

    const handleOnChange=(eve)=>
        {
            // console.log("on change")
            setText(eve.target.value)
        }

  return (
    <>
        <div className='container mb-10'>
            <form>
                <div className="mb-3">
                <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} style={{backgroundColor:props.mode=='dark'?'#181C14':'white',color:props.mode=='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
                </div>
                
            </form>
            <div className='btnbox3' >
                <button disabled={text.length==0}className="btn btn-primary " onClick={handleclick1}>convert to uppercase</button>
                <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleclick2}>convert to lowercase</button>
                <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleclick3}>clear text</button>
                <button disabled={text.length==0}className="btn btn-primary mx-2" onClick={handleclick4}>count vowel</button>
            </div>
        
        </div>
        <div className='container'>
            <h1 style={{color:props.mode=='dark'?'white':'black'}}>Your text summary</h1>
            <p style={{color:props.mode=='dark'?'white':'black'}}>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
            <p style={{color:props.mode=='dark'?'white':'black'}}>{0.008*text.split(/\s/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h3 style={{color:props.mode=='dark'?'white':'black'}}>Preview</h3>
            <p style={{color:props.mode=='dark'?'white':'black'}}>{text}</p>
            <p style={{color:props.mode=='dark'?'white':'black'}}>Number of vowel {countVowel}</p>
        </div>
    </>
  )
}