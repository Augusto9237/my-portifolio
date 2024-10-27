'use server'
import { prismaClient } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export interface MessageProps {
    message: {
        name: string;
        email: string;
        phone: string;
        message: string;
    }
}

export const CreateMessage = async (message: MessageProps) => {
    await prismaClient.messages.create({
        data: {
            name: message.message.name,
            email: message.message.email,
            phone: message.message.phone,
            message: message.message.message,
        }
    })

    revalidatePath('/messages')
}

export async function GetMessages() {
    const messages = await prismaClient.messages.findMany()

    return { messages }
}