import { gql } from "@apollo/client";
import client from "./api";

export default function createQuery(query: string): any {
  return client.query({
    query: gql`
      ${query}
    `
  });
}
