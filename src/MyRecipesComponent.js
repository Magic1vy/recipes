function MyRecipesComponent ({label, dishType, mealType, image, calories, ingredients}){
    return(
        <div className="item-card">
            <div className="container">
                <h2 >{label}</h2>
            </div>
            <div className="container">
                <h3>{dishType}</h3>
                </div>
                <div className="container">
                <h4>({mealType})</h4>
                </div>
            <div className="container">
                <img src={image} className='tasty' alt="dish"/>
            </div>
            <ul className="list">
                {ingredients.map( (ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div className="container">
                <h3>{calories.toFixed()} calories</h3>
            </div>

        </div>
    )
}
export default MyRecipesComponent;