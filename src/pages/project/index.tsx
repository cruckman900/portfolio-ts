// pages/projects/index.tsx
import TwoPanelLayout from "@/components/layout/TwoPanelLayout"
import ProjectMenu from "@/components/ui/ProjectMenu"

export default function ProjectIndex() {
    return (
        <TwoPanelLayout
            left={<ProjectMenu />}
            right={<p>Select a project from the menu to view details.</p>}
        />
    )
}
