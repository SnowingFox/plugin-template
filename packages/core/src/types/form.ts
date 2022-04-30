import type { DefaultValues } from './utils'

export type Mode = 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all'

export type CriteriaMode = 'firstError' | 'all'

export type TFiledValue = Record<string, any>

export interface UseFormProps<TFieldValues, TContext> {
  /*
  * Form Mode
  *
  * @default 'onSubmit'
  */
  mode: Mode
  reValidateMode: Exclude<Mode, 'onTouched' | 'all'>
  defaultValues: DefaultValues<TFieldValues>
  // resolver: Resolver<TFieldValues, TContext>
  context: TContext
  shouldFocusError: boolean
  shouldUnregister: boolean
  shouldUseNativeValidation: boolean
  criteriaMode: CriteriaMode
  delayError: number
}
