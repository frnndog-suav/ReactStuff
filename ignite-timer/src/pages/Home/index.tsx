import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "@phosphor-icons/react";
import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { Countdown } from "./Countdown";
import { NewCycleForm } from "./NewCycleForm";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished(): void;
  setSecondsPassed(seconds: number): void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

const formSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "Valor mínimo de 5 minutos")
    .max(60, "Valor máximo de 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof formSchema>;

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const taskInputValue = watch("task");
  const isSubmitDisabled = !taskInputValue;

  function handleTimerForm(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    };

    setCycles((currentList) => [...currentList, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handleInterruptCycle() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  function markCurrentCycleAsFinished() {
    setCycles((currentCycles) =>
      currentCycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleTimerForm)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
          }}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            {"Interromper"}
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            {"Começar"}
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
