<template>
  <div class="container">
    <div style="padding: 0 30px;">
      <a-breadcrumb class="bread">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/dest">旅行攻略</a></a-breadcrumb-item>
        <a-breadcrumb-item>北海道冬季旅行全攻略：滑雪、温泉与美食</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="header">
        <div class="tag-list" style="display: flex;">
          <a-tag color="#fef1e7" :style="{ color: '#f97316' }">冬季旅行</a-tag>
          <a-tag color="#e8ecf7" :style="{ color: '#1e40af' }">
            <svg-icon name="position" fill="#1e40af" width="14px" height="14px" />
            <p>日本北海道</p>
          </a-tag>
          <a-tag color="#f3f4f6" :style="{ color: '#4b5563' }">
            <svg-icon name="date" fill="#4b5563" width="14px" height="14px" />
            <p>2025-11-23</p>
          </a-tag>
        </div>
        <h1 class="title">北海道冬季旅行全攻略：滑雪、温泉与美食</h1>
        <div class="author">
          <div class="img-box">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/750bcea98d85fae3269981b9b50a5d46.png"
              alt="">
          </div>
          <div class="info">
            <div class="name">旅行达人小林</div>
            <div class="int">资深旅行博主 · 10年日本旅行经验</div>
          </div>
        </div>
        <div class="option">
          <div class="view-count">
            <svg-icon name="eyes" fill="#4b5563" width="20px" height="20px"></svg-icon>
            <p>12345 阅读</p>
          </div>
          <div class="like-count">
            <svg-icon name="liked" fill="#4b5563" width="20px" height="20px"></svg-icon>
            <p>868 点赞</p>
          </div>
          <div class="collect">
            <svg-icon name="like-select" fill="#4b5563" width="20px" height="20px"></svg-icon>
            <p>666 收藏</p>
          </div>
          <div class="comment-count">
            <svg-icon name="comment2" fill="#4b5563" width="20px" height="20px"></svg-icon>
            <p>1234 评论</p>
          </div>
          <div class="score">
            <svg-icon name="star1" fill="#4b5563" width="20px" height="20px"></svg-icon>
            <p>4.6 评分</p>
          </div>
        </div>
        <div class="content">
          <div style="text-align: center; margin: 30px 0;">
            <img src="https://picsum.photos/id/1036/1200/400" alt="大理洱海全景"
              style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" />
            <p style="color: #777; font-size: 14px; margin-top: 10px;">大理洱海全景：苍山为幕，洱海为镜</p>
          </div>

          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            大理，一座被苍山洱海环绕的古城，藏着中国人最向往的「风花雪月」。这里没有都市的喧嚣，只有青石板路的悠长、洱海的波光粼粼和苍山的云雾缭绕。这份 3 天 2
            晚的深度攻略，带你避开人流，解锁大理的自然与人文之美，适合情侣、闺蜜或独自出行的旅行者。
          </p>

          <h2
            style="color: #2980b9; font-size: 22px; margin: 40px 0 20px; padding-bottom: 10px; border-bottom: 2px solid #f1f1f1;">
            一、行前准备：避坑指南 + 必备物品
          </h2>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">1.1 最佳出行时间</h3>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            大理四季如春，但 <strong>3-5月（春季）</strong> 和 <strong>9-11月（秋季）</strong>
            是最佳时段：春季鲜花盛开（大理大学的樱花、喜洲的油菜花），秋季天高气爽（洱海透明度最高，适合拍照）。避开 6-8 月雨季和节假日高峰（房价翻倍，景点拥挤）。
          </p>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">1.2 必备物品清单</h3>
          <ul style="line-height: 2; margin: 15px 0 20px; padding-left: 25px; color: #333; font-size: 16px;">
            <li>🌤️ 衣物：昼夜温差大（10-20℃），带薄外套（如针织衫、冲锋衣）、长裙（拍照出片）、舒适运动鞋（古城石板路走路多）；</li>
            <li>🧴 防晒：紫外线极强！SPF50+ 防晒霜、遮阳帽、墨镜、防晒衣（物理防晒+化学防晒双重保障）；</li>
            <li>💊 药品：晕车药（环洱海必备）、肠胃药、感冒药、创可贴（山区天气多变）；</li>
            <li>📱 其他：身份证、学生证（部分景点半价）、充电宝、相机（洱海日出日落绝美）、少量现金（部分小店只收现金）。</li>
          </ul>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">1.3 交通方式</h3>
          <table border="1" bordercolor="#ddd"
            style="width: 100%; border-collapse: collapse; margin: 15px 0; text-align: left; font-size: 15px;">
            <thead>
              <tr style="background-color: #f8f9fa;">
                <th style="padding: 12px; font-weight: bold; border: 1px solid #ddd; color: #2c3e50;">交通场景</th>
                <th style="padding: 12px; font-weight: bold; border: 1px solid #ddd; color: #2c3e50;">推荐方式</th>
                <th style="padding: 12px; font-weight: bold; border: 1px solid #ddd; color: #2c3e50;">费用参考</th>
                <th style="padding: 12px; font-weight: bold; border: 1px solid #ddd; color: #2c3e50;">注意事项</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">抵达大理</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">飞机（大理机场）/ 高铁（大理站）</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">高铁：昆明→大理 1.5h，￥145；飞机：￥300-800</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">机场/高铁站有专线大巴到古城，￥15/人</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">环洱海出行</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">电动车（推荐）/ 包车</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">电动车：￥50-80/天；包车：￥300-400/天</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">电动车需戴头盔，电量选 100km 以上的</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">古城内出行</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">步行/共享单车</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">免费/￥2-5/次</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: #333;">古城石板路多，共享单车需注意路况</td>
              </tr>
            </tbody>
          </table>

          <h2
            style="color: #2980b9; font-size: 22px; margin: 40px 0 20px; padding-bottom: 10px; border-bottom: 2px solid #f1f1f1;">
            二、行程安排：3天2晚深度游（慢节奏不赶场）
          </h2>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">
            Day1：大理古城 → 人民路 → 五华楼 → 夜游古城
          </h3>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>上午</strong>：抵达大理后，入住古城内的民宿（推荐南门附近，安静且方便），放下行李后漫步古城。避开主街（洋人街）的商业化，钻进旁边的小巷子，感受青石板路、白族民居的烟火气。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>中午</strong>：在人民路吃一顿白族特色菜，推荐
            <code>酸辣鱼</code>（鲜辣开胃）、<code>土八碗</code>（荤素搭配）、<code>乳扇沙琪玛</code>（当地小吃），人均￥50-80。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>下午</strong>：登五华楼（免费），俯瞰古城全景，天气好时可远眺苍山。之后在人民路的独立书店（如「猫的天空之城」）喝咖啡、看书，享受慢时光。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>晚上</strong>：夜游古城，主街的灯笼亮起，氛围感拉满。可以去洋人街听民谣（推荐「大冰的小屋」「斑马酒吧」），或在南门广场看当地人跳广场舞，感受古城的夜生活。
          </p>

          <div
            style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
            <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.7;">
              <strong>避坑提醒</strong>：古城内的「玉石店」「银器店」谨慎购买，大多是假货；路边拉你去「免费品茶」「低价一日游」的搭讪，直接拒绝！
            </p>
          </div>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">
            Day2：环洱海西线 → 喜洲古镇 → 双廊古镇 → 日落观景
          </h3>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>上午（9:00-12:00）</strong>：从古城出发，租电动车环洱海西线（顺时针方向），第一站到
            <strong>才村码头</strong>，沿洱海生态廊道骑行（免费），欣赏洱海日出后的波光粼粼，沿途有很多小众观景台，可随时停车拍照。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>中午（12:00-14:00）</strong>：抵达喜洲古镇，在四方街吃「喜洲粑粑」（咸甜两种口味，￥5/个），推荐「现烤乳扇」（奶香浓郁）。饭后逛喜洲古镇的白族民居建筑群（如「严家大院」，门票￥25），感受白族扎染工艺（可体验扎染制作，￥50-100/件）。
          </p>

          <div style="text-align: center; margin: 20px 0;">
            <img src="https://picsum.photos/id/1019/800/500" alt="喜洲古镇油菜花田"
              style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" />
            <p style="color: #777; font-size: 14px; margin-top: 10px;">喜洲古镇的油菜花田（春季限定）</p>
          </div>

          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>下午（14:30-17:00）</strong>：继续沿洱海前行，经过「海舌公园」（免费，洱海最南端的半岛）、「挖色码头」（网红拍照点），最终抵达双廊古镇。在双廊的海边咖啡馆坐一坐，吹吹海风，远眺苍山。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>晚上（17:30-19:00）</strong>：从双廊出发，前往「理想邦旅游小镇」（免费），这里被称为「大理圣托里尼」，白色建筑群搭配蓝色洱海，是看日落的绝佳地点。日落后返回古城（电动车续航足够，或提前联系包车接回）。
          </p>

          <h3 style="color: #34495e; font-size: 18px; margin: 25px 0 15px;">
            Day3：苍山徒步 → 寂照庵 → 返程
          </h3>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>上午（8:30-12:00）</strong>：前往苍山景区，推荐「感通索道」（单程￥80，往返￥120），索道上站抵达后，沿玉带路徒步（难度低，风景优美），沿途经过清碧溪、七龙女池等景点，呼吸山林间的新鲜空气。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>中午（12:00-13:30）</strong>：徒步至「寂照庵」（免费），这里是网红「多肉寺庙」，庵内种满了各种多肉植物，环境清幽。可以在庵内吃素食斋饭（￥20/人，自助形式，按需取餐不浪费），味道清淡可口。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            <strong>下午（14:00 后）</strong>：从苍山返程，在古城内购买伴手礼（推荐「大理雪梨膏」「白族扎染布」），之后根据航班/高铁时间返程，结束愉快的大理之旅。
          </p>

          <h2
            style="color: #2980b9; font-size: 22px; margin: 40px 0 20px; padding-bottom: 10px; border-bottom: 2px solid #f1f1f1;">
            三、住宿推荐：高性价比民宿清单
          </h2>
          <ul style="line-height: 2; margin: 15px 0 20px; padding-left: 25px; color: #333; font-size: 16px;">
            <li>🏡 <strong>大理古城内民宿</strong>：推荐「大理古城南门·闲庭民宿」，庭院式设计，含早餐，步行到主街5分钟，人均￥150-200/晚；</li>
            <li>🌊 <strong>洱海边民宿</strong>：推荐「双廊·半岛云端海景客栈」，一线海景房，阳台可看洱海日出，人均￥300-500/晚；</li>
            <li>💰 <strong>预算友好型</strong>：推荐「大理大学附近青旅」，性价比高，含公共厨房和露台，适合独自旅行，人均￥50-80/晚。</li>
          </ul>

          <h2
            style="color: #2980b9; font-size: 22px; margin: 40px 0 20px; padding-bottom: 10px; border-bottom: 2px solid #f1f1f1;">
            四、美食汇总：不容错过的大理味道
          </h2>
          <pre
            style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0; font-size: 16px; color: #333; line-height: 1.8;">
