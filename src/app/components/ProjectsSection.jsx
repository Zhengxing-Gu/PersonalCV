"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Use Next.js, React, Tailwindcss to develop a responsive portfolio website.",
    image: "/images/projects/personal_website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Zhengxing-Gu/PersonalCV",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Twitter Sentiment Analysis",
    description: "Compared different machine learning algorithms for Twitter Sentiment Analysis on a Kaggle dataset. Bi-LSTM with Attention mechanism achieves 97.5% accuracy.",
    image: "/images/projects/sentiment_analysis.png",
    tag: ["All", "ML"],
    gitUrl: "https://colab.research.google.com/drive/1Qb1S8UkVyYOr6TQI0vLl0eJFGs-0u7-5",
    previewUrl: "https://colab.research.google.com/drive/1Qb1S8UkVyYOr6TQI0vLl0eJFGs-0u7-5",
  },
  {
    id: 3,
    title: "Penguins vs Turtles classification",
    description: "Built different models to solve an animal detecting and classification problem on a Kaggle dataset.",
    image: "/images/projects/penguins_vs_turtles.png",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid gap-10 sm:grid-cols-1 sm:gap-10 md:grid-cols-3 md:gap-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;