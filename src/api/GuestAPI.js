const API_URL = 'http://localhost:7071/api/GetGuest';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(API_URL);
  let tempResponse;

  tempUrl.searchParams.append('guestSearch', tGuestSearch);

  try {
    tempResponse = await fetch(tempUrl);
    tempResponse = await tempResponse.json();
    const { data, error } = tempResponse;
    tempResponse = data;
  } catch (tError) {
    console.error('error searching for guest: ', tError);
    tempResponse = [];
  }

  return tempResponse;
};
