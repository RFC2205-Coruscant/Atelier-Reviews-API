-- COPY reviewdata (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
-- FROM 'C:\Users\shirleynguyen\Documents\reviews.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviewphotos (id, review_id, url)
-- FROM 'C:\Users\shirleynguyen\Documents\reviews_photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviewcharacteristics (id, characteristic_id, review_id, value)
-- FROM 'C:\Users\shirleynguyen\Documents\characteristics_reviews.csv'
-- DELIMITER ','
-- CSV HEADER;