import { Container } from "@/atoms";
import NoteList from "@/components/note-list";
import React from "react";

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
    </Container>
  )
}
