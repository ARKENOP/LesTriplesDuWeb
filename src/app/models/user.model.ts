export interface User {
  username: string;
  email: string;
  password: string;
  profilePicture?: string; // Optionnel
  bio?: string; // Optionnel
  createdAt?: Date; // Optionnel
}
