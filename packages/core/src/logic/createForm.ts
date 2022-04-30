import type { UseFormProps, UseFormReturn } from '../types/form'
import type { FieldValues } from '../types/filed'

export function createForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  >(
  props: UseFormProps<TFieldValues, TContext> = {},
): Omit<UseFormReturn<TFieldValues, TContext>, 'formState'> {
  return {} as any
}
