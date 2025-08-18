import type { ISlideShow, IServices, ISteps, IGetInTouch, IStory } from "../interfaces";
import boat1 from "../assets/boat-1.jpg"
import firstSlide from "../assets/firstslide.jpeg"
import thirdSlide from "../assets/thirdslide.jpeg"
import secondSlide from "../assets/secondslide.jpeg"
import equipment1 from "../assets/equipment-1.jpg"
import oceanWaves from "../assets/ocean-waves.jpg"
import { Clock, Target, Wrench, ShieldCheck, MapPin, Mail, Compass, Lightbulb, Anchor, Fan, ShipWheel, DatabaseZap } from "lucide-react";

export const slideShow: ISlideShow[] = [
    {
        id: 1,
        image: firstSlide,
        title: "Propulsion Design and Supply",
        description: "Shaftline engineering, propeller selection and component supply"
    },

    {
        id: 2,
        image: secondSlide,
        title: "Power Generation Systems",
        description: "Load analysis, generator sizing, specification and procurement"
    },

    {
        id: 3,
        image: thirdSlide,
        title: "Marine HVAC, Centralized",
        description: "Heat load calculations, equipment selection and system layout"
    }
]

export const services: IServices[] = [
    {
        icon: ShipWheel,
        title: "Propulsion Design • Shaftlines and Propellers",
        description: "Calculations for shaft diameter, bearing spans and alignment, propeller selection and supply of shaftline components.",
        color: "text-primary",
    },

    {
        icon: DatabaseZap,
        title: "Power System Sizing for Generators",
        description: "Load analysis, generator sizing and specification, single or multi‑set solutions with procurement support.",
        color: "text-accent",
    },

    {
        icon: Fan,
        title: "Marine HVAC Design • Centralized Systems",
        description: "Heat load calculations, equipment selection, ducting and layout, plus supply for chilled‑water or DX systems.",
        color: "text-primary",
    },
];

export const steps: ISteps[] = [
    {
        title: "Brief & Survey",
        description: "Technical requirements, constraints and on‑board survey where needed.",
        Icon: Target,
    },

    {
        title: "Engineering & Sizing",
        description: "Calculations for shaftlines and propellers, generator load studies and marine HVAC heat loads.",
        Icon: Wrench,
    },

    {
        title: "Procurement & Fabrication",
        description: "Specification, sourcing and fabrication/assembly of equipment and components.",
        Icon: Anchor,
    },

    {
        title: "Delivery & Support",
        description: "Delivery, documentation and post‑delivery support for reliable operation.",
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
        description: "To be the most trusted and innovative partner in the marine industry, delivering superior solutions while maintaining the highest standards of safety and environmental responsibility.",
        color: "text-primary",
    },
    
    {
        icon: Lightbulb,
        title: "VISION",
        description: "To shape the future of maritime operations through cutting-edge technology, sustainable practices, and unwavering commitment to excellence.",
        color: "text-accent",
    },
];

export const storyTimeline: IStory[] = [
    {
        badge: "Start",
        title: "Our Beginning",
        description: "Started with a simple yet powerful vision: to transform maritime operations through cutting-edge technology and sustainable practices."
    },

    {
        badge: "Innovation",
        title: "Technology First",
        description: "Developed proprietary marine solutions that combine advanced navigation systems with environmental consciousness."
    },

    {
        badge: "Growth",
        title: "Reaching Beyond",
        description: "Extended our reach globally, serving diverse maritime markets while maintaining our commitment to excellence."
    },

    {
        badge: "Future",
        title: "Leading Tomorrow",
        description: "Continuing to pioneer the future of maritime technology with innovative solutions that drive industry transformation."
    }
];
