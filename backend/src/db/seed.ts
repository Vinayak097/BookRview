const bookdata=[
  {
    name: 'Naturalis historia',
    author: 'Pliny the Elder',
    image: 'http://covers.openlibrary.org/b/id/6543272-L.jpg'
  },
  {
    name: 'The Turn of the Screw',
    author: 'Henry James',
    image: 'http://covers.openlibrary.org/b/id/181493-L.jpg'
  },
  {
    name: 'Wind in the Willows',
    author: 'Kenneth Grahame',
    image: 'http://covers.openlibrary.org/b/id/13335427-L.jpg'
  },
  {
    name: 'History of the Decline and Fall of the Roman Empire Complete and Unabridged',
    author: 'Edward Gibbon',
    image: 'http://covers.openlibrary.org/b/id/5978577-L.jpg'
  },
  {
    name: 'Under the Greenwood Tree or, The Mellstock quire',
    author: 'Thomas Hardy',
    image: 'http://covers.openlibrary.org/b/id/902186-L.jpg'
  },
  {
    name: 'The Taming of the Shrew',
    author: 'William Shakespeare',
    image: 'http://covers.openlibrary.org/b/id/7889534-L.jpg'
  },
  {
    name: 'The Story of the Amulet',
    author: 'Edith Nesbit',
    image: 'http://covers.openlibrary.org/b/id/13241470-L.jpg'
  },
  {
    name: 'The Riddle of the Sands',
    author: 'Erskine Childers',
    image: 'http://covers.openlibrary.org/b/id/2293974-L.jpg'
  },
  {
    name: 'The Return of the Native',
    author: 'Thomas Hardy',
    image: 'http://covers.openlibrary.org/b/id/8162989-L.jpg'
  },
  {
    name: 'The Story of Philosophy',
    author: 'Will Durant',
    image: 'http://covers.openlibrary.org/b/id/5444146-L.jpg'
  },
  {
    name: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    image: 'http://covers.openlibrary.org/b/id/8441376-L.jpg'
  },
  {
    name: 'The Alchemist, 1612',
    author: 'Ben Jonson',
    image: 'http://covers.openlibrary.org/b/id/7463992-L.jpg'
  },
  {
    name: 'The book of the damned',
    author: 'Charles Fort',
    image: 'http://covers.openlibrary.org/b/id/825884-L.jpg'
  },
  {
    name: 'The princess and the goblin',
    author: 'George MacDonald',
    image: 'http://covers.openlibrary.org/b/id/13192917-L.jpg'
  },
  {
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    image: 'http://covers.openlibrary.org/b/id/14625765-L.jpg'
  },
  {
    name: 'The Prince and the Pauper',
    author: 'Mark Twain',
    image: 'http://covers.openlibrary.org/b/id/8221267-L.jpg'
  },
  {
    name: 'The Phoenix and the Carpet',
    author: 'Edith Nesbit',
    image: 'http://covers.openlibrary.org/b/id/902122-L.jpg'
  },
  {
    name: 'The Call of the Wild',
    author: 'Jack London',
    image: 'http://covers.openlibrary.org/b/id/12393037-L.jpg'
  },
  {
    name: 'Voyage au Centre de la Terre',
    author: 'Jules Verne',
    image: 'http://covers.openlibrary.org/b/id/5890987-L.jpg'
  },
  {
    name: 'The Voyage of the Dawn Treader',
    author: 'C.S. Lewis',
    image: 'http://covers.openlibrary.org/b/id/9184719-L.jpg'
  }
]
import { Book } from "./db"
import connectDb from "./connectDb"
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

async function feed() {
    try {
        // First connect to database
        await connectDb();
        console.log("db connected succfully")
        // Check if data already exists
        const existingBooks = await Book.find({});
        if (existingBooks.length > 0) {
            console.log('Database already seeded with', existingBooks.length, 'books');
            process.exit(0);
        }

        // Insert books
        await Book.insertMany(bookdata);
        console.log("Successfully inserted", bookdata.length, "books");
        process.exit(0);
    } catch(e) {
        console.error('Failed seeding database:', e);
        process.exit(1);
    }
}

feed();