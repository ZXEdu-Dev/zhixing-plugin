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
  const { input, onExecuted, mode = "display" } = options;
  const [question, setQuestion] = React.useState();
  const [multiple, setMultiple] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);
  const [answered, setAnswered] = React.useState();
  const [editMode, setEditMode] = React.useState(mode === "edit");
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
  React.useEffect(() => {
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
    } catch (e) {
      console.log(e);
    }
  }, [input]);
  const submit = React.useCallback(() => {
    setAnswered(answer);
    onExecuted(answer);
  }, [answer]);
  const addOption = React.useCallback(() => {
    setOptionList((prev) => {
      return prev.concat([""]);
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
  }, editMode === "display" ? question : /* @__PURE__ */ React.createElement("input", {
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
    return editMode === "display" ? /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${styles.Item} ${item.selected ? styles.Selected : ""}`,
      onClick: () => {
        select(item, index);
      }
    }, item.text) : /* @__PURE__ */ React.createElement("input", {
      placeholder: "\u9009\u9879",
      className: `${styles.Input} ${styles.Item}`,
      type: "text",
      value: item.text,
      onChange: (e) => {
        setOptionList((prev) => {
          const array = Array.from(prev);
          array[index] = e.target.value.trim();
          return array;
        });
      }
    });
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.Action
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: answer === answered,
    type: "button",
    onClick: submit,
    className: styles.Button
  }, "\u63D0\u4EA4"), editMode === "edit" && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: addOption,
    className: styles.Button
  }, "\u65B0\u589E"), mode === "edit" && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      if (editMode === "display") {
        setEditMode("edit");
      } else {
        setEditMode("display");
      }
    },
    className: styles.Button
  }, "\u5207\u6362")));
};
export { Widget as default };
