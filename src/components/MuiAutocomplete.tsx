import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJs"];

type Skill = {
  id: number;
  label: string;
};

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null)
  console.log({ skill });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
         <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
