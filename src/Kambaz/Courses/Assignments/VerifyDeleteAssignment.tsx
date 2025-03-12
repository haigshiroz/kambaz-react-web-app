import { Modal, Button } from "react-bootstrap";
export default function VerifyDeleteAssignment({ show, handleClose, deleteAssignment }:
    {
        show: boolean;
        handleClose: () => void;
        deleteAssignment: () => void;
    }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure You Want to Delete the Assignment?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger"
                    onClick={() => {
                        deleteAssignment();
                        handleClose();
                    }} >
                    Delete Assignment
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
