import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: 1,
        name: "Dummy Assignment",
        description: "Silly Description",
        course: "Frolicious Course",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    return (
        <div id="wd-working-with-objects">
            {/* ASSIGNMENTS */}
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br />
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <FormControl className="w-75" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <br />
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <label>
                <input id="wd-assignment-completed" type="checkbox" checked={assignment.completed} onChange={() =>
                    setAssignment({ ...assignment, completed: !assignment.completed })} /> Completed?
            </label>
            
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={ASSIGNMENT_API_URL}>
                Get Assignment
            </a>
            <hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/title`}>
                Get Title
            </a>
            <hr />

            {/* MODULES */}
            <h3>On Your Own: Module</h3>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Update Module Name
            </a>
            <FormControl className="w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
                Update Module Description
            </a>
            <FormControl className="w-75" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
            <hr />

            <h4>Retrieving Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>

            <h4>Retrieving Module Name</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <hr />
        </div>
    );
}
