// src/types/action-result.ts

export type ActionResult<T = void> = {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[] | undefined>;
};