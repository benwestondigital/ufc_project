/*

poll api https://d29dxerjsp82wz.cloudfront.net/api/v3/event/live/${eventNumber}.json to get updates

https://javascript.info/long-polling

- LiveEventDetail.StartTime tells us when the event begins
- LiveEventDetail.LiveFightId tells us which fight is currently on. Can filter by LiveFightId to find the current/next fight

when the previous fight finishes === "fight_complete" then we poll for the next one to === "fight_open"

wait for the fight open time then send event to client
FightCard[fightNum].fightNightTracking[0].Type === fight_open
FightCard[fightNum].fightNightTracking[0].TimeStamp

*/