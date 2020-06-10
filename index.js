const BooksUtils = require('./books-utils')
const users = require('./users.json')
var WordExtractor = require("word-extractor");
var extractor = new WordExtractor();
var connectionsPool = require('./db');
/***This is updated server */

const express = require('express');// file upload 1
const fileUpload = require('express-fileupload'); // file upload  
const app = express(); // file upload 3
const cors = require('cors');


var bootImageName = '';



/** */
//var formidable = require('formidable');
//var fs = require('fs');


app.use(express.json()) // middle ware to use request body parameters
app.use(cors())
app.use(fileUpload()); // // file upload 4

//Constants
let userProfile = {}


// var connectionsPool = mysql.createPool({
//   connectionLimit : 10, // default = 10
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "mydatabase"
// });

app.post("/userProfile", (req, res) => { 
  res.send(userProfile);    
});  


app.get("/users-list", (req, res) => {
  let email = req.body.email
  let sql = "SELECT * FROM users";
  connectionsPool.getConnection(function (err, connection) {
    console.log('=============================', connection)
    connection.query(sql, function (err, rows) {
        //connection.release();
        if (err) {
          console.log('=============================', err)
        }
        if(rows.length === 0) return res.status(404).send({error: 'User with the given username does not exist'})
        userProfile = rows;
        res.send(rows);
    });
});  

app.post("/user-details", (req, res) => {
  let userID = req.body.userID
  let sql = "SELECT * FROM users WHERE id = ?";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, [userID], function (err, rows) {
        connection.release();
        if (err) throw err;
        if(rows.length === 0) return res.status(404).send({error: 'User with the given username does not exist'})
        res.send(rows);
    });
});  
});





});

function findEmailAddresses(StrObj) {
  var separateEmailsBy = ", ";
  var email = "<none>"; // if no match, use this
  var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  if (emailsArray) {
      email = "";
      for (var i = 0; i < emailsArray.length; i++) {
          if (i != 0) email += separateEmailsBy;
          email += emailsArray[i];
      }
  }
  return email;
}


// Start file upload 5
app.post('/upload', function(req, res) {
  console.log('REQUEST==============>', req.files)
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "uploadedFile") is used to retrieve the uploaded file
  let uploadedFile = req.files.myCV;
  bootImageName = req.files.myCV;
 
  // Use the mv() method to place the file somewhere on your server
  uploadedFile.mv('C:/Users/Tanzeem_Bhatti/Documents/Workspace 30 March/Test App/Book-Store/assets/books/'+ uploadedFile.name, function(err) { 
    
    if (err)
      return res.status(500).send(err);

      var extracted = extractor.extract('C:/Users/Tanzeem_Bhatti/Documents/Workspace 30 March/Test App/Book-Store/assets/books/'+ uploadedFile.name);
      var regx = /(\d{3}-?\d{3}-?\d{7})/g;
      extracted.then(function(doc) {
        console.log('Phones==>',doc.getBody().match(regx), 'Email: ', findEmailAddresses(doc.getBody()) );
      });
 
    res.send('File uploaded!');
  });
});

// End file upload 6



app.post("/update-user", (req, res) => {
  console.log('Request Body = ', req.body)
 connectionsPool.getConnection(function (err, connection) {
    connection.query('UPDATE users SET first_name = ?,last_name=?, email=? WHERE id = ?', [req.body.first_name, req.body.last_name, req.body.email, req.body.id], function (err, result) {
        connection.release();
        if (err) throw err;
        console.log("Number of records inserted: " ,result.affectedRows);
        res.send(result);
    });
});    
});

app.post("/update-book", (req, res) => {
  console.log('Request Body = ', req.body)
 connectionsPool.getConnection(function (err, connection) {
   //publisher,book_dimension,book_format, price,title, publish_date, cover_image, book_category, author_name
    connection.query('UPDATE books SET publisher = ?,book_dimension=?, book_format=?, price=?, title=?, publish_date=?, cover_image=?, book_category=?, author_name=? WHERE id = ?', [req.body.publisher,req.body.book_dimension,req.body.book_format,req.body.price, req.body.title, req.body.publish_date, bootImageName.name, req.body.book_category, req.body.author_name, req.body.id], function (err, result) {
        connection.release();
        if (err) throw err;
        console.log("Number of records inserted: " ,result.affectedRows);
        res.send(result);
    });
});    
});


app.post("/login", (req, res) => {
  console.log('I am going to login');
    let email = req.body.email
    let sql = "SELECT * FROM users WHERE email = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, [email], function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.send({error: 'User with the given username does not exist'})
          userProfile = rows;
          res.send(rows);
      });
  });    
  });


  app.post("/fileupload", (req, res) => {
    
        
  });
  
  
/**Books */

