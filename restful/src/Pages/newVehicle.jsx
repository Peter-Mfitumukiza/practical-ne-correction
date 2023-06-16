import Sidebar from "../components/sidebar";
import AddVehicle from "../components/addVehicle";

const NewVehiclePage = () => {
    return (
        <div className="container-fluid" style={{ paddingLeft: 0 }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <AddVehicle />
                </div>
            </div>
        </div>
    )
}

export default NewVehiclePage;