import { Button } from '@mui/material'
import './widgetLg.css'

export default function WidgetLg() {
  // const MyButton = ({type}) => {
  //   return <Button className={"widgetLgButton" + type}>{type}</Button>
  // }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">State</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img 
                className="widgetLgImg" 
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgState">
              <Button className="widgetLgButton Approved">Approved</Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img 
                className="widgetLgImg" 
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgState">
              <Button className="widgetLgButton Declined">Declined</Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img 
                className="widgetLgImg" 
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgState">
              <Button className="widgetLgButton Pending">Pending</Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img 
                className="widgetLgImg" 
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgState">
              <Button className="widgetLgButton Approved">Approved</Button>
            </td>
          </tr>
        </table>
      </div>
  )
}
