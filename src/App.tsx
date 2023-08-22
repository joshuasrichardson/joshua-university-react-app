import React, { ReactElement, useState } from "react";
import "./index.css";
import StudentContext from "./student-context";
import { Student } from "./types";
import ServerFacade from "./api/ServerFacade";
import RegistrationForm from "./registration/RegistrationForm";

const App = (): ReactElement => {
  const [student, setStudent] = useState<Student>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courses: [],
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      <ServerFacade>
        <RegistrationForm />
      </ServerFacade>
    </StudentContext.Provider>
  );
};

export default App;
