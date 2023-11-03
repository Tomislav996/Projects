import { useGlobalContext } from "../context"

const Favourites = () => {

  const{favorites, selectMeal, deleteFromFavorites} = useGlobalContext()

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const  {idMeal, strMealThumb:image} = item;
            return (
              <div key={idMeal} className="favorite-item">
              <img src={image} className="favorites-img img" alt="" onClick={() => selectMeal(idMeal, true)} />
              <button className="remove-btn" onClick={() => deleteFromFavorites(idMeal)}>remove </button>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Favourites