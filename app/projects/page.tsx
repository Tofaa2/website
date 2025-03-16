import Link from "next/link";
import { Project } from "../lib/definitions";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "entitylib",
      status: "active",
      name: "EntityLib",
      description:
        "An abstraction layer over packet entities made for Minecraft using packetevents.",
      redirect_url: "/projects/entitylib",
      github_url: "Tofaa2/EntityLib",
    },
    {
      id: "rsl",
      status: "active",
      name: "RSL",
      description:
        "A simple interpreted programming language designed for scripting written in Java.",
      redirect_url: "/projects/rsl",
      github_url: "Tofaa2/RSL",
    },
  ];

  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-red-500",
    hibernated: "bg-yellow-500",
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="mb-6 text-gray-700">
        This is where you can find most of my projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Use Link for internal navigation */}
            <Link href={project.redirect_url}>
              <h2 className="text-xl font-semibold cursor-pointer hover:underline">
                {project.name}
              </h2>
            </Link>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex items-center mt-4">
              <span
                className={`inline-block w-2 h-2 mr-2 ${statusColors[project.status]}`}
              ></span>
              <span className="text-sm text-gray-500">{project.status}</span>
            </div>
            {/* GitHub Link */}
            <div className="flex items-center mt-4">
              <a
                href={`https://github.com/${project.github_url}`}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
