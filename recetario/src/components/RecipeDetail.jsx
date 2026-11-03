export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="book-page">
      <button className="btn-back" onClick={onBack}>
        ← Volver al índice
      </button>

      <header className="page-title">
        <h1>{recipe.name}</h1>
        <h3>{recipe.subtitle}</h3>
        <p className="servings-text">{recipe.servings}</p>
      </header>

      {/* Contenedor de la imagen */}
      <div className="recipe-header-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>

      {/* La nota manuscrita */}
      <div className="note-paper-full">
        <p>{recipe.note}</p>
      </div>

      <div className="ingredients-section">
        <h2 className="section-title">Ingredientes</h2>
        <ul className="ingredients-grid">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="steps-section">
        <h2 className="section-title">Preparación</h2>
        <ol className="steps-list">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}