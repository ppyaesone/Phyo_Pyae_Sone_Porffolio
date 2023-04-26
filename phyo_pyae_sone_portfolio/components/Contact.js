import React from "react";
import Heading from "./Heading";

const Contact = () => {
    return(
       <section className="container mx-auto py-10 px-4">
        <Heading title="Contact Us" />

        <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Name" className="inputStyle" required />

                <input type="text" placeholder="Email" className="inputStyle" required />
            </div>

            <input type="text" placeholder="Subject" className="inputStyle" required />

            <textarea rows="6" placeholder="Message" className="inputStyle"></textarea>

            <div>
                <button type="submit" className="btn">Send Message</button>
            </div>
        </form>
       </section>
    )
}

export default Contact