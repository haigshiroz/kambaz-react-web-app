import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const createEmptyAssignment = () => {
    return {
        "_id": uuidv4(),
        "title": "Enter Title",
        "course": null, // cid
        "date_available": JSON.stringify(new Date()),
        "date_due": JSON.stringify(new Date()),
        "date_until": JSON.stringify(new Date()),
        "points": 100,
        "description": "Enter description",
        "assignment_group": "ASSIGNMENTS",
        "display_grade_as": "PERCENTAGE",
        "submission_type": "ONLINE"
    }
}


const initialState = {
    assignments: assignments,
    assignment: createEmptyAssignment(),
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,

    reducers: {
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },

        updateAssignments: (state,) => {
            // Check if the assignment is in the current list. If not, add it to the end
            if (state.assignments.find((a: any) => a._id === state.assignment._id) === undefined) {
                // New assignment
                state.assignments = [...state.assignments, state.assignment] as any;
            } else {
                // Existing assignment
                state.assignments = state.assignments.map((a: any) => a._id === state.assignment._id ? state.assignment : a) as any;
            }
        },

        setAssignment: (state, { payload: assignment }) => {
            state.assignment = assignment;
        },

        newAssignment: (state, { payload: courseId }) => {
            state.assignment = { ...createEmptyAssignment(), course: courseId };
        },
    }
});

export const { deleteAssignment, updateAssignments, setAssignment, newAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;