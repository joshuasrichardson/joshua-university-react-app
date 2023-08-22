export interface Course {
  id: string;
  name: string;
  description: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  courses: Course[];
}
