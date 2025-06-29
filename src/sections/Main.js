
import { motion } from 'framer-motion';
import img from "../assets/images/face_img.png"
import img2 from "../assets/images/face_img_black.png"

export default function Main() {
  return (
    <div className="text-white flex flex-col justify-center items-center px-4 pt-28 pb-28  text-center">
      <div class="w-40 h-40 p-6 rounded-full bg-white flex items-center justify-center text-sm font-bold overflow-hidden mb-6">
          <img className='' src={img2} />
      </div>
      <h1 className="text-5xl font-bold leading-snug">
        안녕하세요, <br />
        프론트엔드 개발자 <br />
        <span className="text-sky-500">방동혁</span>입니다.
      </h1>
      <p className="text-sm md:text-base mt-6 text-gray-400 leading-relaxed">
       퍼블리셔로 시작해 다양한 프로젝트를 경험하며<br/>
       프론트엔드 개발자로 성장해나가고 있습니다.
      </p>
    </div>
  );
}
