// components/spacesComponents/Component1/bl.tsx

import React, {useState, useEffect} from "react";
import { adapters } from "adapters/spacesAdapter/index.tsx";

export default function Component1Bl(){
  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetchDataFromAdapter().then(updateState);
  }, [])
}