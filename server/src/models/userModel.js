const db = require('../config/db');

class User {
    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query, [email]);

        if (rows.length === 0) {
            return null; // Explicitly return null if no user is found
        }

        return rows[0]; 
    }

    static async create(name, email, hashedPassword, role) {
        const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(query, [name, email, hashedPassword, role]);
        return result.insertId;
    }

    static async updateRefreshToken(userId, refreshToken) {
        const query = 'UPDATE users SET refresh_token = ? WHERE id = ?';
        await db.execute(query, [refreshToken, userId]);
    }
}

module.exports = User;
