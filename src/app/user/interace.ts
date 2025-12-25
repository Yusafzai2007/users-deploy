// Interface for a single user
export interface User {
  _id: string;
  userName: string;
  email: string;
  userImg: string;
  role: string;
  status: string;
  createat: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Interface for API response
export interface UsersApiResponse {
  data: string;
  message: User[]; // Array of users
  statuscode: number;
  success: boolean;
}
