export default function About() {
    return (
        <section id="about" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full">
                    <h1 className="font-bold text-3xl uppercase">About me</h1>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="font-bold text">
                        I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                    </h2>

                    <p className="text-zinc-400">
                        I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </p>
                </div>
            </div>
        </section>
    )
}