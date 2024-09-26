function WrapperComponent({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "yellow", textAlign: "center" }}>{children}</div>;
}

export default WrapperComponent;

export function ChildComponent() {
  return <p>Hello I am the child.</p>;
}
