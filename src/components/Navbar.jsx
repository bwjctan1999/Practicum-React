export default function Navbar({ type, placeholder }) {
  return (
    <div className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow md:pb-4">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <div className="w-8 h-8 rounded-full bg-gradientBlue-start"></div>
        <h1 className="leading-none text-2xl">
          <a
            className="no-underline text-grey-darkest hover:text-black ml-5"
            href="#"
          >
            Something
          </a>
        </h1>

        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>

      <form className="mb-4 w-full md:mb-0 md:w-1/4">
        <label className="hidden" for="search-form">
          Search
        </label>
        <input
          className="border-none bg-gray-50 border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
          placeholder="Search"
          type="text"
        />
        <button className="hidden">Submit</button>
      </form>

      <nav>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <a
              className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              Products
            </a>
          </li>

          <li className="md:ml-4">
            <a
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              About
            </a>
          </li>

          <li className="md:ml-4">
            <a
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
