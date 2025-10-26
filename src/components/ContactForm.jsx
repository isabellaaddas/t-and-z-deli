import "./../css/ContactForm.css";

const ContactForm = () => {
    return (
        <form method="POST" id="contact-form" className="one">

            <h3>Questions or concerns? Send us a message.</h3>

            <input type="hidden" name="access_key" value="4f59db15-e060-4245-857e-8a98c984a6ee"/>

            <p>
                <label for="first-name">First name:</label>
                <br/>
                <input type="text" name="first-name" required/>
            </p>

            <p>
                <label for="last-name">Last name:</label>
                <br/>
                <input type="text" name="last-name" required/>
            </p>
            
            <p>
                <label for="email">Email:</label>
                <br/>
                <input type="email" name="email" required/>
            </p>
            
            <p>
                <label for="message">Message:</label>
                <br/>
                <textarea name="message" required></textarea>
            </p>
            

            <input type="checkbox" name="botcheck" className="hidden"/>
            
            <p><button type="submit">Submit Form</button></p>

            <div id="contact-result"></div>
        </form>
    );
};

export default ContactForm;