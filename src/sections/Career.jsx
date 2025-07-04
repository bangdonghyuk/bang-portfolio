export default function Career() {
  const experiences = [
    {
      company: "토라웨어",
      role: "웹 퍼블리싱 → 프론트엔드 협업 개발자",
      period: "2020.10 ~ 현재",
      description: [
        "디자인 시안 기반 반응형 웹/모바일 UI 퍼블리싱 및 개발 업무",
        "기술지원에서 React 기반 컴포넌트 개발, 퍼포먼스 최적화, CRUD 구현 등 수행",
        "퍼블리셔 → 개발자로 포지션 전환하며 실무 중심 프론트엔드 역할 수행",
        "Git, 협업툴 등 사용한 효율적 협업 경험 보유"
      ],
      tags: ["React", "Git", "협업툴", "웹표준"]
    },
    {
      company: "케이엘이엔에스",
      role: "소프트웨어 프리랜서",
      period: "2020.07 ~ 2020.10",
      description: ["웹퍼블리싱"],
      tags: ["HTML", "CSS"]
    },
    {
      company: "메드소프트",
      role: "개발팀 프리랜서",
      period: "2020.04 ~ 2020.06",
      description: ["반응형 퍼블리싱 작업"],
      tags: ["HTML", "반응형", "CSS"]
    },
    {
      company: "유컴퍼니",
      role: "디자인 대리",
      period: "2019.09 ~ 2020.03",
      description: ["쇼핑몰 제작 및 관리", "화장품 편집 디자인"],
      tags: ["사이트관리", "디자인"]
    },
    {
      company: "연우건재",
      role: "웹디자인, 퍼블리싱 대리",
      period: "2018.04 ~ 2019.07",
      description: ["홈페이지 구축 및 세팅", "상세페이지 제작"],
      tags: ["웹퍼블리싱", "웹표준"]
    },
    {
      company: "런커",
      role: "웹디자인, 퍼블리싱 사원",
      period: "2017.11 ~ 2018.02",
      description: ["상세페이지 제작", "템플릿 제작"],
      tags: ["퍼블리싱", "상세페이지 디자인"]
    }
  ];


  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sky-500 font-semibold mb-2">경력 사항</h3><h2 className="text-2xl md:text-3xl font-bold">다양한 업무와 프로젝트를 통해<br/> 경험과 노하우를 쌓고 있습니다.</h2>
        </div>

        <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
          <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15"></div>
          <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">업무 경험</p>
          <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15"></div>
        </div>


        <div className="flex flex-col gap-8 md:gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="grid sm:grid-cols-3 sm:gap-x-10 sm:items-start">
                  <div className="flex gap-2.5 sm:justify-end items-center mb-3">
                    <div className="text-sm md:text-base font-normal text-foreground/60">{exp.period}
                    </div>
                  </div>
                  <div className="pl-6 sm:pl-0 sm:col-span-2 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <div className="text-base md:text-lg font-semibold">
                          {exp.company}
                        </div>
                        <div className="text-xs md:text-sm font-normal text-foreground/60 whitespace-pre-wrap">
                          {exp.tags}
                        </div>
                      </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
