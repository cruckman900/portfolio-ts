// components/ui/TagCTA.tsx
import styles from './TagCTA.module.scss'

interface TagCTAProps {
    tag: string
}

export default function TagCTA({ tag }: TagCTAProps) {
    const tagPrompts: Record<string, string> = {
        // Failure at Fifty
        "memoir": "Want help telling your story?",
        "milestone-memoir": "Marking a turning point? Let’s document it.",
        "mental-health-memoir": "Your experience could help others heal.",
        "addiction-recovery": "Know someone who needs this book?",
        "schizophrenia": "Navigating mental illness? You’re not alone.",
        "alcoholism": "Ready to share your recovery journey?",
        "personal-transformation": "Want to inspire change through your story?",
        "trauma-survival": "Your survival matters—let’s make it heard.",
        "james-frey": "Drawn to raw memoirs? Let’s collaborate.",
        "nic-sheff": "Know someone who needs a story like this?",
        "raw-memoir": "Unfiltered truth can change lives.",
        "failure-and-resilience": "Turn your setbacks into legacy milestones.",

        // Fifty-One Ways to Lie
        "crime-memoir": "Have a story to expose? Let’s collaborate.",
        "darkest-chapter": "Been through the worst? Let’s share how you survived.",
        "true-crime-memoir": "Your truth could be someone’s wake-up call.",
        "corporate-corruption": "Seen something shady? Let’s shine a light.",
        "international-crime-syndicate": "Know someone caught in a web of lies?",
        "mental-health-survival": "Your survival story could help others.",
        "paranoia": "Struggling with trust or fear? Let’s talk.",
        "fraud-exposure": "Want to reveal the truth? We’ll help you tell it.",
        "job-scams": "Been burned by fake opportunities? You’re not alone.",
        "tech-industry-deception": "Let’s expose the dark side of innovation.",
        "memoir-of-betrayal": "Ready to reclaim your voice after betrayal?",

        // Better Life Beyond Fifty
        "redemption-memoir": "Ready to start your next chapter?",
        "turning-point": "This could be the moment that changes everything.",
        "mental-health-recovery": "Your healing journey could inspire others.",
        "addiction-survival": "Want to share how you broke free?",
        "life-after-fifty": "It’s never too late to build something better.",
        "healing-through-music": "Let your music tell your story.",
        "family-reconcilliation": "Rebuilding family ties? Let’s celebrate that.",
        "personal-growth": "Want to help others grow through your story?",
        "self-help-inspiration": "Let’s turn your wisdom into a legacy.",
        "resilience-stories": "Your comeback could be someone’s lifeline.",
        "memoir-of-hope": "Let’s share the light you found in the dark."
    }
    const prompt = tagPrompts[tag] || "Inspired by this theme? Let’s connect."

    return (
        <div className={styles.tagCTA}>
            <p>{prompt}</p>
            <a href="/contact" className={styles.ctaButton}>
                Start a Conversation
            </a>
        </div>
    )
}
