// pages/blog/index.tsx
import TwoPanelLayout from "@/components/layout/TwoPanelLayout"
import BlogMenu from "@/components/ui/BlogMenu"

export default function BlogIndex() {
    return (
        <TwoPanelLayout
            left={<BlogMenu />}
            right={<p>Select a blog post from the menu to view details.</p>}
        />
    )
}
