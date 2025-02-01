const Navbar = () => {
  return (
    <>
      <div className="px-[8%] py-10">
        <nav className="relative border-red-600 flex justify-between">
          <ul className="flex items-center gap-5">
            <li className="p-2">Home</li>
            <li className="p-2">Explore</li>
            <li className="p-2">Services</li>
          </ul>
          <div className="absolute w-full flex items-center justify-center">
            <h1 className=" top-0 left-1/2 text-3xl text-blue-950 font-extrabold">
              CAR <span className="text-sm text-red-700">DEALERSHIP</span>
            </h1>
          </div>

          <ul className="flex items-center gap-5">
            <li className="p-2">Feedbacks</li>
            <li className="p-2">Blogs</li>
            <li className="p-2">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
