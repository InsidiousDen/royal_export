export const FlexWrapper = ({ children, fd, ai, jc }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: fd ?? "row",
        alignItems: ai ?? "center",
        justifyContent: jc ?? "flex-start",
      }}
    ></div>
  );
};
