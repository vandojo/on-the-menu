import {useEffect, useState} from "react";
export function Recipe({focusItem}) {
  const focusElement = (
    <div className="w-2/5  mr-20 border border-red-400">
      {focusItem.label === "" ? "" : focusItem.label}
    </div>
  );

  return <>{focusElement}</>;
}
