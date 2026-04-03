/**
 * Wrapper around fetch that automatically attaches the JWT token
 * stored in localStorage to every request.
 */
export function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const token = localStorage.getItem('kairoly_token');
    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    });
}
