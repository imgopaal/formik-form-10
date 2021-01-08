import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { BasicInfo } from "../components/Basic Info/BasicInfo";
import { Password } from "../components/password/Password";
import { Age } from "../components/zAge/Age";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "00001a",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Basic Information", "Security", "Details"];
}

function getStepContent(
  stepIndex: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
) {
  switch (stepIndex) {
    case 0:
      return <BasicInfo submit={setStep} />;
    case 1:
      return <Password submit={setStep} />;
    case 2:
      return <Age submit={setStep} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, setActiveStep)}
    </div>
  );
}
