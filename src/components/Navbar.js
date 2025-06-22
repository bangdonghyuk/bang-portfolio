function Navbar({ onScrollTo }) {
  return (
    <nav className="bg-black z-50 flex justify-center space-x-6 py-4">
      <button onClick={onScrollTo.main}>Home</button>
      <button onClick={onScrollTo.skills}>Skills</button>
      <button onClick={onScrollTo.career}>Career</button>
      <button onClick={onScrollTo.projects}>Projects</button>
      <button onClick={onScrollTo.about}>About</button>
      <button onClick={onScrollTo.feedbacks}>Feedbacks</button>
    </nav>
  );
}

export default Navbar;
