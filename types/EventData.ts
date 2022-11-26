export type LiveEventData = {
  EventId: number;
  Name: string;
  StartTime: string;
  TimeZone: string;
  Status: string;
  LiveEventId: null;
  LiveFightId: null;
  LiveRoundNumber: null;
  LiveRoundElapsedTime: null;
  Organization: Organization;
  Location: Location;
  FightCard: FightCard[];
};

export type Location = {
  City: string;
  State: string;
  Country: string;
  TriCode: string;
  VenueId: number;
  Venue: string;
};

export type Organization = { OrganizationId: number; Name: string };

export type FightCard = {
  FightId: number;
  FightOrder: number;
  Status: string;
  CardSegment: string;
  CardSegmentStartTime: string;
  CardSegmentBroadcaster: string;
  Fighters: Fighter[];
  Result?: Result;
  WeightClass: WeightClass;
  Accolades: Accolades[];
  Referee: Referee;
  Ruleset: Ruleset;
  FightNightTracking?: FightNightTracking[];
};

export type Result = {
  Method: string;
  EndingRound: number;
  EndingTime: string;
  EndingStrike: string;
  EndingTarget: string;
  EndingPosition: string;
  EndingSubmission: null;
  EndingNotes: null;
  FightOfTheNight: false;
  FightScores: any[];
};

export type WeightClass = {
  WeightClassId: number;
  CatchWeight: null | string | boolean;
  Weight: string;
  Description: WeightClassNames;
  Abbreviation: string;
};

export type WeightClassNames =
  | 'flyweight'
  | 'bantamweight'
  | 'featherweight'
  | 'lightweight'
  | 'welterweight'
  | 'middleweight'
  | 'light-heavyweight'
  | 'heavyweight';

export type Fighter = {
  FighterId: number;
  MMAId: number;
  Name: {
    FirstName: string;
    LastName: string;
    NickName: string;
  };
  Born: { City: string; State: string; Country: string; TriCode: string };
  FightingOutOf: {
    City: string;
    State: null | string;
    Country: string;
    TriCode: string;
  };
  Record: Record;
  DOB: string;
  Age: number;
  Stance: string;
  Weight: number;
  Height: number;
  Reach: number;
  UFCLink: string;
  WeightClasses: WeightClass[];
  Corner: string;
  WeighIn: number;
  Outcome: Outcome;
  KOOfTheNight: boolean;
  SubmissionOfTheNight: boolean;
  PerformanceOfTheNight: boolean;
};

export type Record = { Wins: number; Losses: number; Draws: number; NoContests: number };

export type Outcome = { OutcomeId: number; Outcome: string };

export type Accolades = { Type: string; Name: string };

export type Referee = {
  RefereeId: number;
  FirstName: string;
  LastName: string;
};

export type Ruleset = { PossibleRounds: number; Description: string };

export type FightNightTracking = {
  ActionId: number;
  FighterId: null | number | string;
  Type: string;
  RoundNumber: null | number;
  RoundTime: null | number;
  Timestamp: string;
};
