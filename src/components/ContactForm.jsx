import "./../css/ContactForm.css";
import {useState} from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4f59db15-e060-4245-857e-8a98c984a6ee");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent! Expect response within business hours.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <form id="contact-form" className="one" onSubmit={onSubmit}>

            <h3>Questions or concerns? Send us a message.</h3>

            <p>
                <label htmlFor="first-name">First name:</label>
                <br/>
                <input type="text" name="first-name" required/>
            </p>

            <p>
                <label htmlFor="last-name">Last name:</label>
                <br/>
                <input type="text" name="last-name" required/>
            </p>
            
            <p>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="email" name="email" required/>
            </p>
            
            <p>
                <label htmlFor="message">Message:</label>
                <br/>
                <textarea name="message" required></textarea>
            </p>
            
            <p><button type="submit">Submit Form</button></p>

            <div id="contact-result">{result}</div>
        </form>
    );
};

export default ContactForm;