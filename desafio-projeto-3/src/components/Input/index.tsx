import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { GithubContext } from "../../context/GithubContext";
import { useDebounce } from "../../hooks/useDebounce";
import { InputContainer } from "./styles";

const searchIssueFormSchema = z.object({
  query: z.string(),
});

type SearchIssueFormData = z.infer<typeof searchIssueFormSchema>;

export function Input() {
  const { register, watch } = useForm<SearchIssueFormData>();
  const searchInput = watch("query");
  const { getIssuesFromRepo, issues } = useContext(GithubContext);
  const debouncedQuery = useDebounce(searchInput);

  useEffect(() => {
    getIssuesFromRepo(debouncedQuery);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  useEffect(() => {
    console.log("issues", issues);
  }, [issues]);

  return (
    <InputContainer
      type="text"
      placeholder="Buscar conteúdo"
      {...register("query")}
    />
  );
}
