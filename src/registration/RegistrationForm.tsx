import { ReactElement, useState } from "react";
import { Course } from "../types";
import SubjectChooser from "./SubjectChooser";
import Loading from "./Loading";
import CourseChooser from "./CourseChooser";

const RegistrationForm = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();

  const CurrentStep = (): ReactElement => {
    if (isLoading) return <Loading />;
    if (courses.length)
      return (
        <CourseChooser
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      );
    return (
      <SubjectChooser setIsLoading={setIsLoading} setCourses={setCourses} />
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <CurrentStep />
    </div>
  );
};

export default RegistrationForm;
