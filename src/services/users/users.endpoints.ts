export const USERS_ENDPOINTS = {
  list: '/users',
  byId: (id: string) => `/users/${id}`,
  create: '/users',
  update: (id: string) => `/users/${id}`,
  delete: (id: string) => `/users/${id}`,
} as const;
