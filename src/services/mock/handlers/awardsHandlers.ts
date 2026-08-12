import type MockAdapter from "axios-mock-adapter";
import { mockAwards } from "@/data";

export function registerAwardsHandlers(mock: MockAdapter) {
  mock.onGet(/\/awards$/).reply(() => [
    200,
    { items: mockAwards, total: mockAwards.length, page: 1, pageSize: mockAwards.length, hasMore: false },
  ]);
}
