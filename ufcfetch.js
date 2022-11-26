import fs from 'fs';

const fetchUFC = async () => {
  try {
    const res = await fetch(
      'https://d29dxerjsp82wz.cloudfront.net/api/v3/event/live/1114.json'
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

const writeToFile = async data => {
  try {
    await fs.promises.writeFile('data.json', JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err);
  }
};

const fetchAndWrite = async () => {
  try {
    const LiveEventDetails = await fetchUFC();
    await writeToFile(LiveEventDetails);
  } catch (err) {
    console.log(err);
  }
};

fetchAndWrite();
