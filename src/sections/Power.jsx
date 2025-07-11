import {motion, AnimatePresence} from "framer-motion";

export default function Power() {
    return (
        <div className="py-16 px-4 text-white">
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
                <div className="text-center mb-12">
                    <h3 className="text-sky-500 font-semibold mb-2">핵심 역량</h3>
                    <h2 className="text-2xl font-medium">정교하게 퍼블리싱하고 유연하게 소통합니다.</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
                    {/* 첫 번째 카드 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                        <h4 className="text-lg font-bold mb-2">정교하고 빠른 퍼블리싱</h4>
                        <p className="text-gray-400 leading-relaxed">
                            React, Tailwind를 활용한 퍼블리싱 경험이 풍부하며, 디자인 가이드를 정밀하게 구현합니다. 접근성과 반응형까지 고려한 퍼블리싱이
                            가능합니다.
                        </p>
                    </div>

                    {/* 두 번째 카드 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                        <h4 className="text-lg font-bold mb-2">리액트를 통한 프론트엔드 개발</h4>
                        <p className="text-gray-400 leading-relaxed">
                            React.js를 중심으로 프로젝트에 참여하였으며, Next.js와 Typescript 등 최신 기술도 빠르게 흡수하여 활용해왔습니다.
                        </p>
                    </div>

                    {/* 세 번째 카드 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
                        <h4 className="text-lg font-bold mb-2">커뮤니케이션 및 협업</h4>
                        <p className="text-gray-400 leading-relaxed">
                            디자이너, 백엔드 개발자와의 협업 경험이 풍부하며 Jira, Notion, Slack 등 협업 툴을 능숙히 다룹니다. 팀 내 커뮤니케이션 조율
                            역할도 맡아왔습니다.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
