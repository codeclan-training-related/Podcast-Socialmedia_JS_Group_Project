import React from 'react'




const FavouritesList = ({ userFavourites, DisplayUserFavouritePodcasts}) => {
  // if (!userFavourites.length) {
  //   console.log("please show me all Faves", userFavourites)
  //   return null
  // } 
  // console.log("userFavoruites outside of if", userFavourites )
  return (
    <>
      <div className='favourites-container'>
      <h2 className='favourites-title'>Favourites</h2>
      <ul className='favourites-ul'>
        {DisplayUserFavouritePodcasts(userFavourites)}
      </ul>
      </div>
    </>
  );
}

export default FavouritesList