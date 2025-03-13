import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const createEmptyCourse = () => {
    return {
        _id: uuidv4(),
        name: "New Course",
        number: "New Number",
        startDate: JSON.stringify(new Date()),
        endDate: JSON.stringify(new Date()),
        department: "New Department",
        credits: 4,
        description: "New Description",
        image_src: "/images/CourseBackdrop3.png",
    }
}


const initialState = {
    courses: courses,
    course: createEmptyCourse(),
};


const coursesSlice = createSlice({
    name: "courses",
    initialState,

    reducers: {
        addNewCourse: (state,) => {
            state.courses = [...state.courses, state.course] as any;
            state.course = createEmptyCourse();
        },

        setCourse: (state, { payload: course }) => {
            state.course = course;
        },

        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },

        updateCourse: (state,) => {
            state.courses = state.courses.map((c: any) => c._id === state.course._id ? state.course : c);
        },
    }
});

export const { addNewCourse, setCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
