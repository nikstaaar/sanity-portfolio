import Image from "next/image";

import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I'm 
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
        bg-clip-text text-transparent"> Niklas
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-600 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        {projects.map((project) => (
        <div key={project._id} className="border-2 border-gray-500 rounded-lg p-1">
          {project.image && (
          <Image 
          src={project.image} alt={project.name} width={750} height={300}
          className="mt-2 object-cover rounded-lg border border-gray-500"
          />
          )}
          <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
          bg-clip-text text-transparent">
              {project.name}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
