import { useMemo } from "react";

import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";

type PaginationProps = {
  currentPage: number;
  data: any;
  onClick: (page: number) => void;
  totalPages: number;
};

const Pagination = (props: PaginationProps) => {
  const pages = useMemo(() => {
    return Array.from({ length: props.totalPages }, (_, index) => index + 1);
  }, [props.totalPages]);

  const {
    start,
    end,
    pages: paginatedPages
  } = useMemo(() => {
    const current = props.currentPage + 1;
    let start = current - 1;
    let end = current + 1;

    if (!pages[end]) {
      end = pages[pages.length - 1];
      start = end - 2;
    }

    if (start <= 1) {
      end -= start - 1;
      start = 1;
    }

    if (end > pages.length) end = pages.length;

    const paginatedPages = [];

    for (let i = start; i <= end; i++) {
      paginatedPages.push(i);
    }

    return {
      start,
      end,
      pages: paginatedPages
    };
  }, [props.currentPage, pages]);

  return (
    <HStack spacing="3">
      {start > 1 && <Button onClick={() => props.onClick(0)}>1</Button>}
      {start > 2 && <Button>...</Button>}
      {paginatedPages.map((item) => (
        <Button
          key={item}
          onClick={() => {
            props.onClick(item - 1);
          }}
          colorScheme={props.currentPage + 1 === item ? "purple" : "gray"}
        >
          {item}
        </Button>
      ))}
      {end < pages.length - 1 && <Button>...</Button>}
      {end < pages.length && (
        <Button
          colorScheme={
            props.currentPage + 1 === pages[pages.length - 1]
              ? "purple"
              : "gray"
          }
          onClick={() => {
            props.onClick(pages[pages.length - 1] - 1);
          }}
        >
          {pages[pages.length - 1]}
        </Button>
      )}
    </HStack>
  );
};

export default Pagination;
