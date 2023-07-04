import React from "react";
import CategoryCard from "./CategoryCard";

import {
  Palette,
  MicrophoneStage,
  FileHtml,
  Briefcase,
  SunHorizon,
  Camera,
  MusicNote,
  Database,
  Lightbulb,
  Heartbeat,
  Graph,
  Detective,
} from "@phosphor-icons/react";
const Categories = () => {
  const categories = [
    {
      icon: (
        <Palette
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Design",
    },
    {
      icon: (
        <FileHtml
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Development",
    },
    {
      icon: (
        <MicrophoneStage
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Marketing",
    },
    {
      icon: (
        <Briefcase
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Business",
    },
    {
      icon: (
        <SunHorizon
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Lifestyle",
    },
    {
      icon: (
        <Camera
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Photography",
    },
    {
      icon: (
        <MusicNote
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Music",
    },
    {
      icon: (
        <Database
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Data Science",
    },
    {
      icon: (
        <Lightbulb
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Personal Develope",
    },
    {
      icon: (
        <Heartbeat
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Health & Fitness",
    },
    {
      icon: (
        <Graph
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Finance",
    },
    {
      icon: (
        <Detective
          weight="light"
          className="h-8 w-8 text-gray-500 group-hover:text-black"
        />
      ),
      title: "Teaching",
    },
  ];

  return (
    <section className="bg-[#f0faf7]">
      <div className="m-auto max-w-screen-sm px-4 py-24 md:max-w-screen-xl md:py-32">
        <h1 className="text-4xl font-semibold">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>
        <p className="mb-12 mt-4 text-base font-normal text-[#6D737A] md:text-xl">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {categories.map((item, index) => (
            <CategoryCard key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
