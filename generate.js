const fs = require('fs');
const path = require('path');

const projects = [
  { slug: "current-ia", title: "Unlocking the value of the Current.", description: "Led a foundational information architecture overhaul to add visibility of core banking features and launched a new 'Discover' tab for rewards and partner offers.", imageSrc: "/pt-current-ia.webp", companyLogo: "/current.png", companyName: "Current", projectRole: "Visual Design and Architecture", heroText: "I refreshed the company’s digital framework and booking flow to align the customers’ digital experience with the incredible campervan experience." },
  { slug: "current-direct-deposit", title: "Driving growth through Current’s core banking.", description: "Optimizing the direct deposit flow for new and existing users for improved conversion, retention and cost reduction.", imageSrc: "/pt-current-direct-deposit.webp", companyLogo: "/current.png", companyName: "Current", projectRole: "Product Design", heroText: "I overhauled the direct deposit flow to drastically increase activation rates while simultaneously reducing user friction." },
  { slug: "tmrw", title: "Defining TMRW from day zero.", description: "Led all branding efforts, creating the visual identity, marketing resources, brand guidelines, and the launch website.", imageSrc: "/pt-tmrw.webp", companyLogo: "", companyName: "TMRW", projectRole: "Brand Art Direction", heroText: "I defined the complete visual identity and marketing presence from day zero to launch." },
  { slug: "kismet", title: "Transforming Kismet’s booking ecosystem.", description: "Redesigned the internal and external booking systems and launched the foundation for the upcoming marketplace and website.", imageSrc: "/pt-kismet.webp", companyLogo: "", companyName: "Kismet", projectRole: "UX Research & Design", heroText: "I systematically unraveled their legacy booking flows, building a robust modern booking marketplace." },
  { slug: "quimbee", title: "Empowering the next generation of legal professionals.", description: "Evolved the digital platform and study tools used by over 500,000 law students and practicing lawyers across the US.", imageSrc: "/pt-quimbee.webp", companyLogo: "", companyName: "Quimbee", projectRole: "Senior Product Designer", heroText: "I elevated the core learning and assessment products empowering the next generation of top-tier legal talent." },
  { slug: "quimbee-app", title: "Studying without boundaries.", description: "Designed a native mobile experience to provide students with high-stakes study tools whenever they are away from their desks.", imageSrc: "/pt-quimbee-app.webp", companyLogo: "", companyName: "Quimbee", projectRole: "Mobile Lead", heroText: "I engineered a flawless native mobile application bringing high-stakes continuous learning directly into the hands of students everywhere." },
  { slug: "wing", title: "Elevating cognitive wellness.", description: "Created a high-performance digital storefront and brand presence for a premium e-bike manufacturer.", imageSrc: "/pt-wing.webp", companyLogo: "", companyName: "Wing", projectRole: "Digital Designer", heroText: "I designed and deployed a massive digital storefront optimized completely for aesthetic edge and maximal e-commerce conversion." },
  { slug: "mbw", title: "Building a platform for authentic leadership.", description: "Developed a comprehensive re-brand and digital membership portal to support a growing community of professionals.", imageSrc: "/pt-mbw.webp", companyLogo: "", companyName: "MBW", projectRole: "Product & UX Design", heroText: "I built out the fundamental architecture for a private digital membership portal targeting authentic professional growth." }
];

projects.forEach(project => {
  const dir = path.join('src/app/projects', project.slug);
  fs.mkdirSync(dir, { recursive: true });

  const logoJSX = project.companyLogo ? `<Image src="${project.companyLogo}" alt="${project.companyName || "Logo"}" fill className="object-contain p-2 md:p-3" />` : `<span className="text-white/20 text-[8px] sm:text-[10px] uppercase tracking-widest px-1">Logo</span>`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), `import { ProjectLayout } from "@/components/ProjectLayout";
import { MasonryGrid } from "@/components/MasonryGrid";
import Image from "next/image";

export default function ProjectPage() {
  const masonryPlaceholderImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <ProjectLayout slug="${project.slug}">

      {/* Editable Top Hero Layout */}
      <div className="w-full px-[20px] md:px-[40px] lg:px-[100px] pt-16 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-10">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden">
               ${logoJSX}
            </div>
            <div className="flex flex-col justify-center">
               <h4 className="text-lg md:text-xl font-bold text-white tracking-wide leading-tight">${project.companyName || "Company"}</h4>
               <p className="text-white/50 text-sm md:text-base font-medium mt-1">${project.projectRole || "Role"}</p>
            </div>
         </div>
         <h1 className="text-3xl md:text-5xl lg:text-[64px] font-medium tracking-tight leading-[1.2] lg:leading-[1.1] max-w-6xl">
            ${project.heroText || project.description}
         </h1>
      </div>
      
      {/* Editable Primary Hero Image */}
      <div className="w-full h-[60vh] lg:h-[80vh] px-[20px] md:px-[40px] lg:px-[100px] mb-20">
         <div 
           style={{ viewTransitionName: \`project-thumb-${project.slug}\` }}
           className="w-full h-full relative rounded-[32px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
         >
           <Image src="${project.imageSrc || "/placeholder.svg"}" alt="${project.title}" fill className="object-cover" priority />
         </div>
      </div>

      {/* Editable Title & Description side by side */}
      <div className="w-full px-[20px] md:px-[40px] lg:px-[100px] py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row gap-16 lg:gap-32 mb-16 md:mb-24">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            ${project.title}
          </h2>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <p className="text-white/70 text-xl lg:text-2xl leading-relaxed max-w-3xl">
            ${project.description}
          </p>
        </div>
      </div>

      {/* Editable Content Grid */}
      <div className="w-full px-[20px] md:px-[40px] lg:px-[100px]">
        <MasonryGrid images={masonryPlaceholderImages} />
      </div>

    </ProjectLayout>
  );
}
`);
});
console.log('Finished scaffolding hardcoded react pages');
