'use client'
import { useState } from "react";
import { data } from "./static";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [answers, setAnswers] = useState([...data])
  const [isCompleted, setIsCompleted] = useState<boolean>(false)


  const handleAnswers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    const value = e.target.value
    const tempAns = [...answers]
    tempAns[currentStep].value = tempAns[currentStep].type === 'checkbox' ? !!isChecked : value
    setAnswers(tempAns)
  }

  const handleSubmitting = () => {
    const tempAns = [...answers]
    let step = 0;
    if (tempAns[currentStep].value && tempAns[currentStep].type === 'checkbox') {
      step = tempAns[currentStep].yes
    }
    else if (!tempAns[currentStep].value && tempAns[currentStep].type === 'checkbox') {
      step = tempAns[currentStep].no
    }
    if (typeof parseInt(tempAns[currentStep].type) === 'number') {
      if (tempAns[currentStep].minValue) {
        if (parseInt(tempAns[currentStep].value.toString()) >= (tempAns[currentStep].minValue ?? 0)) {
          step = tempAns[currentStep].yes
        }
        else {
          step = tempAns[currentStep].no
        }

      }
    }
    if (step === tempAns.length) {
      setIsCompleted(true)
      setCurrentStep(0)
      return
    }
    setCurrentStep(step)
  }

  const handleRetake = () => {
    setIsCompleted(false);
    setAnswers([...data])
    setCurrentStep(0)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {!isCompleted ?
        <div>
          {data[currentStep].questionSatatement}
          <div> <input type={answers[currentStep].type} checked={Boolean(answers[currentStep].value)} onChange={handleAnswers} value={answers[currentStep].value.toString()} onClick={handleAnswers} /> </div>
          <button onClick={handleSubmitting}>SUBMIT</button>
        </div>
        :
        <>
          <div>
            <div>
              Thank you
            </div>
            {answers.map((ans) => {
              return (
                <div key={ans.step}>
                  {`${ans.questionSatatement}      ${ans.value}`}
                </div>
              )
            })}
            <button onClick={handleRetake}>Retake</button>
          </div>
        </>
      }
    </div>
  );
}
