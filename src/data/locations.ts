export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "dundee",
  name: "Dundee",
  countyOrRegion: "Angus",
  latitude: 56.4627,
  longitude: -2.9707,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "broughty-ferry",
    name: "Broughty Ferry",
    countyOrRegion: "Angus",
    latitude: 56.4674,
    longitude: -2.8708,
  },
  {
    slug: "monifieth",
    name: "Monifieth",
    countyOrRegion: "Angus",
    latitude: 56.4837,
    longitude: -2.8179,
  },
  {
    slug: "carnoustie",
    name: "Carnoustie",
    countyOrRegion: "Angus",
    latitude: 56.5012,
    longitude: -2.7125,
  },
  {
    slug: "arbroath",
    name: "Arbroath",
    countyOrRegion: "Angus",
    latitude: 56.5592,
    longitude: -2.5917,
  },
  {
    slug: "forfar",
    name: "Forfar",
    countyOrRegion: "Angus",
    latitude: 56.6434,
    longitude: -2.8874,
  },
  {
    slug: "perth",
    name: "Perth",
    countyOrRegion: "Perth and Kinross",
    latitude: 56.3958,
    longitude: -3.4376,
  },
  {
    slug: "newport-on-tay",
    name: "Newport-on-Tay",
    countyOrRegion: "Fife",
    latitude: 56.4395,
    longitude: -2.9476,
  },
  {
    slug: "tayport",
    name: "Tayport",
    countyOrRegion: "Fife",
    latitude: 56.4498,
    longitude: -2.8822,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
