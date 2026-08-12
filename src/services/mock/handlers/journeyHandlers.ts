import type MockAdapter from "axios-mock-adapter";
import { mockJourney } from "@/data";

export function registerJourneyHandlers(mock: MockAdapter) {
  mock.onGet(/\/journey$/).reply(() => [
    200,
    { items: mockJourney, total: mockJourney.length, page: 1, pageSize: mockJourney.length, hasMore: false },
  ]);
}
