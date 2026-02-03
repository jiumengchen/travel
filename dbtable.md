### 用户表users
user_id           INT PRIMARY KEY AUTO_INCREMENT
username          VARCHAR(50) UNIQUE NOT NULL
email             VARCHAR(100) UNIQUE NOT NULL
password_hash     VARCHAR(255) NOT NULL
full_name         VARCHAR(100)
phone             VARCHAR(20)
birth_date        DATE
gender            ENUM('M', 'F', 'Other')
avatar_url        VARCHAR(500)
city              VARCHAR(50)
registration_date DATETIME DEFAULT CURRENT_TIMESTAMP
last_login        DATETIME
preferred_language VARCHAR(10)
status            ENUM('active', 'inactive', 'banned') DEFAULT 'active'

### 用户偏好表user_preferences
preference_id     INT PRIMARY KEY AUTO_INCREMENT
user_id           INT FOREIGN KEY REFERENCES users(user_id)
travel_style      ENUM('budget', 'luxury', 'backpacker', 'family', 'adventure')
preferred_season  ENUM('spring', 'summer', 'autumn', 'winter')
activity_level    ENUM('relaxed', 'moderate', 'active', 'extreme')
food_preference   ENUM('local', 'international', 'vegetarian', 'vegan', 'halal')
accommodation_type ENUM('hotel', 'hostel', 'homestay', 'resort', 'camping')
budget_range_low  DECIMAL(10,2)
budget_range_high DECIMAL(10,2)
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME

### 目的地表destinations
destination_id    INT PRIMARY KEY AUTO_INCREMENT
name              VARCHAR(100) NOT NULL
country           VARCHAR(50) NOT NULL
region            VARCHAR(50)
city              VARCHAR(50)
description       TEXT
latitude          DECIMAL(10,8)
longitude         DECIMAL(11,8)
best_season       VARCHAR(100)
avg_temperature   VARCHAR(50)
popularity_score  DECIMAL(5,2) DEFAULT 0
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME

### 景点表attractions
attraction_id     INT PRIMARY KEY AUTO_INCREMENT
destination_id    INT FOREIGN KEY REFERENCES destinations(destination_id)
name              VARCHAR(200) NOT NULL
category          ENUM('historical', 'natural', 'cultural', 'religious', 'entertainment', 'shopping', 'food')
description       TEXT
address           VARCHAR(500)
latitude          DECIMAL(10,8)
longitude         DECIMAL(11,8)
opening_hours     TEXT
entry_fee         DECIMAL(10,2)
estimated_time    INT  -- 分钟
accessibility     ENUM('excellent', 'good', 'limited', 'poor')
rating_avg        DECIMAL(3,2) DEFAULT 0
review_count      INT DEFAULT 0
featured_image    VARCHAR(500)
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP

### 酒店住宿表accommodations
accommodation_id  INT PRIMARY KEY AUTO_INCREMENT
destination_id    INT FOREIGN KEY REFERENCES destinations(destination_id)
name              VARCHAR(200) NOT NULL
type              ENUM('hotel', 'hostel', 'resort', 'bnb', 'apartment', 'villa')
star_rating       INT CHECK (star_rating BETWEEN 1 AND 5)
address           VARCHAR(500)
latitude          DECIMAL(10,8)
longitude         DECIMAL(11,8)
price_range_low   DECIMAL(10,2)
price_range_high  DECIMAL(10,2)
amenities         JSON  -- 存储设施列表
rating_avg        DECIMAL(3,2) DEFAULT 0
review_count      INT DEFAULT 0
contact_phone     VARCHAR(20)
contact_email     VARCHAR(100)
website           VARCHAR(500)

### 用户评分表ratings
rating_id         INT PRIMARY KEY AUTO_INCREMENT
user_id           INT FOREIGN KEY REFERENCES users(user_id)
target_type       ENUM('attraction', 'accommodation', 'restaurant', 'destination')
target_id         INT  -- 对应不同表的ID
rating_value      DECIMAL(2,1) CHECK (rating_value BETWEEN 1 AND 5)
comment           TEXT
visit_date        DATE
photos            JSON  -- 图片URL数组
helpful_count     INT DEFAULT 0
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME


### 用户浏览记录表browsing_history
history_id        INT PRIMARY KEY AUTO_INCREMENT
user_id           INT FOREIGN KEY REFERENCES users(user_id)
target_type       ENUM('destination', 'attraction', 'accommodation', 'itinerary')
target_id         INT
action_type       ENUM('view', 'save', 'like', 'share')
view_duration     INT  -- 秒数
search_keywords   VARCHAR(500)
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP

