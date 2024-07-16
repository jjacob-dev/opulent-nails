function Cinput() {
  return (
    <>
      <div className="w-[350px] lg:w-[500px]">
        <div className="flex justify-center items-center text-2xl font-medium">
          <h1>Contact Me</h1>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="2739f2b9-1a53-4a71-92ee-c6877a88c016"
          ></input>
          <div>
            <p>Name</p>
            <input
              type="name"
              id="name"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
            ></input>
          </div>
          <div>
            <p>Email</p>
            <input
              name="email"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
            ></input>
          </div>

          <div>
            <p>Phone</p>
            <input
              name="subject"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            ></input>
          </div>

          <div className="sm:col-span-2">
            <p>Message</p>
            <textarea
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-7 text-sm font-medium text-center text-white bg-rose-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}

export default Cinput;
