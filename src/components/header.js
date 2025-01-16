"use client";

export default function Header() {
  return (
    <header className="sticky top-0 bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/"><h1 className="text-xl font-bold">Yours Charan Goud</h1></a>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/blogs" className="hover:text-gray-300">Blogs</a></li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
              />
            </svg>
          </button>
        </nav>
      </div>
      <div id="mobile-menu" className="hidden md:hidden bg-blue-700">
        <ul className="flex flex-col space-y-2 p-4">
          <li><a href="/" className="block hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="block hover:text-gray-300">About</a></li>
          <li><a href="/contact" className="block hover:text-gray-300">Contact</a></li>
          <li><a href="/blogs" className="block hover:text-gray-300">Blogs</a></li>
        </ul>
      </div>
    </header>
  );
}