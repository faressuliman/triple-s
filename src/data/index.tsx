import type { ISlideShow, IServices, ISteps, IGetInTouch, IStory } from "../interfaces";
import boat1 from "../assets/boat-1.jpg"
import equipment1 from "../assets/equipment-1.jpg"
import oceanWaves from "../assets/ocean-waves.jpg"
import { Cog, Palette, Clock, Target, Wrench, ShieldCheck, MapPin, Mail, Compass, Lightbulb, Anchor } from "lucide-react";

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
        Icon: Anchor,
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
                AL Hamra Industrial Zone-FZ, RAK, United Arab Emirates
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

export const missionVision: IServices[] = [
    {
        icon: Compass,
        title: "MISSION",
        description: "To be the most trusted and innovative partner in the marine industry, delivering superior solutions while maintaining the highest standards of safety and environmental responsibility. We strive to exceed expectations through our commitment to excellence, safety, and sustainable practices that benefit both our clients and the marine ecosystem.",
        color: "text-primary",
    },
    
    {
        icon: Lightbulb,
        title: "VISION",
        description: "To shape the future of maritime operations through cutting-edge technology, sustainable practices, and unwavering commitment to excellence. We envision a world where marine technology seamlessly integrates innovation with environmental stewardship, creating safer, more efficient, and sustainable maritime solutions for generations to come.",
        color: "text-accent",
    },
];

export const storyTimeline: IStory[] = [
    {
        badge: "Start",
        title: "Our Beginning",
        description: "Started with a simple yet powerful vision: to transform maritime operations through cutting-edge technology and sustainable practices.",
        color: "#4B6F9B"
    },

    {
        badge: "Innovation",
        title: "Technology First",
        description: "Developed proprietary marine solutions that combine advanced navigation systems with environmental consciousness.",
        color: "#4B6F9B"
    },

    {
        badge: "Growth",
        title: "Expanding Horizons",
        description: "Extended our reach globally, serving diverse maritime markets while maintaining our commitment to excellence.",
        color: "#4B6F9B"
    },

    {
        badge: "Future",
        title: "Leading Tomorrow",
        description: "Continuing to pioneer the future of maritime technology with innovative solutions that drive industry transformation.",
        color: "#4B6F9B"
    }
];
