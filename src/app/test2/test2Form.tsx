export default function ContactForm2() {
  return (
    <form className="flex flex-col">
      <div className="w-full flex justify-center">
        <input
          type="text"
          required
          className="w-[35%] m-6 p-2 bg-transparent text-white border-b-2 border-gray-200 focus:outline-none  hover:placeholder-red-700 hover:border-red-700 hover:text-red-700"
          placeholder="*YOUR NAME"
          autoComplete="off"
          id="name"
        />

        <input
          type="email"
          required
          className="w-[35%] m-6 p-2 bg-transparent text-white border-b-2 border-gray-200 focus:outline-none  hover:placeholder-red-700 hover:border-red-700 hover:text-red-700"
          placeholder="*YOUR EMAIL"
          autoComplete="off"
          id="email"
        />
      </div>
      <div className="w-full flex justify-center">
        <input
          type="number"
          required
          className="w-[35%] m-6 p-2 bg-transparent text-white border-b-2 border-gray-200 focus:outline-none  hover:placeholder-red-700 hover:border-red-700 hover:text-red-700"
          placeholder="*YOUR PHONE"
          autoComplete="off"
          id="number"
        />
        <input
          type="text"
          required
          className="w-[35%] m-6 p-2 bg-transparent text-white border-b-2 border-gray-200 focus:outline-none  hover:placeholder-red-700 hover:border-red-700 hover:text-red-700"
          placeholder="*YOUR SUBJECT"
          autoComplete="off"
          id="subject"
        />
      </div>
      <div className="w-full flex justify-center">
        <textarea
          rows={4}
          required
          className="w-[70%] mb-10 bg-transparent text-white border-b-2 border-gray-200 focus:outline-none  hover:placeholder-red-700 hover:border-red-700 hover:text-red-700"
          placeholder="*YOUR MESSAGE"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-stone-950 border border-transparent rounded-b-lg text-red-700 font-md hover:text-white"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
