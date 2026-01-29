import { api } from '@/services/api';
import { USERS_ENDPOINTS } from './users.endpoints';
import type { User, CreateUserPayload, UpdateUserPayload } from './users.types';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>(USERS_ENDPOINTS.list);
  return res.data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const res = await api.get<User>(USERS_ENDPOINTS.byId(id));
  return res.data;
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const res = await api.post<User>(USERS_ENDPOINTS.create, payload);
  return res.data;
};

export const updateUser = async (id: string, payload: UpdateUserPayload): Promise<User> => {
  const res = await api.put<User>(USERS_ENDPOINTS.update(id), payload);
  return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(USERS_ENDPOINTS.delete(id));
};
