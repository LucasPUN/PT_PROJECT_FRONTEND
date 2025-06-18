import { createFileRoute } from "@tanstack/react-router";
import NavList from "../ui/component/NavList";

export const Route = createFileRoute("/*")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NavList />
      <h1>404</h1>
    </>
  );
}
