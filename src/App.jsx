import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="ferrari" firstName="Jhonatan Isai" />
            <TwitterFollowCard userName="mouredev" firstName="Moure Dev" />
        </section>
    )
}