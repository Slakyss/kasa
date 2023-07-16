async function fetchAppartementData() {
    try {
      const response = await fetch("/logements.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching appartement data:", error);
      throw error;
    }
  }

  export default fetchAppartementData  