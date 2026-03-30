import { Metadata } from "next";
import ProjectsClient from "@/components/sections/ProjectsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Projects | Marine & Offshore Portfolio — Seasteel Marine",
    description: "A showcase of our successful offshore and marine engineering projects delivered across the Atlantic corridor.",
    alternates: {
      canonical: "/projects",
    },
    openGraph: {
      title: "Our Projects | Marine & Offshore Portfolio — Seasteel Marine",
      description: "A showcase of our successful offshore and marine engineering projects delivered across the Atlantic corridor.",
      url: "https://seasteelsmarine.com/projects",
    },
  };
}



export default function ProjectsPage() {
  return <ProjectsClient />;
}
