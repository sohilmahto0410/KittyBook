const Navbar = ({ onSearch }) => {
  return (
    <div>
      <nav>
        <h1 className="brand tc f1 black ">KittyBook</h1>
        <div className="tc ma3">
          <input
            className="search tc grow"
            placeholder="Search"
            type="text"
            onChange={onSearch}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
