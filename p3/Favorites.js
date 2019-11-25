// /src/Favorites.js
export default class Favorites {
  /**
   *
   */
  constructor() {
    // Extract JSON cart string from local storage
    let favorites = localStorage.getItem("favorites");

    // Parse JSON cart String to `items` object
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

    if (!favorite) {
      // Product not in faves, add as new favorite
      this.items.push({
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

    let favoriteIndex = this.items.indexOf(favorite);

    if (favorite) {
      this.favorites.splice(favoriteIndex, 1);
      this.update();
    }
  }

  /**
   * Get an favorite from favorites via trackId
   * Returns null if product does not exist in favorites
   */
  getItem(favoriteId) {
    return this.items.find(({ id }) => id === favoriteId) || null;
  }
}
