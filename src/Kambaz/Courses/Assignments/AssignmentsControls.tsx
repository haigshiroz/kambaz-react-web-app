import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="float-start" id="wd-search-assignment-container">
                <label className="ms-2" htmlFor="wd-search-assignment">
                    <HiMiniMagnifyingGlass className="fs-3" />
                </label>
                <input className="mx-2" placeholder="Search..." id="wd-search-assignment" />
            </div>

            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2 text-white" style={{ bottom: "1px" }} />
                Assignment
            </Button>

            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2 text-black" style={{ bottom: "1px" }} />
                Group
            </Button>
        </div>
    );
}
