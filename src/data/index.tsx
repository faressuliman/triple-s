import type { ISlideShow, IServices, ISteps, IGetInTouch } from "../interfaces";
import boat1 from "../assets/boat-1.jpg"
import equipment1 from "../assets/equipment-1.jpg"
import oceanWaves from "../assets/ocean-waves.jpg"
import { Cog, Palette, Clock, Target, Wrench, Ship, ShieldCheck, MapPin, Mail } from "lucide-react";

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

export const steps: ISteps[] = [
    {
        title: "Discover",
        description: "We clarify objectives, constraints, and success criteria with a focused technical brief.",
        Icon: Target,
    },

    {
        title: "Design",
        description: "Engineers craft a practical plan – equipment, scope, and schedule aligned to your needs.",
        Icon: Wrench,
    },

    {
        title: "Deploy",
        description: "We execute with disciplined logistics and clear checkpoints across the project timeline.",
        Icon: Ship,
    },

    {
        title: "Support",
        description: "Post-delivery assistance and continuous improvement to keep operations reliable.",
        Icon: ShieldCheck,
    },
];

export const GetInTouch: IGetInTouch[] = [
    {
        Icon: MapPin,
        title: "Address",
        description: (
            <>
                FDBC2317 Compass Building, Al Shohada Rd,
                AL Hamra Industrial Zone-FZ, RAK, UAE
            </>
        )
    },

    {
        Icon: Mail,
        title: "Email",
        description: "info@sss-ms.net"
    },

    {
        Icon: Clock,
        title: "Business Hours",
        description: (
            <>
                Monday to Friday, <br />8:00 AM - 5:00 PM <br />
                Closed on Saturdays and Sundays
            </>
        )
    },

]
