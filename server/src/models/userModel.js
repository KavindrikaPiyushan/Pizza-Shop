const db = require('../config/db');

class User{
    static async findByEmail(email){
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query,[email]);
        return rows[0];
    }

    static async create(email, hashedPassword,role){
        const query = 'INSERT INTO users (email, password, role) VALUES (?,?,?)'; 
        const [result] = await db.execute(query,[email,hashedPassword,role]);
        return result.insertId;
    }

    static async updateRefreshToken(userId, refreshToken){
        const query = 'UPDATE users SET refresh_token = ? WHERE id = ?';
        await db.execute(query,[refreshToken,userId]);
    }
}

module.exports = User;

