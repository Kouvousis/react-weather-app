const Header = () => {
  return (
    <>
      <header className="bg-gray-800 fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-center h-8">
          <span className="text-white text-lg font-semibold flex items-center gap-2">
            Weather App
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
