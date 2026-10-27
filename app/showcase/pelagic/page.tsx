import { PelagicShowcase } from "@/components/showcase/ShowcaseSites";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Pelagic — Motion Website Concept | PEI Web Studio", "A fictional marine technology website concept by PEI Web Studio.", "/showcase/pelagic");

export default function PelagicPage() { return <PelagicShowcase />; }
