// pages/project/[slug].tsx
import TwoPanelLayout from "@/components/layout/TwoPanelLayout"
import ProjectMenu from "@/components/ui/ProjectMenu"
import ProjectDetail from "@/components/ui/ProjectDetail"

export default function ProjectPage() {
    return (
        <>
            <TwoPanelLayout
                left={<ProjectMenu />}
                right={<ProjectDetail />}
            />
        </>
    )
}