///
app.get("/books-categories-list", (req, res) => {
  let sql = "SELECT * FROM categories";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
        connection.release();
        if (err) throw err;
        if(rows.length === 0) return res.status(404).send({error: 'There is no Categories exist'})
        res.send(rows);
    });
});
  
});

app.post("/filter-authors", (req, res) => {
  let genre = req.body.genre
  let sql = "SELECT * FROM authors WHERE genre = ?";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, [genre], function (err, rows) {
        connection.release();
        //if (err) throw err;
        if(rows.length === 0) return res.send({error: 'Authors with the given Genre does not exist'})
        res.send(rows);
    });
});  
});

app.post("/search-books", (req, res) => {
  let prefix = req.body.prefix
  let sql = "SELECT * FROM books";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, function (err, books) {
          connection.release();
          if (err) throw err;
          if(books.length === 0) return res.status(404).send({error: 'There is no Categories exist'})
         
          res.send(books.filter(e => e.title.toLowerCase().includes(prefix.toLowerCase()) || e.book_category.toLowerCase().includes(prefix.toLowerCase()) || e.author_name.toLowerCase().includes(prefix.toLowerCase())));
      });
  });
});  





app.post("/filter-books", (req, res) => {
 
  let genre = req.body.book_category
  let authorName = req.body.author_name

  let sql = "SELECT * FROM books WHERE book_category = ? AND author_name = ? ";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, [genre, authorName], function (err, rows) {
        connection.release();
        if (err) throw err;
        //if(rows.length === 0) return res.status(404).send({error: 'Authors with the given Genre does not exist'})
        res.send(rows);
    });
});  
});


  app.post("/new-category", (req, res) => {
    let email = req.body.email
    var sql = "INSERT INTO categories (name, description) VALUES ?";
    var values = [
      [req.body.name, req.body.description]
    ];
    
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, [values], function (err, result) {
          connection.release();
          if (err) throw err;
          console.log("Number of records inserted: " ,result.affectedRows);
          res.send(result);
      });
  });    
  });

  app.get("/books-list", (req, res) => {
    let sql = "SELECT * FROM books";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.status(404).send({error: 'There is no Categories exist'})
          res.send(rows);
      });
  });
    
  }); 

  app.post("/book-details", (req, res) => {
    let bookID = req.body.bookID
    let sql = "SELECT * FROM books WHERE id = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, [bookID], function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.status(404).send({error: 'Book with the given id does not exist'})
          res.send(rows);
      });
  });  
  });

  app.post("/get-cart-details", (req, res) => {
    let customer_id = req.body.customer_id
    let sql = "SELECT * FROM shoping_carts WHERE customer_id = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, [customer_id], function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.status(200).send([{error: 'Cart with the given id does not exist'}])
          res.send(rows); 
      });
  });  
  }); 

  app.post("/books-in-cart", (req, res) => {
    let bookIDs = req.body.book_ids
    let sql = "SELECT * FROM books WHERE id IN "+"("+bookIDs+")";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, function (err, rows) {
        console.log('sql', sql)
          connection.release();
         if (err) throw err;
          if(rows.length === 0) return res.status(404).send({error: 'Cart with the given id does not exist'})
          res.send(rows);
      });
  });  
  });

  

  app.post("/new-book", (req, res) => {
   //console.log('bootImageName bootImageName bootImageName=>', bootImageName)
    var sql = "INSERT INTO books (publisher,book_dimension,book_format, price,title, publish_date, cover_image, book_category, author_name) VALUES ?";
    var values = [
      [req.body.publisher,req.body.book_dimension,req.body.book_format,req.body.price, req.body.title, req.body.publish_date, bootImageName.name, req.body.book_category, req.body.author_name]
    ];
    
    connectionsPool.getConnection(function (err, connection) {  
      connection.query(sql, [values], function (err, result) {
          connection.release();
          if (err) throw err;
          console.log("Number of records inserted: " ,result.affectedRows);
          res.send(result);
      });
  });    
  });

  app.post("/register-user", (req, res) => {
     var sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ?";
     var values = [
       [req.body.first_name,req.body.last_name,req.body.email,req.body.password]
     ];
     
     connectionsPool.getConnection(function (err, connection) {
       connection.query(sql, [values], function (err, result) {
           connection.release();
           if (err) throw err;
           console.log("Number of records inserted: " ,result.affectedRows);
           res.send(result);
       });
   });    
   });

  app.get("/authors-list", (req, res) => {
    let sql = "SELECT * FROM authors";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.status(404).send({error: 'There is no Authors exist'})
          res.send(rows);
      });
  });
    
  });

  app.post("/new-author", (req, res) => {
     var sql = "INSERT INTO authors (name, genre) VALUES ?";
     var values = [
       [req.body.name, req.body.genre]
     ];
     
     connectionsPool.getConnection(function (err, connection) {
       connection.query(sql, [values], function (err, result) {
           connection.release();
           if (err) throw err;
           console.log("Number of records inserted: " ,result.affectedRows);
           res.send(result);
       });
   });    
   });

   app.post("/add-to-cart", (req, res) => {
     console.log('');
      var sql = "INSERT INTO shoping_carts (price, customer_id, book_id, quantity) VALUES ?";
      var values = [
        [req.body.price, req.body.customer_id, req.body.book_id, req.body.quantity]
      ];    
      connectionsPool.getConnection(function (err, connection) {
          connection.query(sql, [values], function (err, result) {
              connection.release();
              if (err) throw err;
              console.log("Number of records inserted: " ,result.affectedRows);
              res.send(result);
          });
      }); 
  });

  app.post("/update-quantity-to-cart", (req, res) => {
   connectionsPool.getConnection(function (err, connection) {
      connection.query('UPDATE shoping_carts SET quantity = ? WHERE book_id = ? AND customer_id = ?', [req.body.quantity, req.body.book_id, req.body.customer_id], function (err, result) {
          connection.release();
          if (err) throw err;
          console.log("Number of records inserted: " ,result.affectedRows);
          res.send(result);
      });
  });    
  });

  app.delete("/delete-cart-item", (req, res) => {
    var cartID = req.body.cart_id
    var sql = "DELETE FROM shoping_carts WHERE id = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, [cartID], function (err, rows) {
          connection.release();
          if (err) throw err;
          if(rows.length === 0) return res.status(404).send({error: 'Cart with the given id does not exist'})
          res.send(rows);
      });
  });    
 });

 app.delete("/delete-book", (req, res) => {
  var bookID = req.body.id
  var sql = "DELETE FROM books WHERE id = ?";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, [bookID], function (err, rows) {
        connection.release();
        if (err) throw err;
        if(rows.length === 0) return res.status(404).send({error: 'Book with the given id does not exist'})
        res.send(rows);
    });
});    
});

 app.get("/publishers-list", (req, res) => {
  let sql = "SELECT * FROM publishers";
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
        connection.release();
        if (err) throw err;
        if(rows.length === 0) return res.status(404).send({error: 'There is no Publishers exist'})
        res.send(rows);
    });
});
  
});

