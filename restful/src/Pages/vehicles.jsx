import Sidebar from '../components/sidebar';
import VehiclesContent from '../components/vehiclesComponent';

const Vehicles = () => {
    return (
        <div className="container-fluid" style={{ paddingLeft: 0 }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <VehiclesContent/>
                </div>
            </div>
        </div>
    )
}

export default Vehicles;