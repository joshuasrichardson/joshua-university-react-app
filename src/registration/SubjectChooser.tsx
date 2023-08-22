import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Course } from "../types";
import ServerFacadeContext from "../api/server-facade-context";
import Button from "../ju-ui/Button";

interface SubjectChooserProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setCourses: Dispatch<SetStateAction<Course[]>>;
}

const SubjectChooser: React.FC<SubjectChooserProps> = ({
  setIsLoading,
  setCourses,
}) => {
  const { get } = useContext(ServerFacadeContext);

  const [subject, setSubject] = useState("");

  return (
    <div className="flex flex-col items-center mt-16 gap-4">
      <h1 className="text-2xl text-blue-500 font-medium">
        Welcome to Joshua University
      </h1>
      <label htmlFor="subject" className="text-lg">
        What would you like to learn?
      </label>
      <input
        className="border border-gray-500 rounded-md px-2 w-60"
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Button
        isDisabled={!subject}
        onClick={() => {
          setIsLoading(true);
          get("/api/generate-courses", { subject }).then((data) => {
            const newCourses = (data as { courses: Course[] }).courses;
            console.log(newCourses);
            setCourses(newCourses);
            setIsLoading(false);
          });
        }}
      >
        Find Courses
      </Button>
    </div>
  );
};

export default SubjectChooser;
