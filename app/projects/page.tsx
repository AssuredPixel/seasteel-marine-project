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
      url: "https://seasteelmarine.com/projects",
    },
  };
}

const projectCategories = [
  "All",
  "Vessel Management",
  "Offshore Operations",
  "Ship Repairs",
  "Diving",
  "Engineering",
];

const projects = [
  { id: 1, title: "ExxonMobil Offshore Support", category: "Vessel Management", image: "/images/hero-ship.png" },
  { id: 2, title: "NLNG Ship Repair & Maintenance", category: "Ship Repairs", image: "/images/projects-grid.png" },
  { id: 3, title: "Chevron Subsea Inspection", category: "Diving", image: "/images/about-port.png" },
  { id: 4, title: "Seplat Field Development", category: "Offshore Operations", image: "/images/cta-rig.png" },
  { id: 5, title: "NAOC Architecture Upgrade", category: "Engineering", image: "/images/fleet-panorama.png" },
  { id: 6, title: "Oando Logistics Support", category: "Vessel Management", image: "/images/hero-ship.png" },
  { id: 7, title: "Shell Underwater Welding", category: "Diving", image: "/images/projects-grid.png" },
  { id: 8, title: "TotalEnergies Engine Overhaul", category: "Ship Repairs", image: "/images/about-port.png" },
  { id: 9, title: "Network E&P Consultancy", category: "Engineering", image: "/images/cta-rig.png" },
];

const partners = [
  "ExxonMobil",
  "Nigeria LNG Limited (NLNG)",
  "Chevron Nigeria Limited",
  "Seplat Energy Plc",
  "Nigerian Agip Oil Company (NAOC)",
  "PAN Ocean Oil Corporation",
  "Oando Energy Resources",
  "Network E&P Nigeria Limited",
  "BG Exploration",
];

export default function ProjectsPage() {
  return <ProjectsClient />;
}
