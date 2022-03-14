function Popular() {

const getPopular = async () => {
  const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
}

  return (
    <div>Popular</div>
  )
}

export default Popular