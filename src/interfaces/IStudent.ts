export interface IStudent {
  name: string;
  email: string;
  password: string;
  profile_picture: string;
}

export interface IStudentUpdate {
  name?: string;
  email?: string;
  password?: string;
  profile_picture?: string;
}