app.post("/search", (req, res) => {
  let keyword = req.body.keyword
  
  //console.log('Key_Word', keyword.toString())
  let sql = "SELECT * FROM books";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, function (err, books) {
          connection.release();
          if (err) throw err;
          const filteredBooks = doFilter(books, req.body.keyword)
        
         
          res.send(filteredBooks);
      });
  });
});

function doFilter (booksList, keyWord) {
  console.log('DATAAAAAAAAAAAAAAAAAAAAAAAAAAA',  keyWord)
	keyWord = keyWord || ''
	
	let result = booksList

	result = keyWord ? booksList.filter((book) => {
		const title = book.title ? book.title.toLowerCase() : ''
		const bookCategory = book.book_category ? book.book_category.toLowerCase() : ''
		const authorName = book.author_name ? book.author_name.toLowerCase() : ''

    return title.toLowerCase().includes(keyWord.toLowerCase()) ||
        bookCategory.toLowerCase().includes(keyWord.toLowerCase()) ||
        authorName.toLowerCase().includes(keyWord.toLowerCase())
	}) : result

	return result
}

app.post("/filters-books-by-categories", (req, res) => {
  let category = req.body.category
  let sql = "SELECT * FROM books WHERE book_category = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, category,  function (err, books) {
          connection.release();
          if (err) throw err;
          if(books.length === 0) return res.status(404).send({error: 'There is no Categories exist'})
         
          res.send(books);
      });
  });
});

app.post("/filters-books-by-authors", (req, res) => {
  let aothor = req.body.aothor
  let sql = "SELECT * FROM books WHERE author_name = ?";
    connectionsPool.getConnection(function (err, connection) {
      connection.query(sql, aothor,  function (err, books) {
          connection.release();
          if (err) throw err;
          if(books.length === 0) return res.status(404).send({error: 'There is no Categories exist'})
         
          res.send(books);
      });
  });
});

app.post("/contact-us", (req, res) => {
  let email = req.body.email
  var sql = "INSERT INTO contact_us (first_name, last_name, email, comments) VALUES ?";
  var values = [
    [req.body.first_name, req.body.last_name, req.body.email, req.body.comment]
  ];
  
  connectionsPool.getConnection(function (err, connection) {
    connection.query(sql, [values], function (err, result) {
        connection.release();
        if (err) throw err;
        console.log("Number of records inserted: " ,result.affectedRows);
        res.send(result);
    });
});    
});
  


app.listen(5000, () => {
 console.log("App listening on port 5000!");
});

