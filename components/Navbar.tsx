export default function Navbar() {
    return (
      <nav className="border-b border-gray-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-lg font-semibold tracking-wide">
            AI Product Lab
          </h1>
  
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              Projects
            </a>
  
            <a href="#" className="hover:text-white">
              About
            </a>
  
            <a href="#" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </nav>
    );
  }