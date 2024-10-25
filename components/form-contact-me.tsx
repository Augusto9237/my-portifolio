"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { CreateMessage } from "@/actions/messages"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),

    phone: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function FormContactMe() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: any) => {
        try {
            await CreateMessage({
                message: {
                    name: data.name as string,
                    email: data.email as string,
                    phone: data.phone as string,
                    message: data.message as string,
                }
            })
            form.reset();
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu numero de telefone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Messagem</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Digite sua mensagem" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="max-sm:w-full">
                    Enviar
                </Button>
            </form>
        </Form>
    )
}
