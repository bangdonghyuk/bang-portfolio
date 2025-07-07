import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";


export default function Career() {
    const [openIndex,
        setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index
            ? null
            : index);
    };

    const experiences = [
        {
            company: "토라웨어",
            role: "웹 퍼블리싱 → 프론트엔드 개발자",
            period: "2020.10 ~ 현재",
            description: [
                "디자인 시안을 웹 표준에 맞게 구현하고 반응형 웹/모바일 UI 퍼블리싱 업무 담당", "React 기반 프로젝트에서 컴포넌트 단위 퍼블리싱 및 일부 개발 업무 수행 (CRUD, API 연동 등)", "디자인·개발·기획 등 다양한 부서와 협업하며 UI/UX 흐름에 대한 이해와 실무 구현 경험 축적", "Git 등 협업 도구 기반의 이슈/버전 관리 경험"
            ],
            tags: [
                "React", "Git", "협업툴", "웹표준"
            ],
            skillsIconList: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',
                '/images/img_Sass.webp',
                '/images/img_tailwind-css.webp',
                '/images/icon_react.png',
                '/images/img_Next.webp',
                '/images/img_zustand.webp',
                '/images/img_github.webp',
                '/images/icon_svn.png',
                '/images/img_XD.webp',
                '/images/img_Photoshop.webp',
                '/images/img_premiere-pro.webp',
                '/images/img_Illustrator.webp',
                '/images/img_figma.webp'
            ]
        }, {
            company: "케이엘이엔에스",
            role: "퍼블리셔",
            period: "2020.07 ~ 2020.10",
            description: ["웹퍼블리싱"],
            tags: [
                "HTML", "CSS"
            ],
            skillsIconList: ['/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Javascript.webp', '/images/img_github.webp']
        }, {
            company: "메드소프트",
            role: "퍼블리셔",
            period: "2020.04 ~ 2020.06",
            description: ["반응형 퍼블리싱 작업"],
            tags: [
                "HTML", "반응형", "CSS"
            ],
            skillsIconList: ['/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Javascript.webp', '/images/img_github.webp']
        }, {
            company: "유컴퍼니",
            role: "웹디자인, 퍼블리싱, 화장품 목업디자인",
            period: "2019.09 ~ 2020.03",
            description: [
                "쇼핑몰 제작 및 관리", "화장품 편집 디자인"
            ],
            tags: [
                "사이트관리", "디자인"
            ],
            skillsIconList: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',

                '/images/img_Photoshop.webp',
                '/images/img_premiere-pro.webp',
                '/images/img_Illustrator.webp',
                '/images/img_figma.webp'
            ]
        }, {
            company: "연우건재",
            role: "웹디자인, 퍼블리싱 대리",
            period: "2018.04 ~ 2019.07",
            description: [
                "홈페이지 구축 및 세팅", "상세페이지 제작"
            ],
            tags: [
                "웹퍼블리싱", "웹표준"
            ],
            skillsIconList: [
                '/images/icon_html.svg',
                '/images/icon_css.svg',
                '/images/icon_jquery.svg',
                '/images/img_Javascript.webp',

                '/images/img_Photoshop.webp',
                '/images/img_Illustrator.webp'
            ]
        }, {
            company: "런커",
            role: "웹디자인, 퍼블리싱 사원",
            period: "2017.11 ~ 2018.02",
            description: [
                "상세페이지 제작", "템플릿 제작"
            ],
            tags: [
                "퍼블리싱", "상세페이지 디자인"
            ],
            skillsIconList: ['/images/icon_html.svg', '/images/icon_css.svg', '/images/icon_jquery.svg', '/images/img_Javascript.webp', '/images/img_Photoshop.webp']
        }
    ];

    return (
        <div className="text-white py-16 px-4">
            <motion.div
                initial={{
                opacity: 0,
                y: 40
            }}
                whileInView={{
                opacity: 1,
                y: 0
            }}
                transition={{
                duration: 0.5
            }}
                viewport={{
                once: true,
                amount: 0.2
            }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-sky-500 font-semibold mb-2">경력 사항</h3>
                        <h2 className="text-2xl font-medium">다양한 업무와 프로젝트를 통해<br/>경험과 노하우를 쌓고 있습니다.</h2>
                    </div>

                    <div className="flex gap-4 items-center max-w-5xl mx-auto mt-12 mb-8">
                        <div className="w-full h-[1px] bg-gradient-to-l from-white/20"></div>
                        <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">업무 경험</p>
                        <div className="w-full h-[1px] bg-gradient-to-r from-white/20"></div>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-10">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid sm:grid-cols-3 sm:gap-x-10 sm:items-start">
                                <div className="flex gap-2.5 sm:justify-end items-center mb-3">
                                    <div className="text-sm text-gray-400">{exp.period}</div>
                                </div>

                                <div className="sm:pr-6 sm:pl-0 sm:col-span-2 flex flex-col gap-3">
                                    <div className="text-base md:text-lg font-semibold">{exp.company}</div>

                                    <div
                                        className="text-xs md:text-sm font-normal text-gray-400 whitespace-pre-wrap">{exp.role}</div>

                                    <div>
                                        <button
                                            onClick={() => toggleDescription(index)}
                                            className="text-sky-400 text-sm flex items-center gap-1">
                                            {openIndex === index
                                                ? "주요 업무 내용 가리기"
                                                : "주요 업무 내용 보기"}
                                            {openIndex === index
                                                ? <ChevronUp size={14}/>
                                                : <ChevronDown size={14}/>}
                                        </button>

                                        {openIndex === index && (
                                            <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-1">
                                                {exp
                                                    .description
                                                    .map((desc, i) => (
                                                        <li key={i}>{desc}</li>
                                                    ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {exp
                                            .skillsIconList
                                            .map((src, idx) => (<img key={idx} src={src} alt={`tech-${idx}`} className="w-5 h-5"/>))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
