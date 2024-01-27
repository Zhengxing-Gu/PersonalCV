"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>C/C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p> University of New South Wales </p>
          <p className="university-degree"> Master of Information Technology </p>
          <p className="university-degree"> September 2021 - December 2023 </p>
        </li>
        <br />
        <li>
          <p> Nanjing University of Science and Technology </p>
          <p className="university-degree"> Bachelor of Engineering</p>
          <p className="university-degree"> September 2017 - June 2021 </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Language",
    id: "language",
    content: (
      <ul className="list-disc pl-2">
        <li>Chinese (native)</li>
        <li>English (working proficiency)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Master of Information Technology student from University of New South Wales. 
            I have experience working with React, Javascript, HTML, CSS, Python, Pytorch, C/C++, PostgreSQL and Git.
            I am a quick learner and I'm always looking forward to expand my knowledge and skill sets.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("language")}
              active={tab === "language"}
            >
              {" "}
              Language{" "}
            </TabButton>
          </div>
          <div style={{height: "180px"}} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;