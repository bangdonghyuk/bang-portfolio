export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "➡️" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "🅣" },
    ],
    Markup: [
      { name: "HTML5", icon: "🔤" },
      { name: "CSS3", icon: "🎨" },
      { name: "SCSS", icon: "💅" },
      { name: "Tailwind CSS", icon: "🌬" },
      { name: "JSP", icon: "📄" },
    ],
    Tooling: [
      { name: "Git", icon: "🔧" },
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "🖼" },
      { name: "Illustrator", icon: "🎨" },
      { name: "Zeplin", icon: "📐" },
      { name: "XD", icon: "🖌" },
    ],
    "Backend & Data": [
      { name: "REST API", icon: "🌐" },
      { name: "JSON", icon: "🔣" },
      { name: "XML", icon: "📦" },
    ],
  };

  return (
    <section className="py-16 px-4 bg-[#0d1126] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">🛠 기술 스택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, techList]) => (
            <div
              key={category}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
              <ul className="space-y-2">
                {techList.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
