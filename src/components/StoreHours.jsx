import "./../css/StoreHours.css";

const StoreHours = () => {
    return (
        <div id="store-hours" className="one">
            <h2>Store Hours</h2>

            <table id="hours-table">
                <tbody>
                    <tr>
                        <td>Mon-Fri</td>
                        <td>8:00 A.M. - 7:00 P.M.</td>
                    </tr>

                    <tr>
                        <td>Sat</td>
                        <td>9:00 A.M. - 5:00 P.M.</td>
                    </tr>

                    <tr>
                        <td>Sun</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default StoreHours;