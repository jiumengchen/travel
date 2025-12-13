const OpenAI = require("openai");
const { apiKey } = require("../config");

exports.aichat = async (content, res) => {
  try {
    const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey
    })

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); 


    const response = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [{role:'system',content:'你的名字是AI旅行咨询助手，你能为用户解决旅游方面的问题，包括但不限于旅游推荐，旅游规划等等'},
        {role:'user',content}
    ],
    stream: true,
  });
   for await (const chunk of response) {
      const delta = chunk.choices[0]?.delta?.content || "";
      if (delta) {
        res.write(delta);
      }
    }
  } catch (error) {
    console.error("AI咨询失败:", error);
    return res.status(500).json({
      code: 500,
      message: "服务器内部错误",
    });
  }
};
