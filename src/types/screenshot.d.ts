export interface ScreenshotItem {
    title: string
    src: string
    desc: string
}

export type ScreenshotGroup = {
    [groupName: string]: ScreenshotItem[]
}
