import React from "react";
import emailjs from "emailjs-com";

function ContactForm(): JSX.Element {
    function sendEmail(e: React.SyntheticEvent) {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                e.target as string | HTMLFormElement,
                "YOUR_USER_ID",
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    }
    return (
        <form
            className="w-full flex mt-5 flex-col"
            action=""
            onSubmit={sendEmail}
        >
            <h2 className="font-bold text-xl lg:text-xl mb-2 ">
                Nous Contacter
            </h2>
            <label className="font-bold" htmlFor="">
                Email
            </label>
            <input
                className="mt-1 text-ms bg-customYellow border border-black rouded-md p-2 rounded-md focus:outline-none"
                type="text"
            />
            <label className="mt-2 font-bold" htmlFor="">
                Message
            </label>
            <textarea className="mt-1 text-ms lg:mb-5 bg-customYellow border border-black rouded-md p-2 rounded-md focus:outline-none" />
            <button
                type="submit"
                value="send"
                className={`w-52 lg:w-52 p-1 my-4 text-xs lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow transform hover:scale-105 `}
            >
                Envoyer
            </button>
        </form>
    );
}

export default ContactForm;
