import "./../css/Contact.css";
import ContactForm from "./../components/ContactForm";
import contactPic from "./../images/contact-us.jpg";

const Contact = () => {
    return (
        <main id="contact" className="columns">
            <ContactForm />

            <div id="contact-img" className="one"><img src={contactPic}/></div>
        </main>
    );
};

export default Contact;