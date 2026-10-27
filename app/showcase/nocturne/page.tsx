import { NocturneShowcase } from "@/components/showcase/ShowcaseSites";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Nocturne — Motion Website Concept | PEI Web Studio", "A fictional immersive event website concept by PEI Web Studio.", "/showcase/nocturne");

export default function NocturnePage() { return <NocturneShowcase />; }
