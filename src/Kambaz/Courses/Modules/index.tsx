import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModules, addModule, deleteModule, editModule, updateModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);

  const addModuleHandler = async () => {
    const newModule = { name: moduleName, course: cid, }

    const moduleCreated = await coursesClient.createModuleForCourse(cid!, newModule);
    dispatch(addModule(moduleCreated));
    setModuleName(""); // Text that is in the "enter module name"
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModuleHandler} />
      <br /><br /><br /><br />
      {/* List of all modules */}
      <ListGroup className="rounded-0" id="wd-modules">

        {modules.map((module: any) => (
          // One module
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5" key={module._id}>
            {/* Header of the module */}
            <div className="wd-title p-3 ps-2 bg-secondary">
              {currentUser.role === "FACULTY" &&
                <BsGripVertical className="me-2 fs-3" />
              }

              {!module.editing && module.name}
              {module.editing && (
                <FormControl className="w-50 d-inline-block"
                  // Textbook calls updateModuleHandler but would be better to only save when pressing enter 
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModuleHandler ({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name} />
              )}

              {currentUser.role == "FACULTY" &&
                <ModuleControlButtons moduleId={module._id} deleteModule={removeModule} editModule={(moduleId) => dispatch(editModule(moduleId))} />
              }
            </div>

            {/* List of lessons */}
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && (
                module.lessons.map((lesson: any) => (
                  // One lesson
                  <ListGroup.Item className="wd-lesson p-3 ps-1" key={lesson._id}>
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
