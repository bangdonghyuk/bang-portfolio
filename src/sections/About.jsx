export default function About() {
   const interviews = [
    {
      question: '프론트엔드로 전향한 이유는?',
      answer:
        '웹디자인으로 커리어를 시작해, 6년간 웹 퍼블리셔로 활동하며 사용자 중심의 마크업과 협업을 익혔습니다. 디자인 의도를 살리면서도 기술적인 제약을 고려한 구현에 매력을 느꼈고, 점차 프론트엔드 개발 전반으로 성장하게 되었습니다.',
    },
    {
      question: '퍼블리셔 출신의 강점은 무엇인가요?',
      answer:
        '디자인과 개발 사이를 조율할 수 있는 감각입니다. 퍼블리셔 출신으로서 UI/UX에 대한 감각과 기술적 이해를 함께 갖고 있어, 디자이너와 개발자 사이의 소통을 돕고 실행 가능한 방향으로 전환하는 데 강점을 가집니다.',
    },
    {
      question: '어떤 프로젝트 경험이 있었나요?',
      answer:
        '토라웨어에서 5년간 근무하며 다양한 SI 프로젝트를 경험했습니다. 반응형 웹, SCSS, 웹 접근성, 공통 컴포넌트 관리, React 기반 화면 구성 등 실무 전반을 담당했으며, 풀캘린더, 그리드 컴포넌트 등 외부 UI 커스터마이징도 다수 경험했습니다.',
    },
    {
      question: '이직을 결심한 이유는?',
      answer:
        '현재 환경은 점차 백엔드 중심 구조로 변하고 있어 프론트엔드 역할의 비중이 줄어들고 있습니다. 저는 더 많은 사용자 경험 개선과 기술적 시도를 할 수 있는 환경에서 프론트엔드 개발자로서의 역량을 넓히고 싶어 이직을 결심했습니다.',
    },
    {
      question: '앞으로 어떤 개발자가 되고 싶나요?',
      answer:
        '전문적인 프론트엔드 개발자로서 UI 품질 향상과 사용자 중심의 화면 개발에 집중하고 싶습니다. 백엔드 API와의 명확한 분리를 통해, 더 효율적인 협업과 높은 완성도를 추구하는 개발자가 되고자 합니다.',
    },
  ];
  return (
    <section className="py-20 px-4 bg-background text-white">
      <div className="text-center mb-10">
        <h3 className="text-sky-500 font-semibold mb-2">자기소개</h3><h2 className="text-2xl md:text-3xl font-bold">방동혁을 소개합니다.</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {interviews.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl shadow-md border border-white/10"
          >
            <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">
              Q. {item.question}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-foreground/80">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
