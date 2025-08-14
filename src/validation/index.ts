import * as z from "zod";

export const contactSchema = z.object({
    full_name: z.string().trim()
        .nonempty({ message: "Full name cannot be left empty" })
        .min(3, { message: "Full name must be at least 3 characters" })
        .max(100, { message: "Full name cannot exceed 100 characters" })
        .regex(/^[\p{L}]+(?:[ .'-][\p{L}]+)+$/u, { message: "Please enter your first and last name" }),

    company_name: z.string().trim()
        .nonempty({ message: "Company name cannot be left empty" })
        .min(3, { message: "Company name must be at least 3 characters" })
        .max(100, { message: "Company name cannot exceed 100 characters" })
        .regex(/^[\p{L}0-9 ,'-]+$/u),

    email: z.string().trim().nonempty({ message: "Email cannot be left empty" }).email(),

    phone: z.string().trim().nonempty({ message: "Phone number cannot be left empty" }).regex(/^\+?\d{7,15}$/, { message: "Invalid phone number format" }),

    message: z.string().trim()
        .nonempty({ message: "Message cannot be left empty" })
        .min(10, { message: "Message must be at least 10 characters" })
        .max(700, { message: "Message cannot exceed 700 characters" }),
});
