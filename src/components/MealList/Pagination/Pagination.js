import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  totalMeals,
  mealsPerPage,
  setCurrentPage,
}) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(totalMeals / mealsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
