import { getBaseUrl } from './api';

const API_URL = getBaseUrl();
const guestErrorMessage =
  'Error creating R.S.V.P. Please try again. If this error persists, contact Duncan or Rhiannon';
const searchErrorMessage = 'Error encountered when searching, please try again.';

export const searchGuests = async tGuestSearch => {
  let tempUrl = new URL(`${API_URL}/GetGuest`);
  let tempResponse;

  tempUrl.searchParams.append('guestSearch', tGuestSearch);

  try {
    tempResponse = await fetch(tempUrl);
    tempResponse = await tempResponse.json();
    const { data, error } = tempResponse;

    if (error) {
      throw new Error('oh no');
    }

    tempResponse = data;
  } catch (tError) {
    throw new Error(searchErrorMessage);
  }

  return tempResponse;
};

export const updateGuest = async tGuest => {
  let tempUrl = new URL(`${API_URL}/UpdateGuest`);
  let tempResponse;

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
    if (error) {
      throw new Error(guestErrorMessage);
    }
    tempResponse = data.value;
  } catch (tError) {
    throw new Error(guestErrorMessage);
  }

  return tempResponse;
};

export const getAllGuests = async () => {
  let tempUrl = new URL(`${API_URL}/GetGuests`);
  let tempResponse;

  try {
    tempResponse = await fetch(tempUrl);
    tempResponse = await tempResponse.json();
    const { data, error } = tempResponse;

    if (error) {
      throw new Error('error finding all guests');
    }

    tempResponse = data;
  } catch (tError) {
    throw new Error(searchErrorMessage);
  }

  const attendingWeddingGuests = tempResponse.filter(tempGuest => {
    if (tempGuest.isResponded && tempGuest.isWeddingRsvp) {
      return tempGuest;
    } else return null;
  });

  const notRespondedGuests = tempResponse.filter(tempGuest => {
    if (!tempGuest.isResponded) {
      return tempGuest;
    } else return null;
  });

  const notAttendingGuests = tempResponse.filter(tempGuest => {
    if (tempGuest.isResponded && !tempGuest.isWeddingRsvp) {
      return tempGuest;
    } else return null;
  });

  const attendingWelcomeGuests = tempResponse.filter(tempGuest => {
    if (tempGuest.isResponded && tempGuest.isWelcomeRsvp) {
      return tempGuest;
    } else return null;
  });

  const totalWeddingCount = attendingWeddingGuests.reduce(
    (acc, tempGuest) => acc + tempGuest.attendingWeddingGuestCount,
    0
  );

  const totalWelcomeCount = attendingWelcomeGuests.reduce(
    (acc, tempGuest) => acc + tempGuest.attendingWelcomeGuestCount,
    0
  );

  return {
    totalWeddingCount,
    totalWelcomeCount,
    attendingWeddingGuests,
    notRespondedGuests,
    notAttendingGuests,
    attendingWelcomeGuests,
  };
};
