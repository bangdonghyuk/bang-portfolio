export default function About() {
  return (
    <section className="py-20 px-4 bg-[#0d1126] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-400">자기소개</h2>

        <p className="text-lg leading-relaxed text-gray-300">
          안녕하세요. <span className="text-lime-400 font-semibold">방동혁</span>입니다. <br />
          퍼블리셔로 시작해 다양한 프로젝트를 경험하며 <br />
          현재는 프론트엔드 개발자로 성장해나가고 있습니다.
        </p>

        <div className="mt-10 text-left space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            React 기반 UI 컴포넌트 설계 및 퍼블리싱, API 연동 개발까지 경험하며<br />
            디자인과 사용자 경험을 함께 고려하는 프론트엔드 개발을 지향합니다.
          </p>
          <p>
            실무에서 다양한 기관/기업 프로젝트에 참여하며<br />
            협업 능력과 UI/UX 설계 이해력을 함께 키워왔습니다.
          </p>
          <p>
            앞으로는 더 나은 사용자 경험을 제공하고, 함께 성장하는 팀에 기여할 수 있는<br />
            개발자가 되고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
