import { Container } from "@/atoms";
import HeaderBar from "@/components/header-bar";
import NoteList from "@/components/note-list";
import React from "react";

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar />
    </Container>
  )
}
