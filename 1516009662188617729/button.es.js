const Button = "_Button_1dh1e_1";
var styles = {
  Button
};
const Widget = ({ options }) => {
  const { input, onExecuted } = options;
  const stateList = React.useMemo(() => {
    try {
      const inputData = JSON.parse(input);
      if (!Array.isArray(inputData)) {
        return [];
      }
      return inputData;
    } catch (e) {
      console.log(e);
    }
  }, [input]);
  const [index, setIndex] = React.useState(0);
  return stateList.length == 0 || !!stateList[index].hidden ? null : /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      onExecuted(stateList[index].output);
      setIndex((prev) => {
        return (prev + 1) % stateList.length;
      });
    },
    className: styles.Button
  }, stateList[index].text);
};
export { Widget as default };
