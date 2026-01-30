// Utility to check if user is authenticated via JWT in header
export function isAuthenticated() {
    if (typeof window === 'undefined') return false;
    
    // Check for JWT token in localStorage (stub for now)
    const token = localStorage.getItem('jwt_token');

    console.log(token)

    if (!token) return false;
    
    // In a real implementation, you'd verify the token
    // For now, just check if it exists
    return true;
}

// Stub function to get user from token
export function getUserFromToken() {
    if (!isAuthenticated()) return null;
    
    // Stub user data
    return {
        name: 'John Doe',
        email: 'john@example.com'
    };
}
