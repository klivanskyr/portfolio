'use client';

import { Button } from "@mantine/core";
import { useState } from "react";

export default function CardCarousel({ cards }: { cards: JSX.Element[] }) {
  const [page, setPage] = useState<number>(1);

  function decrementPage() {
    if (page - 1 === 0) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  function incrementPage() {
    setPage(page + 1);
  }

  return (
    <div>
      <div className="flex flex-row max-w-screen overflow-clip">
        {cards.map((card, i) => 
          <div className='mx-2' key={i}>{card}</div>
        )}
      </div>
      <div className="flex flex-row">
        <Button className="m-1" onClick={decrementPage}>{"<"}</Button>
        <p className="m-1">{page}</p>
        <Button className="m-1" onClick={incrementPage}>{">"}</Button>
      </div>
    </div>
  )
}