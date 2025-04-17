import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const createEmptyAssignment = () => {
    return {
        "_id": uuidv4(),
        "title": "Enter Title",
        "course": null, // cid
        "date_available": new Date(),
        "date_due": new Date(),
        "date_until": new Date(),
        "points": 100,
        "description": "Enter description",
        "assignment_group": "ASSIGNMENTS",
        "display_grade_as": "PERCENTAGE",
        "submission_type": "ONLINE"
    }
}


const initialState = {
    assignments: [],
    assignment: createEmptyAssignment(),
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,

    reducers: {
        setAssignments: (state, { payload: assignments}) => {
            state.assignments = assignments;
        },

        addAssignment: (state, { payload: assignment}) => {
            state.assignments = [...state.assignments, assignment] as any;
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },

        updateAssignment: (state, { payload: assignment} ) => {
            state.assignments = state.assignments.map(
                (a: any) => a._id === assignment._id ? assignment : a) as any;

        },

        setAssignment: (state, { payload: assignment }) => {
            state.assignment = assignment;
        },

        newAssignment: (state, { payload: courseId }) => {
            state.assignment = { ...createEmptyAssignment(), course: courseId };
        },
    }
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, setAssignment, newAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;