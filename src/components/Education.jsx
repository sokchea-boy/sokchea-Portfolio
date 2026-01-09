
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: " Associate degree of Science in Computer Science",
      school: "Passerelles Numériques Cambodia(PNC)",
      location: "Phnom Penh, Sangkat Tek Thla, Khan Sen Sok",
      period: "2024 - 2026",
      description: "Specialized in web programming",
      achievements: [
        "Farm Management System “ Virtual Company Project “ ",
        "POS-System “ Virtual Company Project “ ",
        "JavaScript project “ Inventory app ”",
        "Software deployment “ Hosting WordPress ”",
        "Algorithm Project “ window management system tool ” ",
        "Web Design Project “ PNC-Website”"
      ],
    },
    {
      degree: "Bacc II certificate",
      school: "Socang Konter2 high school",
      location: "Battambang, Banan district​​",
      period: "2020 - 2023",
      description: "Bacc II Certificate (Science Stream)",
      achievements: [
        "I completed my Bacc II Certificate in the Science stream.",
      ],
    },
  ];

  return (
    <section id="Education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Education</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-gray-700">{edu.school}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>

              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-700">Key Achievements:</h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
