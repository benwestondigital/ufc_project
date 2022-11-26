import { LiveEventData } from '../../types/EventData';
import { fetchAndWrite } from '../../utils/utils';

export const fetchEventData = async (eventNum = 1114): Promise<LiveEventData> => {
  try {
    const res = await fetch(
      `https://d29dxerjsp82wz.cloudfront.net/api/v3/event/live/${eventNum}.json`
    );
    if (!res.ok) {
      throw Error(`Request failed - status ${res.status}: ${res.statusText}`);
    }
    const { LiveEventDetail } = await res.json();
    return LiveEventDetail;
  } catch (err) {
    console.log(err);
  }
};

fetchAndWrite();
