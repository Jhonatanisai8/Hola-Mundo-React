import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName="ferrari" firstName="Jhonatan Isai" isFollowing={true} />
            <TwitterFollowCard formatUserName={formatUserName} userName="mouredev" firstName="Moure Dev" isFollowing={false} />
        </section>
    )
}