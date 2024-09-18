import { useFormContext } from 'react-hook-form'
import { useCyclesContext } from '../../../../context/CyclesContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCyclesContext()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="um projeto Web" />
        <option value="um app mobile" />
        <option value="no meu portfólio" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        step={5}
        min={5}
        max={60}
        id="minutesAmount"
        disabled={!!activeCycle}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
