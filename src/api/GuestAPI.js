const API_URL = 'http://www.hello.com/';

export const searchGuests = tGuestSearch => {
  console.log('search for guests', API_URL);
  let tempUrl = new URL(API_URL);
  tempUrl.searchParams.append('guestSearch', tGuestSearch);
  console.log(tempUrl);
  // fetch(url).then(/* … */);
};
