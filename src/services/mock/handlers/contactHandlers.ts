import type MockAdapter from "axios-mock-adapter";

export function registerContactHandlers(mock: MockAdapter) {
  mock.onPost(/\/contact$/).reply(() => [200, { success: true, message: "Thank you — your message has been received." }]);
}
