import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />

      <br /><br /><br /><br />

      {/* List of all modules */}
      <ListGroup className="rounded-0" id="wd-modules">

        {modules.filter((module: any) => module.course === cid).map((module: any) => (
          // One module
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5">
            {/* Header of the module */}
            <div className="wd-title p-3 ps-2 bg-secondary">
              {currentUser.role === "FACULTY" &&
                <BsGripVertical className="me-2 fs-3" />
              }

              {!module.editing && module.name}
              {module.editing && (
                <FormControl className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name} />
              )}

              {currentUser.role == "FACULTY" &&
                <ModuleControlButtons moduleId={module._id} deleteModule={(moduleId) => { dispatch(deleteModule(moduleId)) }} editModule={(moduleId) => dispatch(editModule(moduleId))} />
              }
            </div>

            {/* List of lessons */}
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && (
                module.lessons.map((lesson: any) => (
                  // One lesson
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    {currentUser.role === "FACULTY" &&
                      <BsGripVertical className="me-2 fs-3" />
                    }
                    {lesson.name}
                    {currentUser.role === "FACULTY" &&
                      <LessonControlButtons />
                    }
                  </ListGroup.Item>
                ))
              )}
              {/* End of lessons */}
            </ListGroup>
            {/* End of one module */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
