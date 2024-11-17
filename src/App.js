import logo from './logo.svg';
import './App.css';
import data from './data.js';

function App() {
  console.log(data); // Check if data is logging correctly
  return (
    <div>
      <Header />
      
      {/* Update prop name to 'recipes' */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: "black"
      }}>
      <Menu recipes={data} />
      <Menu recipes={data} />
      </div>
    </div>
  );
}

export default App;

const Menu = ({ recipes }) => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    
    }}>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {recipes?.filter((dish) => dish.stock)?.map((dish, index) => (
        // Always provide a unique key for mapped elements
        <RecipeMenu dish={dish} key={index} />
      ))}
    </div>
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Hotel
      </h1>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Take away & Home delivery
      </h5>
    </div>
  );
};


function RecipeMenu({ dish }) {
  console.log(dish);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        backgroundColor: "#1c1816",
        border: "none",
        borderRadius: "10px",
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={dish.img}
          alt={dish.title} // Add alt text for accessibility
        />
      </div>
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <h1>{dish.title}</h1>
        <p style={{
          fontSize: "14px",
          lineHeight: "1.5em",
          fontFamily: "monospace"
        }}>{dish.description}</p>
        <button>{dish.stock ? "ADD TO BUCKET" : "Out of Stock"}</button>
      </div>
    </div>
  );
}
