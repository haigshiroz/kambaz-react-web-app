import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            < FaPlus style={{ marginLeft: "4px" }} className="text-black me-1 fs-6" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}