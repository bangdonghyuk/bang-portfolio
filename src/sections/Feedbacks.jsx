import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";

export default function Feedbacks() {
    const [feedbacks,
        setFeedbacks] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks`).then((res) => {
            if (!res.ok) {
                return res
                    .text()
                    .then((text) => {
                        throw new Error(`서버 오류: ${text}`);
                    });
            }
            return res.json();
        }).then((data) => setFeedbacks(data)).catch((err) => console.error('Error fetching feedbacks:', err.message));
    }, []);

    const maskName = (name) => {
        if (!name) 
            return '';
        if (name.length === 2) 
            return name[0] + '*';
        if (name.length >= 3) 
            return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
        return name;
    };

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
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-sky-500 font-semibold mb-2">팀원 리뷰</h3>
                        <h2 className="text-2xl font-medium">함께 일한 사람들의 평가</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {feedbacks.map((f, i) => {
                            const isAnonymous = f.from === f.to;
                            const displayName = isAnonymous
                                ? maskName(f.from)
                                : f.from;

                            return (
                                <div
                                    key={i}
                                    className="bg-gray-800 rounded-xl flex justify-between flex-col gap-5 p-5">
                                    <p className="text-sm md:text-base leading-relaxed text-white/70">"{f.message}"</p>

                                    <div className="text-right text-sm text-gray-500">
                                        {displayName}
                                        {f.position && ` · ${f.position}`}
                                        {f.role && ` (${f.role})`}
                                        {f.company && ` @ ${f.company}`}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
