import { useState } from 'react';
import backgroundContactForm from '../../../assets/backgroundContactForm.jpg';
import decoration from '../../../assets/decoration.svg';
import Facebook from '../../../assets/Facebook.svg';
import Instagram from '../../../assets/Instagram.svg';


const HomeContact = (props) => {
    const [Name, setName] = useState('');
    const [NameWritten, setNameWritten] = useState(false);

    const [Email, setEmail] = useState("");
    const [EmailWritten, setEmailWritten] = useState(false);

    const [Message, setMessage] = useState('');
    const [MessageWritten, setMessageWritten] = useState(false);

    
    const NameValid = Name.trim() !== '';
    const nameInputInvalid = !NameValid && NameWritten;

    const EmailValid = Email.includes("@");
    const EmailInvalid = !EmailValid && EmailWritten;

    const MessageValid = Message.trim().length === 120;
    const MessageInvalid = !MessageValid && MessageWritten;

    let formValid = false;

    if (NameValid) {
        formValid = true;
    }

    const handleNameInputChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailInputChange = event => {
        setEmail(event.target.value)
    };

    const handleMessageInputChange = (event) => {
        setMessage(event.target.value)
    };

    const handleNameInputBlur = (event) => {
        setNameWritten(true)
    };

    const handleEmailInputBlur = (event) => {
        setEmailWritten(true)
    };

    const handleMessageInputBlur = (event) => {
        setMessageWritten(true)
    };

    const handleForm = (event) => {
        event.preventDefault();
        const data = { name: Name, email: Email, message: Message };
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( data )
        }).then((response) => (response.json()
        ).then((response) => {
            if (response.ok) {
                console.log("success");
                alert("Wiadomo???? zosta??a wys??ana");
                return;
            } else if (response.status === 400) {
                console.log("error");
                alert("Wiadomo???? nie zosta??a wys??ana, spr??buj ponownie.")
            }
        }).catch(err => {
            
        })
        )
    }


    const nameInputClasses = nameInputInvalid ? 'contact-form-all-name-input-invalid' : 'contact-form-all-name-input';
    const emailInputClasses = EmailInvalid ? 'contact-form-all-email-input-invalid' : 'contact-form-all-email-input';
    const messageInputClasses = MessageInvalid ? 'contact-form-all-message-textarea-invalid' : 'contact-form-all-message-textarea';
   
    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <img src={backgroundContactForm} alt="picture" className="contact-left-img"></img>
            </div>
            <div className="contact-right">
                <h3 className="contact-right-h3">Skontaktuj si?? z nami</h3>
                <img src={decoration} alt="decoration"></img>
            </div>
            <form className="contact-form" onSubmit={handleForm}>
                <div className="contact-form-all">
                    <div className="contact-form-all-name">
                        <label htmlFor='name' className="contact-form-all-name-label">Wpisz swoje imi??</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className={nameInputClasses}
                            placeholder="Katarzyna"
                            value={Name}
                            onChange={handleNameInputChange}
                            onBlur={handleNameInputBlur}
                        />
                        {nameInputInvalid && (
                            <p className="error-text">Podane imi?? jest nieprawidlowe!</p>
                        )}
                    </div>
                    <div className="contact-form-all-email">
                        <label className="contact-form-all-email-label">Wpisz sw??j email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className={emailInputClasses}
                            placeholder="abc@xyz.pl"
                            value={Email}
                            onChange={handleEmailInputChange}
                            onBlur={handleEmailInputBlur}
                        />
                        {EmailInvalid && (
                            <p className="error-text">Podany email jest nieprawid??owy!</p>
                        )}
                    </div>
                </div>
                <div className="contact-form-all-message">
                    <label className="contact-form-all-message-label">Wpisz swoj?? wiadomo????</label>
                    <textarea
                        rows="5"
                        id="message"
                        type="text"
                        name="message"
                        className={messageInputClasses}
                        placeholder="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={Message}
                        onChange={handleMessageInputChange}
                        onBlur={handleMessageInputBlur}
                        maxLength={120}
                    ></textarea>
                    {MessageInvalid && (
                        <p className="error-text">Wiadomo???? musi mie?? co najmniej 120 znak??w!</p>
                    )}
                </div>
                <div className="contact-form-all-button">
                    <button className="contact-form-all-button-send" type="submit" disabled={!formValid}>Wy??lij</button>
                </div>
            </form>
            <div className="contact-footer">
                <div className="contact-footer-rights">
                    <p>Copyright by Coders Lab</p>
                </div>
                <div className="contact-footer-icons">
                    <img src={Facebook} alt="Facebook-Icon" className="contact-footer-icons-fb"></img>
                    <img src={Instagram} alt="Instagram-Icon" className="contact-footer-icons-insta"></img>
                </div>
            </div>
        </section>
    )
}

export default HomeContact;
