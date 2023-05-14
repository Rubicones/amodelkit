import "./Form.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

library.add(fab);

const Form = ({ scrollHere, scrolled }) => {
    library.add(fab);
    library.add(fas);

    const botToken = '5920269121:AAGiBw7S2BZAESxYEl4wzWLQSxBaojdTU60';
    const chatId = '255714332';

    const formRef = useRef(null);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const submitBtn = useRef(null)

    if (scrollHere) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
        scrolled(false);
    }

    const validateForm = () => {
        if (!nameRef.current.value)
            nameRef.current.style.borderBottom = "1px solid red"
        else 
            nameRef.current.style.borderBottom = "1px solid white"
        if (!messageRef.current.value)
            messageRef.current.style.borderBottom = "1px solid red"
        else
            messageRef.current.style.borderBottom = "1px solid white"
        if (nameRef.current.value && messageRef.current.value){
            let message = `New Message!\n\nFirst name: ${nameRef.current.value}\nLast name: ${surnameRef.current.value}\n\nEmail: ${emailRef.current.value}\n\nMessage: ${messageRef.current.value}`
            sendMessageToTelegram(message)
            nameRef.current.value = ""
            surnameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""
            submitBtn.current.style.backgroundColor = "#18d228"

            setTimeout(function () {
                submitBtn.current.style.backgroundColor = "#eb4a4a"

            }, 3000)
        }


    }

    function sendMessageToTelegram(message) {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = {
          chat_id: chatId,
          text: message
        };
      
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(result => {
            console.log('Сообщение успешно отправлено в Telegram:', result);
          })
          .catch(error => {
            console.error('Ошибка отправки сообщения в Telegram:', error);
          });
      }

    return (
        <>
            <div className="form screen" ref={formRef}>
                <div className="form-container">
                    <span className="title">GET IN TOUCH</span>

                    <div className="blocks-container">
                        <div className="contacts-container">
                            <div className="light-text" id="name">
                                Maxim Popov
                            </div>
                            <div className="initials-container">
                                <FontAwesomeIcon
                                    icon="fa-solid fa-envelope"
                                    size="xl"
                                    style={{ color: "#ffffff" }}
                                    className="fasIcon"
                                />
                                <div className="light-text">
                                    amodelkit@gmail.com
                                </div>
                            </div>
                            <div className="initials-container">
                                <FontAwesomeIcon
                                    icon="fa-brands fa-telegram"
                                    style={{ color: "#ffffff" }}
                                    className="fasIcon"
                                    size="xl"
                                />
                                <div className="light-text">@maximpopov</div>
                            </div>
                        </div>
                        <div className="inputs-container" onsubmit="return false" ref={formRef}>
                            <div className="name-surname">
                                <div className="group">
                                    <label htmlFor="first-name" required>First name *</label>
                                    <input type="text" id="first-name" ref={nameRef}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="last-name">Last name</label>
                                    <input type="text" id="last-name" ref={surnameRef}/>
                                </div>
                            </div>
                            <div className="email">
                                <div className="group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="text" id="email" name="email" ref={emailRef}/>
                                </div>
                            </div>
                            <div className="message">
                                <div className="group">
                                    <label htmlFor="message" required>Message *</label>
                                    <textarea type="text" id="message" name="message" ref={messageRef}/>
                                </div>
                            </div>
                            {!window.matchMedia("(orientation: portrait)").matches ? 
                        <button type="submit" className="submit-btn" ref={submitBtn} onClick={validateForm}>Submit</button> :
                        ""}
                        </div>
                        {window.matchMedia("(orientation: portrait)").matches ? 
                        <button type="submit" className="submit-btn" ref={submitBtn} onClick={validateForm}>Submit</button> :
                        ""}
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Form;
