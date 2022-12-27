import "./form.css";
import { useMultistepForm } from "./useMultistepForm";

function App() {

  const { steps, currentStepIndex, step } = useMultistepForm([<div>One</div>, <div>Two</div>])
  
  return (
    <div className="form-container">
      <form> 
        <div className="form" >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
    </div>
  )
}

export default App
