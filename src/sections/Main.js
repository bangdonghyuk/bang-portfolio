
import { motion } from 'framer-motion';


export default function Main() {
   const chars = [
      { char: 'B', color: 'text-blue-500' },
      { char: 'D', color: 'text-green-500' },
      { char: 'H', color: 'text-yellow-300' },
    ];

  return (
    <div className="text-white flex flex-col justify-center items-center px-4 pt-28 pb-28  text-center">
      <div className='flex justify-center text-4xl font-bold'>
        {chars.map(({ char, color }, index) => (
        <motion.span
          key={char}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`${color}`}
        >
          {char}
          </motion.span>
        ))}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold leading-snug">
        안녕하세요, <br />
        프론트엔드 개발자 <br />
        <span className="text-lime-400">방동혁</span>입니다.
      </h1>
      <p className="text-sm md:text-base mt-6 text-gray-400 leading-relaxed">
        React를 중심으로 웹 프론트엔드를 개발합니다. <br />
        함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.
      </p>
    </div>
  );
}
