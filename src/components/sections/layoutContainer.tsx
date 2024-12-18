import { ReactNode, useEffect, useState } from "react"

const LayoutContainer = ({ children }: { children: ReactNode }) => {
    const [currentWidth, setCurrentWidth] = useState<string>("")
    useEffect(() => {
        const bodyWidht = document.querySelector("body")?.clientWidth
        if (bodyWidht) {
            setCurrentWidth(`${bodyWidht - 256}px`)
        }
    }, [])
    return (
        <div className={`mx-auto`} style={{maxWidth:currentWidth}}>
            {children}
        </div>
    )
}

export default LayoutContainer