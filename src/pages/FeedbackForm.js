import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FeedbackForm() {
  const [params] = useSearchParams();
  const to = params.get('to'); // ex) ?to=bangdong

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to,
              from: name,       // 👈 name → from 으로 변경
              message: content  // 👈 content → message 로 변경
            }),
        });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('전송 실패');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('에러가 발생했습니다.');
    }
  };

  if (!to) {
    return <div className="text-center mt-10 text-red-500">잘못된 접근입니다.</div>;
  }

  if (submitted) {
    return <div className="text-center mt-10 text-green-600">피드백 감사합니다!</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{to}님에게 피드백 남기기</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-2 p-2 border w-full"
          placeholder="당신의 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="mb-2 p-2 border w-full"
          placeholder="피드백을 입력해주세요"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
          제출
        </button>
      </form>
    </div>
  );
}
