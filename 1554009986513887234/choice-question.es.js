const Question = "_Question_18tp1_1";
const Icon = "_Icon_18tp1_17";
const Input = "_Input_18tp1_11";
const OptionList = "_OptionList_18tp1_32";
const Item = "_Item_18tp1_32";
const Selected = "_Selected_18tp1_46";
const Action = "_Action_18tp1_52";
const Button = "_Button_18tp1_61";
var styles = {
  "Question-Box": "_Question-Box_18tp1_1",
  Question,
  "Input-Box": "_Input-Box_18tp1_11",
  Icon,
  Input,
  OptionList,
  Item,
  Selected,
  Action,
  Button
};
const Widget = ({ options }) => {
  const {
    input,
    onExecuted,
    onChange,
    mode = "display",
    api: { showRichText, showRichEditor }
  } = options;
  const [question, setQuestion] = React.useState("");
  const [multiple, setMultiple] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);
  const [answered, setAnswered] = React.useState();
  const [editMode, setEditMode] = React.useState(mode === "edit");
  const inited = React.useRef();
  const RichText = React.useCallback((props) => {
    return showRichText(props);
  }, []);
  const RichEditor = React.useCallback((props) => {
    return showRichEditor(props);
  }, []);
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
    const output = {
      question,
      multiple,
      optionList: optionList.map((item) => {
        return item.text;
      })
    };
    onChange(JSON.stringify(output));
  }, [question, multiple, optionList]);
  const answer = React.useMemo(() => {
    const answers = optionList.map((item, index) => {
      return { ...item, index };
    }).filter((item, index) => {
      return item.selected;
    }).map((item) => {
      return item.index;
    }).sort();
    if (answers.length === 0) {
      return void 0;
    }
    return multiple ? answers.join() : `${answers[0]}`;
  }, [multiple, optionList]);
  const submit = React.useCallback(() => {
    setAnswered(answer);
    onExecuted(answer);
  }, [answer]);
  const addOption = React.useCallback(() => {
    setOptionList((prev) => {
      return prev.concat([{ text: "" }]);
    });
  }, []);
  const delOption = React.useCallback((index) => {
    setOptionList((prev) => {
      prev.splice(index, 1);
      return Array.from(prev);
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
  }, !editMode ? /* @__PURE__ */ React.createElement(RichText, {
    html: question
  }) : /* @__PURE__ */ React.createElement(RichEditor, {
    className: styles.Input,
    options: {
      image: true,
      heading: true,
      codeBlock: true,
      blockQuote: true,
      subscript: true
    },
    placeholder: "\u9898\u76EE",
    defaultValue: question,
    onChange: (value) => {
      setQuestion(value);
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
    }, /* @__PURE__ */ React.createElement(RichText, {
      html: item.text
    })) : /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: styles["Input-Box"]
    }, /* @__PURE__ */ React.createElement(RichEditor, {
      className: `${styles.Input} ${styles.Item}`,
      options: {
        image: true,
        heading: true,
        codeBlock: true,
        blockQuote: true,
        subscript: true
      },
      placeholder: "\u9009\u9879",
      defaultValue: item.text,
      onChange: (value) => {
        setOptionList((prev) => {
          const array = Array.from(prev);
          array[index] = {
            ...array[index],
            text: value
          };
          return array;
        });
      }
    }), /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      onClick: () => {
        delOption(index);
      },
      className: styles.Icon,
      fill: "#ef4444"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"
    })));
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
