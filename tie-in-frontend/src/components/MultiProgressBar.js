import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";


function MultiProgressBar({ currentStep }) {
  let stepPercentage = 0;

  if (currentStep === 1) {
    stepPercentage = 0;
  } else if (currentStep === 2) {
    stepPercentage = 33;
  } else if (currentStep === 3) {
    stepPercentage = 66;
  } else if (currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  return (
    <ProgressBar percent={stepPercentage}>
    <Step>
      {({ accomplished, index }) => (
        <div
          className={`indexedStep ${accomplished ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
    <Step>
      {({ accomplished, index }) => (
        <div
          className={`indexedStep ${accomplished ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
    <Step>
      {({ accomplished, index }) => (
        <div
          className={`indexedStep ${accomplished ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  </ProgressBar>
)
}

export default MultiProgressBar
