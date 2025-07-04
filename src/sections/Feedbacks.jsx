import { useEffect, useState } from 'react';

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks`)
    .then((res) => {
      if (!res.ok) {
        // 서버가 오류 메시지를 보낸 경우 (text 응답)
        return res.text().then((text) => {
          throw new Error(`서버 오류: ${text}`);
        });
      }
      return res.json();
    })
    .then((data) => setFeedbacks(data))
    .catch((err) => console.error('Error fetching feedbacks:', err.message));
}, []);


  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
            <h3 className="text-sky-500 font-semibold mb-2">팀원 리뷰</h3>
            <h2 className="text-2xl md:text-3xl font-bold">함께 일한 사람들의 평가</h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
              <p className="text-sm text-gray-300 leading-relaxed mb-4">"{f.message}"</p>
              <div className="text-right text-sm text-gray-500">— {f.from}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
