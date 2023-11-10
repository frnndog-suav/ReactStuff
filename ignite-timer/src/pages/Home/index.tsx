import { Play } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "Valor mínimo de 5 minutos")
    .max(60, "Valor máximo de 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof formSchema>;

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const taskInputValue = watch("task");
  const isSubmitDisabled = !taskInputValue;

  function handleTimerForm(data: NewCycleFormData) {
    console.log("data", data);
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleTimerForm)}>
        <FormContainer>
          <label htmlFor="task">{"Vou trabalhar em"}</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>{"minutos."}</span>
        </FormContainer>

        <CountdownContainer>
          <span>{"0"}</span>
          <span>{"0"}</span>
          <Separator>:</Separator>
          <span>{"0"}</span>
          <span>{"0"}</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          {"Começar"}
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
