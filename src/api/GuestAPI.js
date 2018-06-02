const API_URL = 'http://localhost:7071/api/GetGuest';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(API_URL);
  let tempResponse;

  tempUrl.searchParams.append('guestSearch', tGuestSearch);
  tempResponse = await fetch(tempUrl);
  tempResponse = await tempResponse.json();

  return tempResponse;
};
