const API_URL = 'http://localhost:7071/api';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(`${API_URL}/GetGuest`);
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

export const updateGuest = async tGuest => {
  let tempUrl = new URL(`${API_URL}/UpdateGuest`);
  let tempResponse;
  console.log('guest:', tGuest);
  try {
    tempResponse = await fetch(tempUrl, {
      method: 'PUT',
      body: JSON.stringify(tGuest),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    tempResponse = await tempResponse.json();
    const { data, error } = tempResponse;
    tempResponse = data;
  } catch (tError) {
    throw new Error(`Error updating guest: ${tError}`);
  }

  return tempResponse;
};
