const Header = () => {
  return (
    <>
      <header className="bg-blue-400 fixed w-full">
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
