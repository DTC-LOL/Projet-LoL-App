import React from "react"

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = React.useState(1200)
    const resize = () => {
        setBreakpoint(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return breakpoint
}

export default useBreakpoint;
