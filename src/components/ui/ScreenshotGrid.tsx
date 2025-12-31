import { useState, useEffect } from "react"
import styles from "./ScreenshotGrid.module.scss"
import { ScreenshotItem } from "@/types/screenshot"

interface ScreenshotGridProps {
    screenshots: ScreenshotItem[]
}

export default function ScreenshotGrid({ screenshots }: ScreenshotGridProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const active = activeIndex !== null ? screenshots[activeIndex] : null

    // Keyboard navigation inside modal
    useEffect(() => {
        if (activeIndex === null) return

        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setActiveIndex((i) => (i! + 1) % screenshots.length)
            }
            if (e.key === "ArrowLeft") {
                setActiveIndex((i) => (i! - 1 + screenshots.length) % screenshots.length)
            }
            if (e.key === "Escape") {
                setActiveIndex(null)
            }
        }

        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [activeIndex, screenshots.length])

    return (
        <>
            <div className={styles.grid}>
                {screenshots.map((shot, i) => (
                    <div
                        key={i}
                        className={`${styles.card} ${activeIndex === i ? styles.active : ""}`}
                        onClick={() => setActiveIndex(i)}
                    >
                        <img src={shot.src} alt={shot.title} />
                        <p>{shot.src.split("/").pop()}</p>
                    </div>
                ))}
            </div>

            {active && (
                <div className={styles.modalOverlay} onClick={() => setActiveIndex(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalLeft}>
                            <img src={active.src} alt={active.title} className={styles.modalImage} />
                        </div>

                        <div className={styles.modalRight}>
                            <div className={styles.modalText}>
                                <div className={styles.theModalText}>
                                    <h3>{active.src.split("/").pop()}</h3>
                                    <p>{active.desc}</p>
                                </div>

                                <div className={styles.navButtons}>
                                    <button
                                        onClick={() =>
                                            setActiveIndex((activeIndex! - 1 + screenshots.length) % screenshots.length)
                                        }
                                    >
                                        ‹ Prev
                                    </button>

                                    <button
                                        onClick={() =>
                                            setActiveIndex((activeIndex! + 1) % screenshots.length)
                                        }
                                    >
                                        Next ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
