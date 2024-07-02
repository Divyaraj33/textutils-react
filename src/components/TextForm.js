import React, { useState } from 'react'
import '../App.css';


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into uppercase!", "success");
    }
    const handleLowClick = () => {
        //console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into uppercase!", "success");
    }
    const handleClearClick = () => {
        //console.log("UpperCase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);

    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }
    const capitalizeEveryWord = () => {
        if (text.trim() === '') return; // Handle empty input

        const words = text.split(' ');
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        const newText = capitalizedWords.join(' ');
        setText(newText);
        props.showAlert("your first word is capitalized!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //Wrong way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter text here" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into UpperCase </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert into LowerCase </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces </button>
                <button className="btn btn-primary mx-1 my-1" onClick={capitalizeEveryWord}>First word capital</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Yout text summary</h3>
                <p>{text.split(" ").length} words, {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

                <h1 className='aboutme my-3 '>What we do</h1>
                <div className="card1 text-center my-5 mb-2 bgcolor">
                    <div className="card-header1 my-3 bgcolor" >
                        Created by <span className='divya bgcolor'>Divya Raj</span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title bgcolor">A Online Text Editing Website</h5>
                        <p className="card-text bgcolor">TextUtils is a utility which can be manipulate your text in the way you want.</p>
                        <button class="btn btn-primary mb-4 bgcolor edit2">Know More..</button>
                    </div>
                    <div class="card-footer card-header1 text-muted bgcolor">
                        This <span className='divya bgcolor'>TextUtils</span> website is made with the help of Reactjs.
                    </div>
                </div>

                <h1 className='aboutme my-5'>About Us</h1>
                <div className="card2" >
                    <img src="IMG_0209.JPG" className="card-img-top img1" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title my-2">Divya Raj</h5>
                        <p className="card-text">TextUtils is a utility that provides a range of features to manipulate and transform text data according to user preferences. It's a powerful tool that can help users to clean, format, and analyze text data with ease. I am making this website for editing the text and with the help of this website we can done many thing.Plaese Visit to my TextUtils Web App.</p>
                    </div>
                </div>

                <div className='section aboutme'>
                    <h2 className='common-heading'>Feel Free to Contact us</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57317.40718945287!2d85.3451373163476!3d26.12052186100114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e8a3175529%3A0x7c2d919680f759d!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1719865244543!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map of Muzaffarpur, Bihar" // Add a descriptive title here
                    ></iframe>
                </div>

                <h1 className='aboutme'>Feedback </h1>
                <div className="my-3 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Your Query</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
                <div className="copyright">
                    <p>Copyright @2024. All rights reserved.</p>
                </div>

            </div>
        </>
    )
}
