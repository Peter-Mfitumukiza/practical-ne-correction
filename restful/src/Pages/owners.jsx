import Sidebar from "../components/sidebar";
import OwnersContent from "../components/OwnersContent";
import AddOwner from "../components/addOwner";

const OwnersPage = () => {
    return (
        <div className="container-fluid" style={{ paddingLeft: 0 }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <OwnersContent />
                </div>
            </div>
        </div>
    )
}

export default OwnersPage;