import { Course } from "../types";

interface CourseCardProps {
  course: Course;
  select: () => void;
  isSelected: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  select,
  isSelected,
}) => {
  return (
    <button
      type="button"
      onClick={select}
      className={`rounded-xl text-white h-32 w-48 flex flex-col items-center justify-start p-4 ${
        isSelected ? "bg-blue-500" : "bg-slate-600"
      }`}
    >
      <div className="font-medium">{course.id}</div>
      <div className="font-light">{course.name}</div>
    </button>
  );
};

export default CourseCard;
