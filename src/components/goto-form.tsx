import React, { useState } from "react";

import TextField from "./text-field";

import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";

type GotoFormProps = {
  onSubmit: (pageNumber: number) => void;
};

const GotoForm: React.FC<GotoFormProps> = ({ onSubmit }) => {
  const [pageNumberInput, setPageNumberInput] = useState<number | string>("");

  const handlePageNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPageNumberInput(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(+pageNumberInput);
  };

  return (
    <Stack spacing="4" direction="row">
      <TextField
        placeholder="Ir para página"
        onChange={handlePageNumberChange}
      />
      <Button onClick={handleSubmit} colorScheme="purple">
        Ir
      </Button>
    </Stack>
  );
};

export default GotoForm;
