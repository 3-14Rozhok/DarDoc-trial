const MenuOptions = [
    {label: "Dar View", svgPath: "DarView.svg", active: true},
    {label: "My Bookings", svgPath: "MyBookings.svg"},
    {label: "Reporting", svgPath: "Reporting.svg"},
    {label: "Team", svgPath: "Team.svg"},
    {label: "Analytics", svgPath: "Analytics.svg"},
    {label: "Settings", svgPath: "Settings.svg"},
    {label: "Inbox", svgPath: "Inbox.svg"},
    {label: "Logout", svgPath: "Logout.svg"},
]

const MainNav = ({ setCurrentPage }) => {
    return (
        <div className="main-nav">
            <div className="nav-logo">
                <img src="Logo1.svg" style={{marginBottom: "7px"}}/>
                <img src="Logo2.svg"/>
            </div>
            {MenuOptions.map(option => {
                return <div key={option.label} className={option.label === "Logout" ? "nav-option nav-option-last" : "nav-option"} onClick={() => setCurrentPage(option.label)}>
                    <img src={option.svgPath}/>
                    <div className={option.active ? "nav-label nav-label-active" : "nav-label"}>
                        {option.label}
                    </div>
                    {option.label === "Inbox" && (
                        <div id="inbox-count">4</div>
                    )}
                </div>
            })}
        </div>
    )
}

export default MainNav
