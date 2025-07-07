import {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";

export default function Skills() {
    const [activeTab,
        setActiveTab] = useState('');

    const tabs = ['프론트엔드', '라이브러리', '환경 및 배포', '디자인'];

    const skills = [
        {
            src: '/images/icon_html.svg',
            type: '프론트엔드'
        }, {
            src: '/images/icon_css.svg',
            type: '프론트엔드'
        }, {
            src: '/images/icon_jquery.svg',
            type: '프론트엔드'
        }, {
            src: '/images/img_Javascript.webp',
            type: '프론트엔드'
        }, {
            src: '/images/img_Sass.webp',
            type: '프론트엔드'
        }, {
            src: '/images/img_tailwind-css.webp',
            type: '프론트엔드'
        }, {
            src: '/images/icon_react.png',
            type: '라이브러리'
        }, {
            src: '/images/img_Next.webp',
            type: '라이브러리'
        }, {
            src: '/images/img_zustand.webp',
            type: '라이브러리'
        }, {
            src: '/images/img_github.webp',
            type: '환경 및 배포'
        }, {
            src: '/images/icon_svn.png',
            type: '환경 및 배포'
        }, {
            src: '/images/img_XD.webp',
            type: '디자인'
        }, {
            src: '/images/img_Photoshop.webp',
            type: '디자인'
        }, {
            src: '/images/img_premiere-pro.webp',
            type: '디자인'
        }, {
            src: '/images/img_Illustrator.webp',
            type: '디자인'
        }, {
            src: '/images/img_figma.webp',
            type: '디자인'
        }
    ];

    return (

        <div className="text-white py-16">
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
                <div className="text-center mb-10">
                    <h3 className="text-sky-500 font-semibold mb-2">기술 스택 및 도구</h3>
                    <h2 className="text-2xl font-medium">아래의 기술을 사용할 수 있습니다.</h2>
                </div>

                {/* 탭 버튼 */}
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {tabs.map((tab, i) => (
                        <button key={i} onClick={() => setActiveTab(tab === activeTab
                            ? ''
                            : tab)} // 다시 클릭하면 초기화
    className={`px-4 py-1 rounded-full text-sm transition ${activeTab === tab
                            ? 'bg-sky-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 아이콘 */}
                <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto px-4">
                    {skills.map((item, idx) => {
                        const isActive = activeTab === '' || item.type === activeTab;
                        return (<img
                            key={idx}
                            src={item.src}
                            alt={`skill-${idx}`}
                            className={`w-10 h-10 mx-auto transition-opacity duration-300 ${isActive
                            ? 'opacity-100'
                            : 'opacity-30 grayscale'}`}/>);
                    })}
                </div>
            </motion.div>
        </div>
    );
}
