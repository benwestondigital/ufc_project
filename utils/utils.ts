import * as fs from 'fs';
import { fetchEventData } from '../src/fetchEventData/fetchEventData';

export const writeToFile = async (data: any, filePath: string = 'data.json'): Promise<void> => {
  try {
    if (!data) return;
    await fs.promises.writeFile(filePath, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err);
  }
};

export const fetchAndWrite = async (): Promise<void> => {
  try {
    const LiveEventDetails = await fetchEventData();
    await writeToFile(LiveEventDetails);
  } catch (err) {
    console.log(err);
  }
};
