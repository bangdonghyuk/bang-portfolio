function Navbar({ onScrollTo }) {
  return (
    <nav className="flex items-center gap-4 bg-gray-800 text-gray-300 px-6 py-2 rounded-full w-fit mx-auto sticky top-4 z-50 shadow-lg">

      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
      </div>

      <div className="flex gap-6 ml-4 text-sm font-medium">
        <button onClick={onScrollTo.about}>자기 소개</button>
        <button onClick={onScrollTo.feedbacks}>팀원 리뷰</button>
        <button onClick={onScrollTo.skills}>기술</button>
        <button onClick={onScrollTo.career}>경력</button>
        <button onClick={onScrollTo.projects}>프로젝트</button>
      </div>
    </nav>
  );
}

export default Navbar;