1. 白族特色菜：酸辣鱼、土八碗、黄焖鸡、水性杨花（洱海特产蔬菜）
2. 街头小吃：喜洲粑粑、乳扇沙琪玛、现烤乳扇、凉鸡米线、豌豆粉
3. 饮品推荐：大理啤酒（风花雪月系列）、鲜花饼（现烤玫瑰味最佳）、雪梨膏
4. 美食聚集地：大理古城人民路、喜洲古镇四方街、双廊古镇美食街
</pre>

          <h2
            style="color: #2980b9; font-size: 22px; margin: 40px 0 20px; padding-bottom: 10px; border-bottom: 2px solid #f1f1f1;">
            五、总结：大理旅行的意义
          </h2>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333;">
            大理的美，不在于打卡多少景点，而在于慢下来感受生活。在洱海边骑行、在古城小巷漫步、在苍山徒步吸氧、在寂照庵吃一顿斋饭……这些瞬间，会让你暂时逃离都市的浮躁，找到内心的平静。
          </p>
          <p style="line-height: 1.8; margin: 15px 0; font-size: 16px; color: #333; font-style: italic;">
            愿你带着这份攻略，奔赴一场风花雪月的约会，在大理遇见更好的自己。
          </p>

          <div
            style="text-align: center; margin: 40px 0 20px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #2c3e50; font-size: 18px; font-weight: 600;">
              旅行小贴士：尊重当地文化，不乱扔垃圾，保护洱海生态环境，做文明旅行者～
            </p>
          </div>
        </div>
        <div class="btn">
          <div class="like" :class="{ active: isLike }" @click="handleLike(true)">
            <svg-icon :name="isLike ? 'liked' : 'like'" :fill="isLike ? '#fff' : '#374151'" width="18"
              height="18px"></svg-icon>
            <p>觉得有用</p>
          </div>
          <div class="dislike" :class="{ active: isDislike }" @click="handleLike(false)">
            <svg-icon :name="isDislike ? 'liked' : 'like'" :fill="isDislike ? '#fff' : '#374151'" width="18"
              height="18px"></svg-icon>
            <p>觉得没用</p>
          </div>
          <div class="collect" :class="{ collectActive: isCollect }" @click="handleCollect">
            <svg-icon :name="isCollect ? 'like-select' : 'like-noselect'" :fill="isCollect ? '#fff' : '#374151'"
              width="18" height="18px"></svg-icon>
            <p>收藏攻略</p>
          </div>
          <div class="collect" :class="{ warningActive: isReport }" @click="handleReport">
            <svg-icon :name="isReport ? 'warning' : 'warning-line'" :fill="isReport ? '#fff' : '#374151'" width="18"
              height="18px"></svg-icon>
            <p>举报攻略</p>
          </div>
        </div>
      </div>
      <div class="recommend">
        <h3>猜你喜欢</h3>
        <div class="list">
          <div class="item" v-for="item in 4" @click="message.success('查看详情')">
            <div class="img-box">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/f8ce4c61e0b0036e454032ca9a9e1bb1.png"
                alt="">
              <div class="mask">
                <a-tag color="#ed7422">冬季旅行</a-tag>
              </div>
            </div>
            <div class="travel-info">
              <p class="title">京都冬季旅行攻略：古寺雪景与传统文化体验</p>
              <div class="content">探索京都冬季的宁静之美，古寺与雪景交相辉映，体验传统茶道和温泉文化。</div>
              <div class="bottom">
                <div class="author">
                  <img
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/3dffa545e4abf46b12619330cd373588.png"
                    alt="">
                  <div class="name">久梦辰</div>
                </div>
                <div class="time">2025-11-23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="top">
          <h3>用户评论(666)</h3>
          <div class="select">
            <p>筛选:</p>
            <a-select style="width: 120px;"></a-select>
          </div>
        </div>
        <div class="send-comment">
          <div class="s-top">
            <img
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/e0f26f427974e75dbe20e1df2178ec51.png"
              alt="">
            <a-textarea placeholder="请输入评论..." size="large"></a-textarea>
          </div>
          <div class="s-bottom">
            <div class="send-btn">发表评论</div>
          </div>
        </div>
        <div class="comment-box">
          <div class="item" v-for="(item, index) in 6">
            <div class="comment-header">
              <div class="comment-user">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/e0f26f427974e75dbe20e1df2178ec51.png"
                  alt="">
                <div class="info">
                  <div class="name">李小明</div>
                  <div class="time">2025-11-17 · 5天4晚自由行</div>
                </div>
              </div>
              <div class="star">
                <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
                <svg-icon name="star1" fill="#facc15" width="16px" height="16px"></svg-icon>
              </div>
            </div>
            <div class="comment-content">
              上海给我留下了深刻的印象，这座城市完美融合了传统与现代。外滩的夜景令人叹为观止，迪士尼乐园让我找回了童年的快乐，豫园的传统建筑和小吃也非常有特色。强烈推荐大家来体验这座魔都的魅力！</div>
            <div class="comment-imgbox">
              <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" :width="100"
                :height="100" />
              <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" :width="100"
                :height="100" />
            </div>
            <div class="user-option">
              <div class="like">
                <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                <p>有用(18)</p>
              </div>
              <div class="dislike">
                <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                <p>没用(18)</p>
              </div>
              <p>·</p>
              <div class="reply" @click="replyIndex = 'parent' + index">
                <svg-icon name="comment1" fill="#919aa5" width="14px" height="14px"></svg-icon>
                <p>回复</p>
              </div>
            </div>
            <div class="reply-box" v-if="replyIndex === 'parent' + index">
              <a-textarea placeholder="写下你的回复..." allow-clear />
              <div class="btn">
                <a-button size="small" @click="handleReplyIndex('parent' + index)">取消</a-button>
                <a-button type="primary" size="small">提交回复</a-button>
              </div>
            </div>
            <div class="sec-comment">
              <p class="look" @click="handleLookComment(index)">{{
                LookCommentIndex === index ? '收起回复' : '查看1条回复' }}</p>
              <div class="sec-box" v-if="LookCommentIndex === index">
                <div class="sec-item" v-for="(item, index) in 4">
                  <div class="item-left">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/76ebfd3baddbe5a5165b277b4fc5ec20.png"
                      alt="">
                  </div>
                  <div class="item-right">
                    <div class="item-info">
                      <div class="name">陈美势->久梦辰</div>
                      <div class="comment-text">推荐你下次试试南翔小笼包，就在豫园附近，非常地道！</div>
                      <div class="user-option" style="margin-top: 10px;">
                        <div class="like">
                          <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                          <p>有用(18)</p>
                        </div>
                        <div class="dislike">
                          <svg-icon name="like" fill="#919aa5" width="14px" height="14px"></svg-icon>
                          <p>没用(18)</p>
                        </div>
                        <p>·</p>
                        <div class="reply" @click="replyIndex = 'child' + index">
                          <svg-icon name="comment1" fill="#919aa5" width="14px" height="14px"></svg-icon>
                          <p>回复</p>
                        </div>
                      </div>
                      <div class="reply-box" v-if="replyIndex === 'child' + index">
                        <a-textarea placeholder="写下你的回复..." allow-clear />
                        <div class="btn">
                          <a-button size="small" @click="handleReplyIndex('child' + index)">取消</a-button>
                          <a-button type="primary" size="small">提交回复</a-button>
                        </div>
                      </div>
                    </div>
                    <div class="item-time">2025-11-18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a-pagination v-model:current="commentCurrentPage" :total="50" show-less-items style="margin: 0 auto;" />
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { onMounted, onUnmounted, ref } from 'vue'
import FooterBar from '@/components/FooterBar/index.vue'
const props = defineProps(['headerRef']);
const isLike = ref<boolean>(false);
const isDislike = ref<boolean>(false);
const isCollect = ref<boolean>(false);
const isReport = ref<boolean>(false)
const LookCommentIndex = ref<number>(-1);
const replyIndex = ref('1');
const commentCurrentPage = ref<number>(1)
const handleLookComment = (id: number) => {
  if (LookCommentIndex.value == id) {
    LookCommentIndex.value = -1
  } else {
    LookCommentIndex.value = id
  }
}
const handleReplyIndex = (id: string) => {
  if (replyIndex.value === id) {
    replyIndex.value = ''
  } else {
    replyIndex.value = id;
  }
}
const handleLike = (flag: boolean) => {
  if (flag) {
    isDislike.value = false;
    isLike.value = !isLike.value;
    if (isLike.value) {
      message.success('点赞')
    } else {
      message.success('取消点赞')
    }
  } else {
    isDislike.value = !isDislike.value;
    isLike.value = false;
    if (isDislike.value) {
      message.success('点踩')
    } else {
      message.success('取消点踩')
    }
  }
}
const handleCollect = () => {
  isCollect.value = !isCollect.value;
  if (isCollect.value) {
    message.success('收藏成功');
  } else {
    message.success('取消收藏成功')
  }
}
const handleReport = () => {
  if (isReport.value) return;
  isReport.value = true;
}
onMounted(() => {
  props.headerRef.style.backgroundColor = 'rgba(38, 50, 56,0.95)'
})
onUnmounted(() => {
  props.headerRef.style.backgroundColor = 'transparent'
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding-top: 80px;

  .bread {
    padding: 20px 0;
  }

  .header {
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    .tag-list {
      display: flex;
      align-items: center;
      gap: 20px;

      span {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 50px;
      }
    }

    .title {
      font-size: 36px;
      color: #111827;
      font-weight: bold;
      margin: 20px 0;
    }

    .author {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 30px;

      .img-box {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      .info {
        .name {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .int {
          color: #6b7280;
          font-size: 14px;
        }
      }
    }

    .option {
      display: flex;
      gap: 25px;
      align-items: center;
      margin-bottom: 50px;

      div {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #4b5563;
      }

    }

    .btn {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 50px;

      &>div {
        width: fit-content;
        height: fit-content;
        border: 1px solid #d1d5db;
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 5px;
        gap: 5px;
        cursor: pointer;

        &:hover {
          background-color: #fafafa;
        }
      }
    }

    .active {
      background-color: #1e40af;
      color: #fff;
      border-color: transparent;

      &:hover {
        background-color: #3453b7 !important;
      }
    }

    .collectActive {
      background-color: #f53f3f;
      color: #fff;
      border-color: transparent;

      &:hover {
        background-color: #f53f5a !important;
      }
    }

    .warningActive {
      background-color: #ffc107;
      color: #fff;
      border-color: transparent;

      &:hover {
        background-color: #ffb300 !important;
      }
    }
  }

  .recommend {
    margin: 30px 0;

    h3 {
      font-weight: bold;
      color: #111827;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .list {
      display: flex;
      gap: 20px;

      .item {
        position: relative;
        border-radius: 10px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        transition: all .4s;

        .img-box {
          width: 100%;
          height: 200px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
          }

          .mask {
            width: 100%;
            height: 100%;
            padding: 15px;
            position: absolute;
            top: 0;

            span {
              border-radius: 50px;
            }
          }
        }

        .travel-info {
          padding: 20px;

          .title {
            width: 100%;
            font-weight: bold;
            font-size: 18px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 15px;
            color: #111827;
          }

          .content {
            color: #4b5563;
            width: 100%;
            line-height: 20px;
            font-size: 15px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 15px;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .author {
              display: flex;
              align-items: center;
              gap: 10px;

              img {
                width: 30px;
                height: 30px;
                border-radius: 100%;
              }

              .name {
                font-size: 14px;
              }
            }

            .time {
              font-size: 12px;
              color: #6b7280;
            }
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px #ccc;
          cursor: pointer;

          .travel-info {
            .title {
              color: #1e88e5 !important;
            }
          }
        }
      }
    }
  }

  .comment {
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 100px;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-weight: bold;
        color: #111827;
        font-size: 24px;
        margin-bottom: 20px;
      }

      .select {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .send-comment {
      width: 100%;
      margin: 30px 0;

      .s-top {
        display: flex;
        gap: 20px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 100%;
        }

        textarea {
          height: 100px;
        }
      }

      .s-bottom {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        .send-btn {
          background-color: #1e40af;
          padding: 10px 15px;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background-color: #3453b7;
          }
        }
      }
    }

    .comment-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;

      .item {
        padding: 10px 0;
        border-radius: 10px;

        .comment-header {
          display: flex;
          justify-content: space-between;

          .comment-user {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;

            img {
              width: 50px;
              height: 50px;
              border-radius: 100%;
            }

            .info {
              .time {
                color: #86909c;
                font-size: 12px;
                margin-top: 10px;
              }
            }
          }

          .star {
            display: flex;
            align-items: center;
            gap: 3px;
          }
        }

        .comment-content {
          color: #4e5969;
          line-height: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .comment-imgbox {
          display: flex;
          align-items: center;
          gap: 15px;

          :deep(.ant-image-img) {
            border-radius: 10px;
          }

          :deep(.ant-image) {
            border-radius: 10px;
          }

          :deep(.ant-image-mask) {
            border-radius: 10px;
          }
        }

        .user-option {
          display: flex;
          align-items: center;
          font-size: 12px;
          gap: 5px;
          color: #919aa5;
          margin-top: 15px;

          .like {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;

            &:hover {
              color: #165dff;
            }
          }

          .dislike {
            margin-left: 10px;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;

            &:hover {
              color: #165dff;
            }
          }

          .reply {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;

            &:hover {
              color: #165dff;
            }
          }
        }

        .reply-box {
          margin-top: 20px;

          .btn {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
          }
        }

        .sec-comment {
          padding-left: 20px;
          border-left: 2px solid #f3f4f6;
          margin-top: 20px;

          .look {
            color: #165dff;
            font-size: 12px;
            cursor: pointer;
          }

          .sec-box {
            margin-top: 20px;

            .sec-item {
              display: flex;
              gap: 10px;
              // align-items: center;
              background-color: #f9fafb;
              padding: 20px;

              .item-left {
                width: 40px;
                height: 40px;

                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 100%;
                }
              }

              .item-right {
                flex: 1;
                display: flex;
                justify-content: space-between;

                .item-info {
                  flex: 1;

                  .name {
                    font-size: 14px;
                    margin-bottom: 5px;
                  }

                  .comment-text {
                    font-size: 12px;
                    color: #4e5969;
                  }
                }

                .item-time {
                  font-size: 12px;
                  color: #86909c;
                  align-self: flex-start;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
