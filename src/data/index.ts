import type { ISlideShow, IServices } from "../interfaces";
import boat1 from "../assets/boat-1.jpg"
import equipment1 from "../assets/equipment-1.jpg"
import oceanWaves from "../assets/ocean-waves.jpg"
import { Cog, Palette, Clock } from "lucide-react";

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

export const services: IServices[] = [
    {
        icon: Cog,
        title: "Efficient in Technicalities",
        description: "Advanced technical expertise with cutting-edge marine technology and engineering solutions for optimal performance.",
        color: "text-primary",
    },

    {
        icon: Palette,
        title: "Flexible in Customization",
        description: "Tailored solutions designed to meet your specific marine requirements with adaptable and personalized approaches.",
        color: "text-accent",
    },

    {
        icon: Clock,
        title: "Deliver On Time",
        description: "Reliable project delivery with strict adherence to timelines, ensuring your marine operations stay on schedule.",
        color: "text-primary",
    },
];