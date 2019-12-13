// /src/Favorites.js
export default class Favorites {
  /**
   * Constructor for favorites
   */
  constructor() {
    // Extract JSON favorites string from local storage
    let favorites = localStorage.getItem('favorites');

    // Parse JSON favorites String to `favorites` object
    this.favorites = favorites ? JSON.parse(favorites) : [];
  }

  /**
   * Getter method for favorites
   */
  getFavorites() {
    return this.favorites;
  }

  /**
   * Returns how many total favorites have been chosen
   */
  count() {
    return this.favorites.length;
  }

  /**
   * Updates favorites in localstorage
   */
  update() {
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  /**
   * Add a new favorite of the given trackId
   */
  add(trackId) {
    // First see if product is already present
    let favorite = this.getFavorites(trackId);

    if (favorite !== null) {
      // Product not in faves, add as new favorite
      this.favorites.push({
        id: trackId
      });
    }

    this.update();
  }

  /**
   * Remove an favorite from favorites via trackId
   */
  remove(trackId) {
    let favorite = this.getFavorite(trackId);

    let favoriteIndex = this.favorites.indexOf(favorite);

    if (favorite) {
      this.favorites.splice(favoriteIndex, 1);
      this.update();
    }
  }

  /**
   * Get a favorite from favorites via trackId
   * Returns null if product does not exist in favorites
   */
  getFavorite(favoriteId) {
    return this.favorites.find(({ id }) => id === favoriteId) || null;
  }
}
