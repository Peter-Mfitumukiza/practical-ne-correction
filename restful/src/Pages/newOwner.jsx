import AddOwner from "../components/addOwner";
import Sidebar from "../components/sidebar";

const NewOwnerPage = () => {
    return (
        <div className="container-fluid" style={{ paddingLeft: 0 }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <AddOwner />
                </div>
            </div>
        </div>
    )
}

export default NewOwnerPage;