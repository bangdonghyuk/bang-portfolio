export default function Career() {
  const careers = [
    {
      company: "토라웨어",
      title: "웹 퍼블리셔 → 프론트엔드 협업 개발자",
      period: "2020.10 ~ 현재",
      description: [
        "디자인 시안 기반 반응형 웹/모바일 UI 퍼블리싱 및 개발 업무",
        "기술지원팀에서 React 기반 컴포넌트 개발, API 연동, CRUD 구현 등 수행",
        "퍼블리셔 → 개발자로 포지션 전환되며 실무 중심 프론트엔드 역할 수행",
        "Git, 협업툴 등 사용한 실무형 협업 경험 보유",
      ],
      skills: ["React", "Git", "웹표준", "웹접근성"],
    },
    {
      company: "케이엘이엔에스",
      title: "소프트웨어 프리랜서",
      period: "2020.07 ~ 2020.10",
      description: ["웹퍼블리싱"],
      skills: ["HTML", "CSS"],
    },
    {
      company: "메드소프트",
      title: "개발팀 프리랜서",
      period: "2020.04 ~ 2020.06",
      description: ["반응형 퍼블리싱 작업"],
      skills: ["HTML", "반응형", "CSS"],
    },
    {
      company: "유컴퍼니",
      title: "디자인 대리",
      period: "2019.09 ~ 2020.03",
      description: ["쇼핑몰 제작 및 관리", "화장품 편집 디자인"],
      skills: ["사이트관리", "디자인"],
    },
    {
      company: "㈜연우건재",
      title: "웹디자인,퍼블리싱 대리",
      period: "2018.04 ~ 2019.07",
      description: ["홈페이지 구축 및 세팅", "상세페이지 제작"],
      skills: ["웹퍼블리싱", "웹접근성"],
    },
    {
      company: "런커",
      title: "웹디자인,퍼블리싱 사원",
      period: "2017.11 ~ 2018.02",
      description: ["상세페이지 제작", "템플릿 제작"],
      skills: ["웹퍼블리싱","상세페이지 디자인"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#0d1126] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-400">경력 요약</h2>
        <div className="space-y-6">
          {careers.map((job, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {job.company} <span className="text-gray-300 text-sm font-normal">| {job.title}</span>
                </h3>
                <span className="text-sm text-gray-400">{job.period}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {job.description.map((d, index) => (
                  <li key={index}>{d}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
