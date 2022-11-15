import { useState } from "react";
import {
  DropDown,
  DropButton,
  DropContent,
  TextContent,
  Icon
} from "./stylesItemFooter";

export const ItemFooter =({ name }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <DropDown>
        <DropButton onClick={(e) => setIsActive(!isActive)}>
          {name}
          <Icon open={isActive}/>
        </DropButton>
        {isActive && (
          <DropContent>
            <TextContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              pariatur fugiat. Corrupti porro minus obcaecati, in aliquam
              adipisci omnis sunt perferendis ab quisquam fugiat enim non
              blanditiis quibusdam? Consectetur, quae?
            </TextContent>
          </DropContent>
        )}
      </DropDown>
    </>
  );
}

