

// Function to generate a random unique string ID
export const getRandomUniqueID = () => {
  const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10; // You can adjust the length of the generated ID as needed
  let randomID = '';

  // Generate a random ID
  for (let i = 0; i < idLength; i++) {
    randomID += alphanumericChars.charAt(Math.floor(Math.random() * alphanumericChars.length));
  }

  // Append a timestamp to ensure uniqueness
  const timestamp = new Date().getTime().toString();

  // Combine the random ID and the timestamp to form the final unique ID
  const uniqueID = `${randomID}-${timestamp}`;

  return uniqueID;
}


/***
 * 
 * product slug
 */
export const createProductSlug = (name) => {
  // Remove special characters and spaces
  const slug = name
    .replace(/[^\w\s-]/g, '') // Remove non-word characters (except hyphens and spaces)
    .trim() // Trim leading and trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .toLowerCase(); // Convert to lowercase
  return slug;
}





