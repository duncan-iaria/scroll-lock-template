const API_URL = 'http://localhost:7071/api/GetGuest';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(API_URL);
  let tempResponse;

  tempUrl.searchParams.append('guestSearch', tGuestSearch);

  try {
    tempResponse = await fetch(tempUrl);
    tempResponse = await tempResponse.json();
  }
  catch (tError) {
    console.log(tError);
    tempResponse = [];
  };

  console.log('api response: ', tempResponse);
  return tempResponse;
};
