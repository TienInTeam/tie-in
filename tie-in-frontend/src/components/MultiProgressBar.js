import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";


function MultiProgressBar({ currentStep }) {
  let stepPercentage = 0;

  if (currentStep === 1) {
    stepPercentage = 0;
  } else if (currentStep === 2) {
    stepPercentage = 50;
  } else if (currentStep === 3) {
    stepPercentage = 100;
  }  else {
    stepPercentage = 0;
  }
  return (
    <div className="progress-bar">
      <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <p>Project Information</p>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <p>Technology</p>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <p>Additional Information</p>
          </div>
        )}
      </Step>
        </ProgressBar>
    </div>
)
}

export default MultiProgressBar
