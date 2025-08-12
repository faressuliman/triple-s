import * as z from "zod";

export const contactSchema = z.object({
    full_name: z.string({message: "Name cannot contain numbers"}).min(2, { message: "Name cannot be left empty" }),
    company_name: z.string({message: "Name cannot contain numbers"}).min(2, { message: "Name cannot be left empty" }),
    email: z.string().email(),
    phone: z.string().regex(/^\+?\d{7,15}$/, { message: "Invalid phone number format" }),
    message: z.string().min(1, { message: "Message cannot be left empty"}).max(500, { message: "Message cannot exceed 500 characters" }),
});