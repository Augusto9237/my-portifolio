import CardMessages from "./_components/card-messages";

export default function Messages() {

    return (
        <div className="grid grid-cols-3 p-5 gap-5 h-full min-h-screen">
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
        </div>
    )
}