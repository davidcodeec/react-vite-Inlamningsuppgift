import React from 'react'
import '../HomeMainSections/ProjectCaseSection.css'
import image_3 from '../../../assets/images/image3.png'
import image_4 from '../../../assets/images/image4.png'
import image_5 from '../../../assets/images/image5.png'
import image_6 from '../../../assets/images/image6.png'
import Button from '../../Generics/Button'
import { useState, useEffect } from 'react';
import ProjectCaseSectionBox from '../../Generics/MainGenerics/ProjectCaseSectionBox'
import SectionTitle from '../../Generics/MainGenerics/SectionTitleBox'

const ProjectCaseSection = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectList = [
      { src:image_3, alt: "Man with Newspaper", title: "Grow your business", description: "Read More" },
      { src:image_4, alt: "Phone with other products", title: "Why your client needs a responsive website", description: "Read More" },
      { src:image_5, alt: "Book and cup", title: "Educate your employees to get better results", description: "Read More"},
      { src:image_6, alt: "Laptop on the desk", title: "Business Insights is a important piece of your business", description: "Read More"},
    ];
    
    setProjects(projectList);
  }, []);

  return (
    <section className="project-case-section">
      <div className="container">
        <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Projects" />
        <div className="project-end-case">

          {projects.map((project, index) => (
            <ProjectCaseSectionBox key={index} src={project.src} alt={project.alt} title={project.title} description={project.description} />
          ))}
    
        </div>

        <div className="center-content">
          <Button type="black" title="All Recent Projects" url="projects" /> 
        </div>

      </div>
    </section>

  )
}

export default ProjectCaseSection