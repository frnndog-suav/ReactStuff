import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export const NewCycleForm = () => {
  const { register } = useFormContext();
  const { activeCycle } = useContext(CyclesContext);

  return (
    <FormContainer>
      <label htmlFor="task">{"Vou trabalhar em"}</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="teste 1" />
        <option value="projeto" />
        <option value="ignite" />
      </datalist>

      <label htmlFor="minutesAmount">{"durante"}</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>{"minutos."}</span>
    </FormContainer>
  );
};