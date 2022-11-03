import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { Subpages } from "../../pages";
import { ContentsContainer } from "../components/Contents.styled";

export const Contents = ({
  setSelectedSubpage,
}: {
  setSelectedSubpage: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
  const router = useRouter();
  return (
    <ContentsContainer>
      <ul>
        {Subpages.map((subpage) => (
          <li onClick={() => setSelectedSubpage(`${subpage}`)}>{subpage}</li>
        ))}
      </ul>
    </ContentsContainer>
  );
};
