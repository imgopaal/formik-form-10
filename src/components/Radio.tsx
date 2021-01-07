import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButton() {
  return (
    <FormControl component="fieldset" >
      <RadioGroup className="radio" aria-label="position" name="position">
        <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          label="Male"
        />
        <FormControlLabel
          value="female"
          control={<Radio color="primary" />}
          label="Female"
        />
        <FormControlLabel
          value="other"
          control={<Radio color="primary" />}
          label="Other"
        />
        
      </RadioGroup>
    </FormControl>
  );
}