### 推荐结果表recommendations
recommendation_id INT PRIMARY KEY AUTO_INCREMENT
user_id           INT FOREIGN KEY REFERENCES users(user_id)
recommendation_type ENUM('destination', 'attraction', 'itinerary', 'bundle')
recommendation_data JSON  -- 存储推荐内容
algorithm_type    VARCHAR(50)  -- 使用的推荐算法
confidence_score  DECIMAL(5,4)
context_data      JSON  -- 推荐时的上下文信息
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
viewed            BOOLEAN DEFAULT FALSE
selected          BOOLEAN DEFAULT FALSE
feedback_rating   INT CHECK (feedback_rating BETWEEN 1 AND 5)

### 用户相似度表user_similarities
similarity_id     INT PRIMARY KEY AUTO_INCREMENT
user_a_id         INT FOREIGN KEY REFERENCES users(user_id)
user_b_id         INT FOREIGN KEY REFERENCES users(user_id)
similarity_score  DECIMAL(5,4)
similarity_type   VARCHAR(50)  -- 计算相似度的维度
calculated_at     DATETIME DEFAULT CURRENT_TIMESTAMP

### 标签/分类表tags
tag_id            INT PRIMARY KEY AUTO_INCREMENT
tag_name          VARCHAR(50) UNIQUE NOT NULL
tag_type          ENUM('destination', 'attraction', 'activity')
description       TEXT
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP

### 实体标签关联表 (entity_tags)
entity_tag_id     INT PRIMARY KEY AUTO_INCREMENT
entity_type       ENUM('destination', 'attraction', 'accommodation')
entity_id         INT
tag_id            INT FOREIGN KEY REFERENCES tags(tag_id)
weight            DECIMAL(3,2) DEFAULT 1.0
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP

### 旅游团表 (tour_groups)
tour_id           INT PRIMARY KEY AUTO_INCREMENT
tour_code         VARCHAR(50) UNIQUE NOT NULL
name              VARCHAR(200) NOT NULL
destination_id    INT FOREIGN KEY REFERENCES destinations(destination_id)
description       TEXT
duration_days     INT NOT NULL
start_date        DATE NOT NULL
end_date          DATE NOT NULL
departure_city    VARCHAR(100)
max_group_size    INT DEFAULT 20
current_bookings  INT DEFAULT 0
guide_info        TEXT
itinerary_summary JSON  -- 简要行程安排
inclusions        JSON  -- 包含项目
exclusions        JSON  -- 不包含项目
status            ENUM('draft', 'active', 'full', 'completed', 'cancelled') DEFAULT 'draft'
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME

### 特价旅游产品表 (tour_packages)
package_id        INT PRIMARY KEY AUTO_INCREMENT
package_type      ENUM('tour', 'hotel', 'attraction', 'combo') NOT NULL
related_id        INT  -- 关联tour_id或hotel_id等
title             VARCHAR(200) NOT NULL
description       TEXT
original_price    DECIMAL(10,2) NOT NULL
discount_price    DECIMAL(10,2) NOT NULL
discount_rate     DECIMAL(5,2)  -- 折扣百分比
stock_quantity    INT  -- 库存数量
sold_quantity     INT DEFAULT 0
booking_start     DATETIME NOT NULL
booking_end       DATETIME NOT NULL
travel_start      DATE  -- 旅行开始日期
travel_end        DATE  -- 旅行结束日期
min_group_size    INT DEFAULT 1  -- 成团人数要求
current_group_size INT DEFAULT 0
group_deadline    DATETIME  -- 成团截止时间
cover_image       VARCHAR(500)
images            JSON  -- 图片数组
terms_conditions  TEXT
status            ENUM('upcoming', 'active', 'sold_out', 'expired', 'cancelled') DEFAULT 'upcoming'
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME

### 订单主表 (orders)
order_id          INT PRIMARY KEY AUTO_INCREMENT
order_number      VARCHAR(50) UNIQUE NOT NULL  -- 如: TR20240101123456
user_id           INT FOREIGN KEY REFERENCES users(user_id)
order_type        ENUM('tour', 'hotel', 'attraction', 'combo', 'custom') NOT NULL
total_amount      DECIMAL(10,2) NOT NULL
discount_amount   DECIMAL(10,2) DEFAULT 0
final_amount      DECIMAL(10,2) NOT NULL
currency          VARCHAR(3) DEFAULT 'CNY'
order_status      ENUM('pending', 'confirmed', 'paid', 'processing', 'completed', 'cancelled', 'refunded') DEFAULT 'pending'
payment_status    ENUM('unpaid', 'partial', 'paid', 'refunded') DEFAULT 'unpaid'
traveler_count    INT DEFAULT 1
special_requests  TEXT
contact_name      VARCHAR(100) NOT NULL
contact_phone     VARCHAR(20) NOT NULL
contact_email     VARCHAR(100) NOT NULL
emergency_contact VARCHAR(500)
booking_source    ENUM('website', 'app', 'wechat', 'agent') DEFAULT 'website'
ip_address        VARCHAR(45)
user_agent        VARCHAR(500)
created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
updated_at        DATETIME
confirmed_at      DATETIME
completed_at      DATETIME
cancelled_at      DATETIME