import { MutableRefObject, useEffect, useState } from "react";
export function useOnScreen(ref: MutableRefObject<HTMLDivElement>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
}
