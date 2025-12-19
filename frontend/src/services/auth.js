/**
 * Mock Authentication Service
 * Simulates a backend by storing users in localStorage ('go_annapurna_users')
 * and adding artificial network delay.
 */

const USERS_KEY = 'go_annapurna_users';
const DELAY_MS = 800; // Simulate network latency

export const authService = {
    login: async (email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
                    const user = users.find((u) => u.email === email && u.password === password);

                    if (user) {
                        const { password, ...userWithoutPassword } = user;
                        resolve({
                            success: true,
                            user: userWithoutPassword,
                            message: 'Login successful',
                        });
                    } else {
                        resolve({
                            success: false,
                            message: 'Invalid email or password',
                        });
                    }
                } catch (error) {
                    resolve({ success: false, message: 'Login service error' });
                }
            }, DELAY_MS);
        });
    },

    signup: async (userData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

                    if (users.find((u) => u.email === userData.email)) {
                        resolve({
                            success: false,
                            message: 'User already exists',
                        });
                        return;
                    }

                    const newUser = { ...userData, id: Date.now() };
                    users.push(newUser);
                    localStorage.setItem(USERS_KEY, JSON.stringify(users));

                    resolve({
                        success: true,
                        user: newUser,
                        message: 'User registered successfully',
                    });
                } catch (error) {
                    resolve({ success: false, message: 'Signup service error' });
                }
            }, DELAY_MS);
        });
    },
};
