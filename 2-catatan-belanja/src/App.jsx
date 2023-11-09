// Define an array of grocery items
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

// Header component
function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

// Form component
function Form() {
  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
  );
}

// GroceryList component
function GroceryList() {
  return (
    <div>
      <div className="list">
        <ul>
          {/* Map through the groceryItems array and render each item */}
          {groceryItems.map((item) => (
            <li key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <span style={item.checked ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.name}
              </span>
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </div>
  );
}


// Footer component
function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}

// App component
export default function App() {
  return (
    <div className="app">
      {/* Render the Header component */}
      <Header />
      {/* Render the Form component */}
      <Form />
      {/* Render the GroceryList component */}
      <GroceryList />
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}