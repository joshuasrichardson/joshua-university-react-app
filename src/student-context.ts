import { Dispatch, SetStateAction, createContext } from "react";
import { Student } from "./types";

interface StudentContextInterface {
  student: Student;
  setStudent: Dispatch<SetStateAction<Student>>;
}

const StudentContext = createContext<StudentContextInterface>({
  student: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courses: [],
  },
  setStudent: () => null,
});

export default StudentContext;
