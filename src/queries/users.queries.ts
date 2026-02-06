import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} from '@services/users/users.api';
import type { User, CreateUserPayload, UpdateUserPayload } from '@services/users/users.types';

/* ================= QUERY KEYS ================= */

export const usersKeys = {
  all: ['users'] as const,
  lists: () => [...usersKeys.all, 'list'] as const,
  list: () => [...usersKeys.lists()] as const,
  details: () => [...usersKeys.all, 'detail'] as const,
  detail: (id: string) => [...usersKeys.details(), id] as const,
};

/* ================= QUERIES ================= */

export const useUsers = () =>
  useQuery<User[]>({
    queryKey: usersKeys.list(),
    queryFn: fetchUsers,
  });

export const useUser = (id: string) =>
  useQuery<User>({
    queryKey: usersKeys.detail(id),
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });

/* ================= MUTATIONS ================= */

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, CreateUserPayload>({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.list() });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, { id: string; payload: UpdateUserPayload }>({
    mutationFn: ({ id, payload }) => updateUser(id, payload),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: usersKeys.list() });
      queryClient.invalidateQueries({
        queryKey: usersKeys.detail(variables.id),
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.list() });
    },
  });
};
