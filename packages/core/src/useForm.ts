import { reactive } from 'vue'
import type { FormState, UseFormProps } from './types/form'
import type { FieldValues } from './types/filed'
import type { FieldErrors } from './types/errors'
import { createForm } from './logic/createForm'

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  >(
  props: UseFormProps<TFieldValues, TContext>,
) {
  const formState = reactive<FormState<TFieldValues>>({
    isDirty: false,
    isValidating: false,
    // dirtyFields: {} as FieldNamesMarkedBoolean<TFieldValues>,
    isSubmitted: false,
    submitCount: 0,
    // touchedFields: {} as FieldNamesMarkedBoolean<TFieldValues>,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    errors: {} as FieldErrors<TFieldValues>,
  })

  return {
    ...createForm(props),
  }
}
