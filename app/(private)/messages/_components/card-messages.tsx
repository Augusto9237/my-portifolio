import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CardMessages() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>name</CardTitle>
                <CardDescription>email</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit beatae, dolore harum quaerat facilis blanditiis numquam consequatur rem officiis tenetur vero! Ab, dolorum magni perspiciatis aliquam hic voluptatum aliquid!</p>
            </CardContent>
            <CardFooter>
                <p>Phone</p>
            </CardFooter>
        </Card>
    )
}