export const getChats = async () => {
  try {
    const response = await fetch('/api/chats');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const chats = await response.json();
    return chats;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};
