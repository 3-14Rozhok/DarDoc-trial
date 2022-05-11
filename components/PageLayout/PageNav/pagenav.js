const today = new Date()
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = month[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear()
const time = today.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })

const PageNav = ({ currentPage }) => {
    return (
        <div className="page-nav">
            <div style={{marginTop: "75px", marginLeft: "70px", fontSize: "36px", fontWeight: "800" }}>
                {currentPage}
            </div>
            <div style={{width: "680px", height: "66px", marginTop: "80px", marginLeft: "38px", fontSize: "16px", color: "rgba(3, 17, 28, 0.6)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet</div>
            
            <div id="time">{time}</div>
            <div id="date">{date}</div>
           
            <div className="user-notifications">
                <img src="UserNotifications.svg" width={20} height={22}/>
                <div id="user-notifications-count">4</div>
            </div>
            
            <div className="user-background">
                <img src="User.png" width={73} height={73}/>
            </div>
        </div>
    )
}

export default PageNav
