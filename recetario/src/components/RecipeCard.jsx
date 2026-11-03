export default function RecipeCard({ recipe, onSelect }) {
  return (
    <article className="recipe-card" onClick={() => onSelect(recipe)}>
      <div className="recipe-card__body">
        <div className="recipe-card__emoji">{recipe.emoji}</div>
        <h2>{recipe.name}</h2>
        <p>{recipe.subtitle}</p>
        <div className="recipe-card__footer">
          <button className="btn-menu">Leer más</button>
        </div>
      </div>
    </article>
  );
}