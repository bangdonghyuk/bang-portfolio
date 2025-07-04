import { useEffect, useState } from 'react';

export default function AdminFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks/admin/all`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error('불러오기 실패:', err));
  }, []);

  const toggleApproval = async (id, currentStatus) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/feedbacks/${id}/approve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approved: !currentStatus })
      });

      if (res.ok) {
        setFeedbacks((prev) =>
          prev.map((fb) =>
            fb._id === id ? { ...fb, approved: !currentStatus } : fb
          )
        );
      } else {
        alert('승인 변경 실패');
      }
    } catch (error) {
      console.error('승인 토글 에러:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">피드백 관리</h1>
      {feedbacks.map((fb) => (
        <div key={fb._id} className="border rounded-lg p-4 mb-4 shadow-sm">
          <p><strong>To:</strong> {fb.to}</p>
          <p><strong>From:</strong> {fb.from}</p>
          {fb.company && <p><strong>회사:</strong> {fb.company}</p>}
          {fb.role && <p><strong>직군:</strong> {fb.role}</p>}
          {fb.position && <p><strong>직책:</strong> {fb.position}</p>}
          <p><strong>Message:</strong> {fb.message}</p>
          <p><strong>승인 상태:</strong> {fb.approved ? '✅ 승인됨' : '❌ 미승인'}</p>
          <button
            className="mt-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
            onClick={() => toggleApproval(fb._id, fb.approved)}
          >
            {fb.approved ? '승인 취소' : '승인하기'}
          </button>
        </div>
      ))}
    </div>
  );
}
