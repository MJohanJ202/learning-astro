export interface APISpaceXResponse {
  docs: Doc[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
}

export interface Doc {
  auto_update: boolean;
  capsules: string[];
  cores: Core[];
  crew: any[];
  date_local: Date;
  date_precision: DatePrecision;
  date_unix: number;
  date_utc: Date;
  details: null | string;
  failures: Failure[];
  fairings: Fairings | null;
  flight_number: number;
  id: string;
  launch_library_id: null;
  launchpad: Launchpad;
  links: Links;
  name: string;
  net: boolean;
  payloads: string[];
  rocket: Rocket;
  ships: string[];
  static_fire_date_unix: number | null;
  static_fire_date_utc: Date | null;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
  window: number;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: null | string;
  landpad: null;
  legs: boolean;
  reused: boolean;
}

export enum DatePrecision {
  Hour = "hour",
}

export interface Failure {
  altitude: number | null;
  reason: string;
  time: number;
}

export interface Fairings {
  recovered: boolean | null;
  recovery_attempt: boolean | null;
  reused: boolean | null;
  ships: any[];
}

export enum Launchpad {
  The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
  The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
  The5E9E4502F5090995De566F86 = "5e9e4502f5090995de566f86",
}

export interface Links {
  article: string;
  flickr: Flickr;
  patch: Patch;
  presskit: null | string;
  reddit: Reddit;
  webcast: string;
  wikipedia: string;
  youtube_id: string;
}

export interface Flickr {
  original: any[];
  small: any[];
}

export interface Patch {
  large: string;
  small: string;
}

export interface Reddit {
  campaign: null;
  launch: null | string;
  media: null;
  recovery: null;
}

export enum Rocket {
  The5E9D0D95Eda69955F709D1Eb = "5e9d0d95eda69955f709d1eb",
  The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
}
