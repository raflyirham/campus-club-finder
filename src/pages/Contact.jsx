const Contact = () => {
  return (
    <div className="flex flex-row px-20 py-40 h-dvh gap-10 max-md:px-10 max-md:flex-col max-sm:px-5">
      <div className="flex flex-col gap-4 w-1/2 max-lg:w-1/4 max-md:w-full">
        <h1 className="text-4xl font-bold text-primary max-lg:text-2xl max-sm:text-xl">
          Contact Us
        </h1>
        <p className="text-lg text-gray-500 max-lg:text-base max-md:text-base max-sm:text-sm">
          We're here to help you find the perfect club for you.
        </p>
      </div>
      <form className="flex flex-col gap-8 p-10 bg-white rounded-lg h-fit shadow-md w-1/2 max-lg:w-3/4 max-md:w-full max-md:p-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-primary">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            required
            id="message"
            placeholder="Enter your message"
            rows={5}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white rounded-md p-2 cursor-pointer transition-all duration-300 hover:bg-primary/80 active:scale-95 max-md:text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
