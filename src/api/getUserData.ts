// Users API Endpoint: https://dummyjson.com/c/4a70-0a45-4827-a0e4

export interface User {
  id: number;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string | null;
  gender: 'M' | 'F';
  location: string;
  role: 'Member' | 'Admin' | 'Owner';
  isActive: boolean;
  image: string;
}

/**
 * Normalizes the user data from the API.
 * @param data - The raw user data from the API
 * @returns The normalized user data
 */
export function normalizeUserData(data: User[]): User[] {
  return data;
}

/**
 * Fetches the user data from the API and returns it.
 * @returns The raw user data from the API
 */
export async function getUserData(): Promise<User[]> {
  // Fetch the user data from the API

  return normalizeUserData([]);
}
