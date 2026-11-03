import { useState } from "react";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      {!selected && (
        <header className="book-header">
          <h1>Recetario de Campo</h1>
          <p>Sabores tradicionales</p>
        </header>
      )}

      <main>
        {selected ? (
          <RecipeDetail recipe={selected} onBack={() => setSelected(null)} />
        ) : (
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={setSelected}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}