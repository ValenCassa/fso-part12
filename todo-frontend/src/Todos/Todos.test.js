import { render } from "@testing-library/react";

it("Testing test-stage", () => {
  const component = render(
    <div>
      <h1>Testing test-stage</h1>
    </div>
  );
  expect(component.container).toHaveTextContent("Testing test-stage");
});
