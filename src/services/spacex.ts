import type { APISpaceXResponse, Doc } from '../config'

export async function getByIdLaunch(id: string) {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  const launch = (await res.json()) as Doc
  return launch
}

export async function getLatestLaunches() {
  const body = {
    query: {},
    options: {
      sort: {
        date_unix: 'asc',
      },
      limit: 12,
    },
  }
  const headers = {
    'Content-Type': 'application/json',
  }
  const optionsRequest = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }

  const res = await fetch('https://api.spacexdata.com/v5/launches/query', optionsRequest)
  const { docs: launches } = (await res.json()) as APISpaceXResponse
  return launches
}

export async function getAllStaticIdLaunches() {
  const launches = await getLatestLaunches()
  return launches.map(({ id }) => id)
}
