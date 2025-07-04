import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FeedbackForm() {
  const [params] = useSearchParams();
  const to = params.get('to'); // ex) ?to=bangdong

  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    position: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to,
          from: form.name,
          company: form.company,
          role: form.role,
          position: form.position,
          message: form.message
        })
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
    return <div className="text-center mt-10 text-green-600">소중한 피드백 감사합니다!</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto min-h-screen flex items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">{to}님의 귀한 피드백에 감사드립니다.</h2>
        <input
          name="name"
          placeholder="이름"
          className="mb-2 p-2 w-full bg-[#374151] border border-gray-600 text-white placeholder-gray-400 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="회사"
          className="mb-2 p-2 w-full bg-[#374151] border border-gray-600 text-white placeholder-gray-400 rounded"
          value={form.company}
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="직군 (ex. 프론트엔드 개발자)"
          className="mb-2 p-2 w-full bg-[#374151] border border-gray-600 text-white placeholder-gray-400 rounded"
          value={form.role}
          onChange={handleChange}
        />
        <input
          name="position"
          placeholder="직책 (ex. 사원, 팀장)"
          className="mb-2 p-2 w-full bg-[#374151] border border-gray-600 text-white placeholder-gray-400 rounded"
          value={form.position}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="피드백을 입력해주세요"
          className="mb-2 p-2 w-full bg-[#374151] border border-gray-600 text-white placeholder-gray-400 rounded"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full">
          제출
        </button>
      </form>
    </div>
  );
}
