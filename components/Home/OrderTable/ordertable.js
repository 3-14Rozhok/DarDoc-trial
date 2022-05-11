import React from "react"
import { useTable } from "react-table"
import MockData from "./MockData"

const OrderTable = () => {

    function IdCell({ value }) {
        return <div className="id-cell">
            <div className="id-cell-id">{value.id}</div>
            <div className="id-cell-date">{value.date}</div>
            <div className="id-cell-patient">{value.patient}</div>
            {/* <input type="checkbox" className="id-cell-checked" onClick={() => {}} /> */}
        </div>
    }
    function DetailsCell({ value }) {
        return <div className="details-cell">
            <div className="details-name">{value.name}</div>
            <div className="details-tel">{value.tel}</div>
            <div className="details-button">View Details</div>
        </div>
    }
    function ServiceCell({ value }) {
        return <div className="service-cell">
            <div className="service-covid">{value.covid}</div>
            <div className="service-type">{value.type}</div>
        </div>
    }
    function DateCell({ value }) {
        return <div className="date-cell">
            <div className="date-date">{value.date}</div>
            <div className="date-time">{value.time}</div>
            <div className="date-timer">{value.timer}</div>
            <div className="date-svg">
                <img src="Timer.svg" width={12} height={14}/>
            </div>
        </div>
    }
    function LocationCell({ value }) {
        return <div className="location-cell">
            <div className="location-city">{value.city}</div>
            <div className="location-adr">{value.address}</div>
        </div>
    }
    function ActionCell({ value }) {
        return <div className="action-cell">
            <div className="action-accept">Accept</div>
            <div className="action-reject">Reject</div>
        </div>
    }
    function IdHeader({ value }) {
        return <div className="id-header">
            Booking ID
        </div>
    }
    function DetailsHeader({ value }) {
        return <div className="details-header">
            Patient Details
        </div>
    }
    function ServiceHeader({ value }) {
        return <div className="details-header">
            Service
            <img src="Sorting.svg" width={12} style={{marginLeft: "10px"}}/>
        </div>
    }
    function DateHeader({ value }) {
        return <div className="details-header">
            Date and Time
            <img src="Sorting.svg" width={12} style={{marginLeft: "10px"}}/>
        </div>
    }
    function LocationHeader({ value }) {
        return <div className="location-header">
            Location
            <img src="Sorting.svg" width={12} style={{marginLeft: "10px"}}/>
        </div>
    }
    function ActionHeader({ value }) {
        return <div className="action-header">
            Action
        </div>
    }

    function Table({ columns, data }) {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
        })

        return (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} className="table-row">
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
      }

    const columns = React.useMemo(
    () => [
            {
                Header: "Booking ID",
                accessor: "id",
                Cell: IdCell,
                Header: IdHeader,
            },
            {
                Header: "Patient Details",
                accessor: "details",
                Cell: DetailsCell,
                Header: DetailsHeader,
            },
            {
                Header: "Service",
                accessor: "service",
                Cell: ServiceCell,
                Header: ServiceHeader,

            },
            {
                Header: "Date and Time",
                accessor: "date",
                Cell: DateCell,
                Header: DateHeader,
            },
            {
                Header: "Location",
                accessor: "location",
                Cell: LocationCell,
                Header: LocationHeader,

            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ActionCell,
                Header: ActionHeader,
            },
    ],
    []
    )

    const data = React.useMemo(() => MockData, [])

    return (
        <div className="table-container">
            <Table columns={columns} data={data} />
        </div>
    )
}

export default OrderTable
