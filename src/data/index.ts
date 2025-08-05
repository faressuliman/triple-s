import type { ISlideShow } from "../interfaces";
import boat1 from "../assets/boat-1.jpg"
import equipment1 from "../assets/equipment-1.jpg"
import oceanWaves from "../assets/ocean-waves.jpg"
export const slideShow: ISlideShow[] = [
    {
        id: 1,
        image: boat1,
        title: "Professional Marine Vessels",
        description: "Modern commercial boats designed for efficiency and reliability"
    },

    {
        id: 2,
        image: equipment1,
        title: "Advanced Marine Equipment",
        description: "State-of-the-art gear and technology for all maritime operations"
    },

    {
        id: 3,
        image: oceanWaves,
        title: "Ocean Expertise",
        description: "Deep knowledge of marine environments and conditions"
    }
]