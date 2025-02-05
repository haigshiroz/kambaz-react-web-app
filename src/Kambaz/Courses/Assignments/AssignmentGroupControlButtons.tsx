import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AssignmentGroupControlButtons() {
    return (
        <div className="float-end">
            <span className="me-1 p-1 border rounded" id="wd-assignments-title">40% of Total</span>
            <FaPlus style={{ marginLeft: "4px" }} className="text-black me-2 fs-6" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}