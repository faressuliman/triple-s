import type { ReactNode } from "react";
import type { contactSchema } from "../validation";
import type z from "zod";

export interface ISlideShow {
    id: number,
    image: string,
    title: string,
    description: string
}

export interface IServices {
    icon: React.ElementType
    title: string,
    description: string,
    color: string
}

export interface ISteps {
    Icon: React.ElementType,
    title: string,
    description: string
}

export interface IGetInTouch {
    Icon: React.ElementType,
    title: string,
    description: ReactNode
}

export type IFormInput = z.infer<typeof contactSchema>;