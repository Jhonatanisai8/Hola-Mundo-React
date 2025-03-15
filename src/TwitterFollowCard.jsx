export function TwitterFollowCard({ formatUserName, userName, firstName, isFollowing }) {
    const urlImage = `https://unavatar.io/${userName}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={urlImage}
                    alt="Ferrari" />
                <div className="tw-followCard-info">
                    <strong>{firstName}</strong>
                    <span className="tw-followCard-infoUserName">@{formatUserName(userName)}</span>
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