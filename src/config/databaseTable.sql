CREATE TABLE user_info (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(64) DEFAULT '',
  user_email VARCHAR(64) DEFAULT '',
  user_password VARCHAR(64) DEFAULT '',
  update_count INT(11) DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

