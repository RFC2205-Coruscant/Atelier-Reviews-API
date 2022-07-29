USE reviews;

CREATE TABLE `reviewdata` (
  `id` SERIAL PRIMARY KEY,
  `product_id` INTEGER,
  `rating` INTEGER,
  `date` VARCHAR,
  `summary` VARCHAR,
  `body` VARCHAR,
  `recommend` BOOLEAN,
  `reported` BOOLEAN,
  `reviewer_name` VARCHAR,
  `reviewer_email` VARCHAR,
  `response` VARCHAR,
  `helpfulness` INTEGER,
)

CREATE TABLE `reviewphotos` (
  `id` SERIAL PRIMARY KEY,
  `review_id` INTEGER,
  `rating` INTEGER,
  `url` VARCHAR,
)

CREATE TABLE `reviewcharacteristics` (
  `id` SERIAL PRIMARY KEY,
  `characteristic_id` INTEGER,
  `review_id` INTEGER,
  `value` INTEGER,
)
