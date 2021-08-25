import React from "react";

function ContactForm(): JSX.Element {
    return (
        <form className="w-full flex mt-5 flex-col" action="">
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
                className={`w-52 lg:w-52 p-1 my-4 text-xs lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow transform hover:scale-105 `}
            >
                Envoyer
            </button>
        </form>
    );
}

export default ContactForm;
