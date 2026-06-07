import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Usman Ajmal — Principal UI Engineer at Broadcom, based in Santa Clara, California.",
};

export default function About() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">About</h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          Hi, I'm <strong>Usman Ajmal</strong> — a Principal UI Engineer based in Santa Clara, California,
          currently leading cross-functional UI teams at Broadcom.
        </p>

        <p>
          With over 16 years of experience in front-end development and technical leadership, I specialize
          in building user interfaces for advanced cloud-based systems — from Network Traffic Analysis and
          Malware Prevention to Host Capacity monitoring. I care deeply about performance, scalability, and
          creating experiences that make complex security infrastructure understandable and actionable.
        </p>

        <p>
          I've worked across the stack but have always been drawn back to the front-end: the part users
          actually see and touch. At Broadcom, I've also integrated AI and machine learning tools into
          security-focused UIs to enhance threat detection and analytical capabilities.
        </p>

        <p>
          I write here occasionally — mostly technical notes and things I want to remember —
          without any particular schedule.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-4">Skills &amp; tools</h2>
        <ul className="list-none p-0 grid grid-cols-2 gap-2 text-sm">
          {[
            "JavaScript / TypeScript",
            "React / Next.js / Angular",
            "HTML & CSS",
            "Node.js",
            "Git & CI/CD",
            "Linux / Bash",
            "REST & GraphQL APIs",
            "Test Automation",
            "Performance optimization",
            "Technical Leadership",
          ].map((skill) => (
            <li key={skill} className="flex items-center gap-2 text-gray-600">
              <span className="text-blue-500">→</span> {skill}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-4">Get in touch</h2>
        <p>
          The best way to reach me is{" "}
          <a
            href="https://linkedin.com/in/usmanajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          . My resume is currently being updated —{" "}
          <span className="text-gray-400 cursor-not-allowed">
            to be shared after being updated
          </span>
          .
        </p>
      </div>
    </div>
  );
}
