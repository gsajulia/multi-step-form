"use client";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Step from "./components/Step/Step";
import { defaultSteps } from "./data";
import { useState } from "react";

export default function Home() {
  const [steps, setSteps] = useState(
    defaultSteps.map(({ id, stepTitle, status }) => ({ id, stepTitle, status }))
  );

  const [fields, setFields] = useState(
    defaultSteps.map(({ fields }) => fields)
  );

  const changeActiveStep = (actualId, actualStatus) => {
    tempSteps = steps.map(({ id, status }) =>
      id === actualId ? actualStatus : status
    );
    setSteps(tempSteps);
  };

  const getActiveField = () => {
    return steps.findIndex(({ status }) => status === "active");
  };
  const activeStepIndex = getActiveField();

  const onChangeField = (e, fieldName) => {
    const tempFields = [...fields];
    const fieldIndex = tempFields[activeStepIndex].findIndex(
      ({ name }) => name === fieldName
    );
    tempFields[activeStepIndex][fieldIndex].value = e.target.value;
    setFields(tempFields);
  };

  const nextStep = () => {
    let readyToNext = true;
    for (let i = 0; i < fields[activeStepIndex].length; i++) {
      if (!fields[activeStepIndex][i].value) readyToNext = false;
    }

    const tempSteps = [...steps];

    if (readyToNext) {
      tempSteps[activeStepIndex].status = "done";
      tempSteps[activeStepIndex + 1].status = "active";
    }

    setSteps(tempSteps)
  };

  const onSubmit = () => {
    console.log("submit");
  };

  const previousStep = () => {    
    const tempSteps = [...steps];
    tempSteps[activeStepIndex].status = "todo";
    tempSteps[activeStepIndex - 1].status = "active";

    setSteps(tempSteps)};

  console.log(fields);
  console.log(steps);

  return (
    <main className={styles.main}>
      <Header steps={steps} changeActiveStep={changeActiveStep} />
        <Step fields={fields[activeStepIndex]} onChangeField={onChangeField} />
        <div className={styles.buttons}>
        {activeStepIndex !== 0 && (
          <button className={styles.buttonPrevious} type="button" onClick={previousStep}>Voltar</button>
        )}
        {activeStepIndex === steps.length - 1 ? (
          <button className={styles.buttonContinue} type="submit" onClick={onSubmit}>enviar proposta</button>
        ) : (
          <button className={styles.buttonContinue} type="button" onClick={nextStep}>Continuar</button>
        )}
        </div>
    </main>
  );
}
