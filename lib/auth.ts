// Utility to check if user is authenticated via JWT in header
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for JWT token in localStorage (stub for now)
  const token = localStorage.getItem('jwt_token');
  
  if (!token) return false;
  
  // In a real implementation, you'd verify the token
  // For now, just check if it exists
  return true;
}

// Stub function to get user from token
export function getUserFromToken(): { name: string; email: string } | null {
  if (!isAuthenticated()) return null;
  
  // Stub user data
  return {
    name: 'John Doe',
    email: 'john@example.com'
  };
}
