import { useEffect, useState } from 'react';

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
    fetch('/api/feedbacks')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error('Error fetching feedbacks:', err));
  }, []);

  return (
    <section className="py-16 px-4 bg-[#0d1126] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">💬 함께 일한 사람들의 평가</h2>
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
