
const TableSorter = () => {
    return (
        <div className="table-sorter">
            <div style={{fontSize: "28px", fontWeight: 800, marginTop: "s6px"}}>New Bookings</div>
            <div className="booking-counter">23</div>
            <div className="divider"/>
            <div className="select">
                <select name="sorter" id="sorter">
                    <option value="select">Sort by: Default</option>
                    <option value="service">Service</option>
                    <option value="date">Date and Time</option>
                    <option value="location">Location</option>
                </select>
            </div>
        </div>
    )
}

export default TableSorter
