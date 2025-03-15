export function App() {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://unavatar.io/ferrari" alt="Ferrari" />
                <div className="tw-followCard-info">
                    <strong>Jhoonatan Isai</strong>
                    <span className="tw-followCard-infoUserName">@JhonatanIsai</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}