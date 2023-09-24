import React, { useState } from 'react'
export default function Textform(props) {
    
    let [text, setText] = useState('');
    const HandleUpClick = () => {
        setText(text.toUpperCase());
    };
    
    const HandleTitleClick = () => {
        text = text.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    setText(text.join(' '));
    };
    
    const HandleLowClick = () => {
        setText(text.toLowerCase());
    };
    
    const HandleClr = () => {
        setText('');
    };
    
    const HandleCopy = () => {
        navigator.clipboard.writeText(text);
        setText(text);
        alert("Text-Copied !!!");
        
    };
    
    const HandleExtraSpace = () => {

        setText(text.split(' ').join(''));

        
    };

    const HandleOnChange = (event) => {
        setText(event.target.value);        
    };

    let words = 0;    
    if (text === ''){
        words = 0;
    }        
    else{
        words = text.split(' ').length;
    }


    return (
        <>
            <div className='flex flex-col items-start'>

                <textarea rows="12" value={text} className="text" onChange={HandleOnChange} placeholder="Write your text here...">
                </textarea>

                <div className='flex'>

                <button className='btn-uppercase' onClick={HandleUpClick}> 
                Convert to UPPERCASE
                </button>

                <button className='btn-TitleCase' onClick={HandleTitleClick}> 
                Convert to Titlecase
                </button>
                
                <button className='btn-lowercase' onClick={HandleLowClick}> 
                Convert to lowercase
                </button>
                
                <button className='btn-copy' onClick={HandleCopy}> 
                Copy Text
                </button>
                
                <button className='btn-extraSpace' onClick={HandleExtraSpace}> 
                Remove Space
                </button>
                
                <button className='btn-clr' onClick={HandleClr}> 
                Clear Text
                </button>

                </div>
            </div>
            
            <div className='flex flex-col items-start my-7 mx-72'>
                <div className='text-4xl font-bold'> Text Info :</div>
                <div className='my-4 text-xl'>The text contains {words} word and {text.length} character.</div>
            </div>        
        </>
    );
}
