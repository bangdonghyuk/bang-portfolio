import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const menuItems = [
    { label: "자기 소개", onClick: onScrollTo.about },
    { label: "팀원 리뷰", onClick: onScrollTo.feedbacks },
    { label: "기술", onClick: onScrollTo.skills },
    { label: "경력", onClick: onScrollTo.career },
    { label: "프로젝트", onClick: onScrollTo.projects },
  ];

  return (
    <nav className="relative z-50">
      <div className="flex items-center gap-4 bg-gray-800 text-gray-300 px-6 py-2 rounded-full w-fit mx-auto sticky top-4 shadow-lg">
        {/* 좌측 원형 버튼 */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
        </div>

        {/* PC 메뉴 */}
        <div className="hidden md:flex gap-6 ml-4 text-sm font-medium">
          {menuItems.map((item, i) => (
            <button key={i} onClick={item.onClick}>
              {item.label}
            </button>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={handleToggle}
          className="md:hidden ml-auto text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 - absolute로 띄우기 */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-xs bg-gray-800 text-white rounded-xl shadow-lg p-6 flex flex-col gap-4 md:hidden z-50">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="text-left hover:text-sky-400 transition"
              onClick={() => {
                item.onClick();
                handleClose();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
