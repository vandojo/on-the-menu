export function PantryRecipe({item, id}) {
  return (
    <div key={id} className="border border-red-500">
      <h2 className="text-white">{item.text}</h2>
      <p className="text-white">
        Click <a href={item.url}>here</a> for the full recipe
      </p>
      <ul>
        {item.ingredients.map((ingredient, k) => (
          <li className="text-white" key={k}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
