const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret");
const query = require("../db/db");
const formatDate = require("../utils/formatDate");
const bcrypt = require("bcryptjs");
exports.login = async (data, res) => {
  try {
    const sql = "select * from users where email=?;";
    let users = await query(sql, [data.email]);

    if (users.length == 0) {
      return res.status(401).json({
        code: 401,
        message: "邮箱或密码错误",
      });
    }
    users = users[0];
    const isPassword = bcrypt.compareSync(data.password, users.password);
    if (!isPassword) {
      return res.status(401).json({
        code: 401,
        message: "邮箱或密码错误",
      });
    }
    if (users.status == 1) {
      return res.status(403).json({
        code: 403,
        message: "账号已禁用,请联系管理员",
      });
    }
    const token = jwt.sign(
      {
        userId: users.user_id,
        email: users.email,
        role: users.role,
      },
      jwtSecret,
      { expiresIn: "24h" }
    );
    const updateSql = "update users set last_login_time=? where email=?;";
    await query(updateSql, [formatDate(new Date()), email]);
    res.json({
      code: 200,
      message: "登录成功",
      data: {
        token,
        userInfo: {
          userId: users.user_id,
          username: users.username,
          email: users.email,
          role: users.role,
          avatar: users.avatar,
        },
      },
    });
  } catch (error) {
    console.error("登录失败:", error);
    return res.status(500).json({
      code: 500,
      message: "服务器内部错误",
    });
  }
};

exports.register = async (data, res) => {
  try {
    const sql = "select * from users where email=?;";
    const users = await query(sql, [data.email]);
    if (users.length > 0) {
      return res.status(401).json({
        code: 401,
        message: "该邮箱已被注册",
      });
    }
    password = bcrypt.hashSync(data.password, 10);
    const registerSql =
      "insert into users(username,phone,email,password) values (?,?,?,?);";
    await query(registerSql, [data.name, data.phone, data.email, data.password]);
    res.json({
      code: 200,
      message: "注册成功",
    });
  } catch (error) {
    console.error("注册失败:", error);
    return res.status(500).json({
      code: 500,
      message: "服务器内部错误",
    });
  }
};
