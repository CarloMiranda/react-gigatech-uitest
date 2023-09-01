import React from 'react';
import Sales from './Sales';
function Dashboard() {

    return(
        <div className='dashboard'>
            <div className="top_panel bg-primary">
                <h2>
                    Dashboard
                    <i className='bx bxs-bell' >
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        4
                        </span>
                    </i>
                </h2>
            </div>
            <div className='chart-panel'>
                <Sales />
                <div className="deposit">
                    <h3 className='text-primary'>Recent Deposit</h3>
                    <h1 className='text-dark'>$3,024.00</h1>
                    <h4 className='text-secondary'>on 15 March, 2019</h4>
                    <a  className='fs-3' href="#">View balance</a>
                </div>
            </div>
            <div className='orders'>
                <h3 className='text-primary'>Recent Orders</h3>
                <table className='my-4'>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Name</td>
                            <td>Ship To</td>
                            <td>Payment Method</td>
                            <td>Sale Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16 Mar, 2019</td>
                            <td>Elvis Presley</td>
                            <td>Tupelo, MS</td>
                            <td>VISA<i className='bx bx-dots-vertical-rounded' ></i><i className='bx bx-dots-horizontal-rounded' ></i>3719</td>
                            <td>$312.44</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>16 Mar, 2019</td>
                            <td>Paul McCartney</td>
                            <td>London,UK</td>
                            <td>VISA<i className='bx bx-dots-vertical-rounded' ></i><i className='bx bx-dots-horizontal-rounded' ></i>2574</td>
                            <td>$866.99</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>16 Mar, 2019</td>
                            <td>Tom Schols</td>
                            <td>Boston, MA</td>
                            <td>VISA<i className='bx bx-dots-vertical-rounded' ></i><i className='bx bx-dots-horizontal-rounded' ></i>1253</td>
                            <td>$100.81</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>16 Mar, 2019</td>
                            <td>Michael Jackson</td>
                            <td>Gary, IN</td>
                            <td>VISA<i className='bx bx-dots-vertical-rounded' ></i><i className='bx bx-dots-horizontal-rounded' ></i>2000</td>
                            <td>$654.39</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>16 Mar, 2019</td>
                            <td>Bruce Springteem</td>
                            <td>Long Branch, NJ</td>
                            <td>VISA<i className='bx bx-dots-vertical-rounded' ></i><i className='bx bx-dots-horizontal-rounded' ></i>5919</td>
                            <td>212.79</td>
                        </tr>
                    </tbody>
                </table>
                <a className="text-primary" href="#"><h3>See more orders</h3></a>
            </div>
        </div>
    )
}

export default Dashboard;