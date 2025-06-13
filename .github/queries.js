// Task 2: CRUD Operations
use plp_bookstore;
db.books.find().pretty(); // Read
db.books.insertOne({ title: "New Book", author: "Aziz", ... });
db.books.updateOne({ title: "1984" }, { $set: { in_stock: false } });
db.books.deleteOne({ title: "Brave New World" });

// Task 3: Advanced Queries
db.books.find({ genre: "Fiction", published_year: { $gt: 1950 } });
db.books.find({ pages: { $gte: 300 } });
db.books.find({ author: /Orwell/ });

// Task 4: Aggregation
db.books.aggregate([
  { $match: { genre: "Fiction" } },
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } }
]);

// Task 5: Indexing
db.books.createIndex({ author: 1 });
db.books.find({ author: "George Orwell" }).explain("executionStats");
