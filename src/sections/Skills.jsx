export default function Skills() {
  const skillsIconList = [
    '/images/icon_html.svg',
    '/images/icon_css.svg',
    '/images/icon_jquery.svg',
    '/images/img_Sass.webp',
    '/images/img_tailwind-css.webp',

    '/images/img_Javascript.webp',
    '/images/icon_react.png',
    '/images/img_Next.webp',
    '/images/img_zustand.webp',

    '/images/img_github.webp',
    '/images/icon_svn.png',

    '/images/img_XD.webp',
    '/images/img_Photoshop.webp',
    '/images/img_premiere-pro.webp',
    '/images/img_Illustrator.webp',
    '/images/img_figma.webp',
  ];

  return (
    <section className="text-white py-16">
      <div className="text-center mb-10">
        <h3 className="text-sky-500 font-semibold mb-2">기술 스택 및 도구</h3>
        <h2 className="text-2xl md:text-3xl font-bold">아래의 기술을 사용할 수 있습니다.</h2>
      </div>

      {/* 탭 UI (선택 비활성화 상태 예시) */}
      <div className="flex justify-center space-x-2 mb-8">
        {['프론트엔드', '라이브러리', '환경 및 배포', '디자인'].map((tab, i) => (
          <button
            key={i}
            className="bg-white/10 text-gray-300 px-4 py-1 rounded-full text-sm hover:bg-white/20 transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 아이콘 그리드 */}
      <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto px-4">
        {skillsIconList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`tech-${idx}`}
            className="w-10 h-10 mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
