export default function Projects() {
    const projects = [
        {
            name: "삼성증권 소비자보호시스템 구축",
            period: "2020.10 ~ 2020.12",
            role: "JSP 기반 UI 퍼블리싱",
            description: "JAVA JSP 기반 시스템에서 퍼블리싱을 100% 전담하며, 주요 화면 UI를 접근성 기준에 맞춰 구현했습니다.",
            tools: [
                "/images/icon_html.svg", "/images/icon_css.svg", "/images/img_Sass.webp", "/images/icon_jquery.svg", '/images/img_Javascript.webp'
            ],
            icon: "/images/blue.png",
            responsibilities: ["JSP 기반 시스템 내 퍼블리싱 전면 담당", "디자이너 시안 기반 주요 화면 UI 마크업", "웹 접근성 및 웹 표준을 고려한 구조 설계", "SCSS 기반 반응형 레이아웃 및 스타일 구현", "프로젝트 초기 셋업 및 퍼블리싱 가이드 일부 정립"]
        }, {
            name: "한국수력원자력 관리자 페이지",
            period: "2021.01 ~ 2021.02",
            role: "JSP 기반 UI 퍼블리싱",
            description: "JSP 기반 프로젝트에서 퍼블리싱을 100% 전담하며, 정적 UI 구현과 접근성 준수에 집중했습니다.",
            tools: [
                "/images/icon_html.svg", "/images/icon_css.svg", "/images/img_Sass.webp", "/images/icon_jquery.svg", '/images/img_Javascript.webp'
            ],
            icon: "/images/blue.png",
            responsibilities: ["디자인 시안 기반 정적 마크업 및 퍼블리싱 100% 수행", "JSP 기반 관리자 화면에 맞춘 퍼블리싱 구조 설계", "웹 접근성을 고려한 시멘틱 마크업 적용", "SCSS 기반의 반응형 스타일링 구현", "정적 콘텐츠 중심의 UI 구성 및 유지보수 대응"]
        }, {
            name: "금융결제원 P2P 시스템 구축",
            period: "2021.02",
            role: "React 기반 UI 퍼블리싱",
            description: "React 기반 프로젝트로 UI 퍼블리싱을 단독으로 수행하며, 접근성을 고려한 마크업을 구현했습니다.",
            tools: [
                '/images/icon_react.png', '/images/icon_html.svg', '/images/icon_css.svg', '/images/img_Sass.webp', '/images/img_github.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: ["React 기반 프로젝트 내 퍼블리싱 100% 수행", "웹 접근성을 고려한 시멘틱 마크업 적용", "디자이너 시안 기반 UI 정적 화면 구현", "SCSS 및 유틸리티 클래스 기반 스타일링", "공통 UI 컴포넌트 마크업 구조 설계"]
        }, {
            name: "금융결제원 마이데이터 시스템 구축",
            period: "2021.04 ~ 2021.05",
            role: "React 기반 UI 퍼블리싱",
            description: "React 기반 프로젝트에서 UI 퍼블리싱을 100% 담당하며, 웹 접근성을 고려한 마크업으로 구현했습니다.",
            tools: [
                '/images/icon_react.png', '/images/icon_html.svg', '/images/icon_css.svg', '/images/img_Sass.webp', '/images/img_github.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: [
                "React 기반 프로젝트 내 퍼블리싱 100% 담당",
                "디자이너 시안 기반 UI 정적 마크업 구현",
                "웹 접근성 기준(WA) 준수한 HTML 구조 설계",
                "컴포넌트 재사용성을 고려한 마크업 구조 설계",
                "SCSS 및 유틸리티 클래스 활용 스타일링 적용",
                "외부 UI 라이브러리 스타일 일부 커스터마이징"
            ]
        }, {
            name: "삼성전자 모바일 SCI 구축",
            period: "2021.05 ~ 2021.07",
            role: "JSP 기반 UI 퍼블리싱",
            description: "Java JSP 기반 시스템에서 주요 화면 UI 퍼블리싱을 전담한 프로젝트입니다.",
            tools: [
                "/images/icon_html.svg", "/images/icon_css.svg", "/images/img_Sass.webp", "/images/icon_jquery.svg", '/images/img_Javascript.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: ["JSP 기반 프로젝트의 주요 화면 UI 퍼블리싱 100% 수행", "디자이너 시안 기반의 정적 마크업 및 스타일 구현", "SCSS 기반 반응형 스타일링 및 구조 설계", "외부 UI 컴포넌트의 커스터마이징 일부 대응", "일관된 퍼블리싱 방식 적용으로 유지보수성 확보"]
        }, {
            name: "삼성증권 IB Front 시스템 구축",
            period: "2021.08 ~ 2021.12",
            role: "JSP 기반 UI 퍼블리싱",
            description: "JSP 기반 프로젝트로 Swiper 등 라이브러리를 활용한 UI 퍼블리싱을 전담했습니다.",
            tools: [
                '/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Sass.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: ["JSP 기반 Java 프로젝트 내 UI 퍼블리싱 100% 수행", "디자이너와 협업하여 시안 기반 화면 구성", "Swiper 등 외부 UI 라이브러리 커스터마이징 적용", "SCSS 기반 스타일 구성 및 반응형 퍼블리싱 구현", "기존 구조에 맞춘 유지보수 및 마크업 리팩토링"]
        }, {
            name: "화동양행 라이브옥션 고도화 구축",
            period: "2021.08 ~ 2021.12",
            role: "JSP 기반 UI 퍼블리싱 및 공통 UI 설계",
            description: "Java + JSP 기반 프로젝트로, 공통 UI 구조를 설계하고 2인 협업 퍼블리싱을 주도한 프로젝트입니다.",
            tools: [
                '/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Sass.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: [
                "Java + JSP 기반 프로젝트 내 UI 퍼블리싱 주요 구조 설계", "공통 컴포넌트 및 UI 구조 설계 후 팀원과 퍼블리싱 분담", "SCSS 기반 반응형 레이아웃 및 스타일링 구현", "디자이너와 협업하여 시안 기반 정적 마크업 수행", "퍼블리싱 가이드 제작 및 협업 효율성 향상 기여"
            ],
            url: "https://www.hwadongauction.com/"
        }, {
            name: "삼성전자 Research 운영",
            description: "운영 및 UI 퍼블리싱을 담당 프로젝트",
            period: "2021.12 ~ 2022.12",
            role: "운영 및 UI 퍼블리싱",
            tools: [
                '/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Sass.webp'
            ],
            icon: '/images/blue.png',
            url: "https://research.samsung.com",
            responsibilities: ["research.samsung.com 홍보 사이트 운영 퍼블리싱 담당", "기존 서비스 기능 수정 및 신규 콘텐츠 반영 퍼블리싱", "디자이너와 협업하여 시안 기반 화면 수정 및 유지보수", "css 기반 스타일링 및 크로스브라우징 대응"]
        }, {
            name: "삼성전자 MOSAIC Survey 고도화",
            description: "JAVA JSP 기반 시스템에서 퍼블리싱을 100% 전담하며, 주요 화면 UI를 접근성 기준에 맞춰 구현했습니다.",
            period: "2022.07 ~ 2023.01",
            role: "JSP 기반 UI 퍼블리싱",
            tools: [
                '/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Sass.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: ["Java + JSP 기반 프로젝트 내 UI 퍼블리싱 100% 담당", "SCSS 기반 반응형 스타일링 및 시안 일치 퍼블리싱 구현", "디자이너와 분업하여 시안 기반 마크업 정밀 구현", "Toast UI 등 외부 라이브러리의 디자인 커스터마이징 수행", "다국어 대응 및 접근성 요소 일부 대응"]
        }, {
            name: "CJ APOLO 고도화 기여도 100%",
            description: "JAVA JSP 기반 시스템에서 퍼블리싱을 100% 전담하며, 주요 화면 UI를 접근성 기준에 맞춰 구현했습니다.",
            period: "2023.02 ~ 2023.06",
            role: "JSP 기반 UI 퍼블리싱",
            tools: [
                "/images/icon_html.svg", "/images/icon_css.svg", "/images/icon_jquery.svg", "/images/img_Sass.webp"
            ],
            icon: '/images/blue.png',
            responsibilities: ["JSP 기반 Java 프로젝트 내 주요 화면 UI 퍼블리싱 100% 담당", "SCSS 활용 커스텀 스타일링 및 반응형 대응", "디자인 시안 기반의 정적 마크업 구현", "HTML/CSS/JS 기반의 컴포넌트 레벨 퍼블리싱", "개발자와 협업하여 백엔드 연동을 고려한 퍼블리싱 구조 설계"]
        }, {
            name: "금융결제원 yeskey 금융인증서비스 구축",
            description: "React 기반 금융인증서비스 구축 프로젝트로, UI 퍼블리싱을 100% 전담했습니다.",
            period: "2023.07 ~ 2023.12",
            role: "React 기반 퍼블리싱 및 UI 컴포넌트 제작",
            tools: ["/images/icon_html.svg", "/images/icon_css.svg", "/images/icon_react.png", "/images/img_figma.webp", '/images/img_github.webp',],
            icon: '/images/blue.png',
            responsibilities: ["React 기반 UI 컴포넌트 개발 및 퍼블리싱 100% 담당", "SCSS 기반 스타일 설계 및 반응형 UI 퍼블리싱 구현", "컴포넌트 단위의 재사용 가능한 UI 구조 설계", "Git 브랜치 전략(feature/...) 기반 작업 분기 및 통합", "디자이너와 협업하여 디자인 시안 기반 퍼블리싱 최적화"]
        }, {
            name: "하나증권 소비자보호시스템 전면개편",
            description: "하나증권의 소비자보호시스템을 전면 개편하는 프로젝트로, JSP 기반 퍼블리싱을 100% 전담했습니다.",
            period: "2024.03 ~ 2024.09",
            role: "JSP 기반 퍼블리싱 100% + 게시판 CRUD 개발 참여",
            tools: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',
            ],
            icon: '/images/blue.png',
            responsibilities: ["JSP + Java 백엔드 환경 기반 퍼블리싱 100% 담당", "게시판 및 상세 페이지 CRUD 기능 개발 참여 (Java 기반)", "BEM 방식의 퍼블리싱 방법론으로 구조적 설계 적용", "라이브러리 커스터마이징"]
        }, {
            name: "삼성이노베이션뮤지엄 리뉴얼",
            description: "삼성이노베이션뮤지엄의 리뉴얼 프로젝트로, UI 퍼블리싱을 100% 전담하여 진행했습니다.",
            period: "2024.10 ~ 2024.12",
            role: "UI 퍼블리싱 기여도 100%",
            tools: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',
            ],
            icon: '/images/blue.png',
            url: "https://www.samsunginnovationmuseum.com/", // 실제 URL 삽입
            responsibilities: ["JSP 기반 페이지 전체 UI 퍼블리싱 100% 담당", "디자인 시안 기반의 정적 페이지 및 템플릿 마크업 구현", "BEM 방식의 CSS 네이밍 전략 적용으로 유지보수성 향상", "Swiper, TOAST UI 라이브러리 커스터마이징 및 재정의", "반응형 웹 대응 (PC / 태블릿 / 모바일)"]
        }, {
            name: "필라넷 시스템 구축",
            description: "필라넷의 내부 시스템 UI 개발 및 퍼블리싱 담당",
            role: "React 기반 UI 퍼블리싱 및 컴포넌트 설계",
            responsibilities: [
                "React 기반 UI 화면 퍼블리싱 및 구조 설계", "공통 컴포넌트 제작 및 props 단위 유연성 확보", "Chart 라이브러리 초기 세팅 및 데이터 연동 구조 구현", "디자인 시안 기반 퍼블리싱 및 반응형 대응"
            ],
            tools: ["/images/icon_html.svg", "/images/icon_css.svg", "/images/icon_react.png", "/images/img_figma.webp", '/images/img_github.webp',]
        }, {
            name: "현대트렌시스 R&D 통합관리",
            period: "2025.04 ~ 진행중",
            role: "UI 퍼블리싱 기여도 100%",
            description: "현대트렌시스의 R&D 통합관리 시스템 구축 프로젝트로, UI 퍼블리싱을 전담하여 진행 중입니다.",
            tools: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',
                '/images/img_github.webp',
                '/images/img_figma.webp'
            ],
            icon: '/images/blue.png',
            responsibilities: ["디자이너가 제공한 시안을 바탕으로 핵심 화면 UI 퍼블리싱 전담", "agGrid, eChart, SynapEditor, RaonKUpload 등 외부 컴포넌트 UI 커스터마이징", 'HTML/CSS/JS 기반으로 레이아웃 구성 및 반응형 UI 구현', 'GitHub 기반 협업 및 Figma 기반 디자인 시안 참고하여 개발 프로세스 유지']
        }
    ];

    return (
        <section className="py-20 px-4 bg-background text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                프로젝트 상세
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-solid border-white/20  p-6 flex flex-col gap-4 rounded-xl">
                        {/* 프로젝트 제목 + 설명 */}
                        <div>
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                        </div>

                        {/* 기여도/역할 */}
                        <div>
                            <h4 className="text-sm font-medium text-sky-500 mb-1">담당 역할</h4>
                            <p className="text-sm text-gray-300">{project.role}</p>
                        </div>

                        {/* 작업 내용 리스트 */}
                        <div>
                            <h4 className="text-sm font-medium text-sky-500 mb-1">주요 작업</h4>
                            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                {project
                                    .responsibilities
                                    .map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                            </ul>
                        </div>

                        {/* 사용 툴 아이콘 */}
                        <div className="flex flex-wrap gap-2 items-center">
                            {project
                                .tools
                                .map((tool, i) => (<img key={i} src={tool} alt={`tool-${i}`} className="w-6 h-6"/>))}
                        </div>

                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:underline">
                                사이트 바로가기
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
