export default function Projects() {
  const projects = [
    {
      name: "삼성증권 소비자보호시스템 구축",
      period: "2020.10 ~ 2020.12",
      role: "UI 퍼블리싱",
    },
    {
      name: "한국수력원자력 관리자 페이지",
      period: "2021.01 ~ 2021.02",
      role: "UI 퍼블리싱",
    },
    {
      name: "금융결제원 P2P 시스템 구축",
      period: "2021.02",
      role: "UI 퍼블리싱",
    },
    {
      name: "금융결제원 마이데이터 시스템 구축",
      period: "2021.04 ~ 2021.05",
      role: "UI 퍼블리싱",
    },
    {
      name: "삼성전자 모바일 SCI 구축",
      period: "2021.05 ~ 2021.07",
      role: "UI 퍼블리싱",
    },
    {
      name: "마케팅 플랫폼 메뉴 디자인 & 목업 제작",
      period: "2021.07 ~ 2021.09",
      role: "UI 퍼블리싱",
    },
    {
      name: "삼성증권 IB Front 시스템 구축",
      period: "2021.08 ~ 2021.12",
      role: "UI 퍼블리싱",
    },
    {
      name: "화동양행 라이브옥션 고도화 구축",
      period: "2021.08 ~ 2021.12",
      role: "UI 퍼블리싱",
    },
    {
      name: "삼성전자 홍보 사이트 및 Codeground 운영",
      period: "2021.12 ~ 2022.12",
      role: "UI 퍼블리싱",
    },
    {
      name: "삼성전자 MOSAIC Survey 고도화",
      period: "2022.07 ~ 2023.01",
      role: "UI 퍼블리싱",
    },
    {
      name: "CJ APOLO 고도화",
      period: "2023.02 ~ 2023.06",
      role: "UI 퍼블리싱",
    },
    {
      name: "금융결제원 yeskey 금융인증서비스 구축",
      period: "2023.07 ~ 2023.12",
      role: "React 기반 UI 컴포넌트 제작",
    },
    {
      name: "하나증권 소비자보호시스템 전면개편",
      period: "2024.03 ~ 2024.09",
      role: "JAVA 기반 CRUD 개발 및 퍼블리싱",
    },
    {
      name: "삼성이노베이션뮤지엄 리뉴얼",
      period: "2024.10 ~ 2024.12",
      role: "UI 퍼블리싱",
    },
    {
      name: "현대트렌시스 R&D 통합관리",
      period: "2025.04 ~ 진행중",
      role: "UI 퍼블리싱",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#0d1126] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-400">프로젝트 경험</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-emerald-300">{p.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{p.period}</p>
              <p className="text-sm mt-2">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
