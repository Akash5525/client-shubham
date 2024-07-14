import React from 'react';

export function ContactUs() {
  return (
    <section className="bg-cover bg-center py-16 px-8" style={{ backgroundImage: "url('/images/architecture-background.jpg')" }}>
      <div className="container mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl">
        <h5 className="text-gray-700 mb-2 text-sm lg:text-xl tracking-wide uppercase">
          Get in Touch
        </h5>
        <h1 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-bold">
          We Design Your Dreams
        </h1>
        <p className="mb-10 font-light text-lg lg:mb-16 mx-auto max-w-2xl text-gray-600">
          Let’s discuss your project. Whether it's a new build, renovation, or consultation, we are here to provide the best architectural solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <iframe
            title="Mohit Architect Bhilwara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14497.00315247918!2d74.62656381752455!3d25.349361479126985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a6c5d6fa09f87%3A0xf2f8b610e5dd17!2sMohit%20Architect!5e0!3m2!1sen!2sin!4v1699202931313!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full lg:max-h-[510px] rounded-lg shadow-lg"
          />
          <form
            action="#"
            className="flex flex-col gap-6 lg:max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission logic here
            }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-left font-medium text-gray-700" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-left font-medium text-gray-700" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-left font-medium text-gray-700" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-left font-medium text-gray-700" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
