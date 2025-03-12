import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import VerifyDeleteAssignment from "./VerifyDeleteAssignment";
import { useState } from "react";

export default function AssignmentControlButtons({ deleteAssignment }:
    {
        deleteAssignment: () => void;
    }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => setShow(true)} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

            <VerifyDeleteAssignment show={show} handleClose={handleClose} deleteAssignment={deleteAssignment} />
        </div>
    );
}