import ProjectPreview from "./ui/project-preview";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4"
    >
      <ProjectPreview
        link={`https://www.behance.net/gallery/214457435/givingly-website`}
        name="Givenly"
        description="Next-gen social media"
        imageUrl="/assets/Desktop - 6.png"
        bgColor="#685cdd"
        dark
      />
      <ProjectPreview
        link="https://www.behance.net/gallery/215786129/menu-mate-food-delivery-app"
        name="Menumate"
        description="Lend and borrow dashboard"
        imageUrl="/assets/des 3.png"
        bgColor="#313442"
        dark
      />
      {/*       
      <ProjectPreview
        name="Admin Onboarding"
        description="Increase user engagement"
        imageUrl="/assets/project-3.png"
      />
      <ProjectPreview
        name="Craftwork"
        description="Design resources that will boost your creative workflow"
        imageUrl="/assets/project-6.png"
      />
      <ProjectPreview
        name="Newsy App"
        description="News aggregator app"
        imageUrl="/assets/project-4.png"
        bgColor="#171717"
        dark
      />
      <ProjectPreview
        name="Krypto"
        description="Analyze crypto currency"
        imageUrl="/assets/project-5.png"
      /> */}
    </section>
  );
};

export default Projects;
