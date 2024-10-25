import { MessageProps } from "@/actions/messages"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CardMessages(message: MessageProps) {
    return (
        <Card className="bg-zinc-200 max-h-[400px] overflow-hidden">
            <CardHeader>
                <CardTitle>{message.message.name}</CardTitle>
                <CardDescription>{message.message.email}</CardDescription>
                <CardDescription>{message.message.phone}</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-hidden overflow-y-auto">
                <p className="break-words">{message.message.message}</p>
            </CardContent>
        </Card>
    )
}