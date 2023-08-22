import { Dispatch, SetStateAction, useContext } from "react";
import ServerFacadeContext from "../api/server-facade-context";
import { Course } from "../types";
import CourseCard from "./CourseCard";
import Button from "../ju-ui/Button";

interface CourseChooserProps {
  courses: Course[];
  selectedCourse?: Course;
  setSelectedCourse: Dispatch<SetStateAction<Course | undefined>>;
}

const CourseChooser: React.FC<CourseChooserProps> = ({
  courses,
  selectedCourse,
  setSelectedCourse,
}) => {
  const { post } = useContext(ServerFacadeContext);

  const addCourse = () => {};

  return (
    <div className="flex flex-col items-center mt-16 gap-12">
      <h1 className="text-2xl text-blue-500 font-medium">
        Choose a course to begin
      </h1>
      <div className="flex flex-wrap gap-8">
        {courses.map((course) => (
          <CourseCard
            course={course}
            isSelected={course.id === selectedCourse?.id}
            select={() => setSelectedCourse(course)}
          />
        ))}
      </div>
      <Button isDisabled={!selectedCourse} onClick={addCourse}>
        Continue
      </Button>
    </div>
  );
};

export default CourseChooser;
