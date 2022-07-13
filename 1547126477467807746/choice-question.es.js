const Question = "_Question_u86rl_1";
const Input = "_Input_u86rl_11";
const OptionList = "_OptionList_u86rl_23";
const Item = "_Item_u86rl_27";
const Selected = "_Selected_u86rl_37";
const Action = "_Action_u86rl_43";
const Button = "_Button_u86rl_47";
var styles = {
  "Question-Box": "_Question-Box_u86rl_1",
  Question,
  Input,
  OptionList,
  Item,
  Selected,
  Action,
  Button
};
const Widget = ({ options }) => {
  const { input, onExecuted, onChange, mode = "display" } = options;
  const [question, setQuestion] = React.useState();
  const [multiple, setMultiple] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);
  const [answered, setAnswered] = React.useState();
  const [editMode, setEditMode] = React.useState(mode === "edit");
  const inited = React.useRef();
  React.useEffect(() => {
    if (inited.current) {
      return;
    }
    try {
      const inputData = JSON.parse(input);
      if (!!inputData.question) {
        setQuestion(inputData.question);
      }
      if (!!inputData.multiple) {
        setMultiple(inputData.multiple);
      }
      if (!!inputData.optionList) {
        setOptionList(inputData.optionList.map((item) => {
          return { text: item, selected: false };
        }));
      }
      inited.current = true;
    } catch (e) {
      console.log(e);
    }
  }, [input]);
  React.useEffect(() => {
    if (!onChange) {
      return;
    }
    onChange(JSON.stringify({
      question,
      multiple,
      optionList: optionList.map((item) => {
        return item.text;
      })
    }));
  }, [question, multiple, optionList]);
  const answer = React.useMemo(() => {
    const res = optionList.map((item, index) => {
      return { ...item, index };
    }).filter((item, index) => {
      return item.selected;
    }).map((item) => {
      return item.index;
    }).sort();
    return multiple ? res.join() : res[0];
  }, [multiple, optionList]);
  const submit = React.useCallback(() => {
    setAnswered(answer);
    onExecuted(answer);
  }, [answer]);
  const addOption = React.useCallback(() => {
    setOptionList((prev) => {
      return prev.concat([{}]);
    });
  }, []);
  const select = React.useCallback((item, index) => {
    if (multiple) {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          }
        });
        return Array.from(answers);
      });
    } else {
      setOptionList((answers) => {
        answers.forEach((it, idx) => {
          if (idx === index) {
            it.selected = !it.selected;
          } else {
            it.selected = false;
          }
        });
        return Array.from(answers);
      });
    }
  }, [multiple]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Question-Box"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Question
  }, !editMode ? question : /* @__PURE__ */ React.createElement("input", {
    placeholder: "\u95EE\u9898",
    className: styles.Input,
    type: "text",
    value: question,
    onChange: (e) => {
      setQuestion(e.target.value.trim());
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.OptionList
  }, optionList.map((item, index) => {
    return !editMode ? /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${styles.Item} ${item.selected ? styles.Selected : ""}`,
      onClick: () => {
        select(item, index);
      }
    }, item.text) : /* @__PURE__ */ React.createElement("input", {
      key: index,
      placeholder: "\u9009\u9879",
      className: `${styles.Input} ${styles.Item}`,
      type: "text",
      value: item.text,
      onChange: (e) => {
        setOptionList((prev) => {
          const array = Array.from(prev);
          array[index] = {
            ...array[index],
            text: e.target.value.trim()
          };
          return array;
        });
      }
    });
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.Action
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: !answer || answer === answered,
    type: "button",
    onClick: submit,
    className: styles.Button
  }, "\u63D0\u4EA4"), editMode && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: addOption,
    className: styles.Button
  }, "\u65B0\u589E"), editMode && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setMultiple((prev) => {
        return !prev;
      });
    },
    className: styles.Button
  }, multiple ? "\u591A\u9009" : "\u5355\u9009"), mode === "edit" && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setEditMode((prev) => {
        return !prev;
      });
    },
    className: styles.Button
  }, editMode ? "\u666E\u901A\u6A21\u5F0F" : "\u7F16\u8F91\u6A21\u5F0F")));
};
export { Widget as default };
