import { GetMessages } from "@/actions/messages";
import CardMessages from "./_components/card-messages";

export default async function Messages() {
    const { messages } = await GetMessages()
    return (
        <div className="grid grid-cols-3 p-5 gap-5 h-full min-h-screen">
            {messages.map((message) => (
                <CardMessages key={message.id} message={message} />
            ))}
        </div>
    )
}