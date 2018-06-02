const API_URL = 'http://localhost:7071/api/GetGuest';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(API_URL);
  let tempResponse;
  const tempHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

  tempUrl.searchParams.append('guestSearch', tGuestSearch);

  try {
    tempResponse = await fetch(tempUrl, { headers: tempHeaders });
    tempResponse = await tempResponse.json();

  }
  catch (tError) {
    console.log(tError);
  };

  console.log('api response: ', tempResponse)
  return tempResponse;
};